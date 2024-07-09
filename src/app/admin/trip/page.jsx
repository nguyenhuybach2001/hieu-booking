"use client";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
} from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./style.css";
import apiCaller from "@/api/apiCaller";
import { tripApi } from "@/api/tripApi";
import { routeApi } from "@/api/routeApi";
import { localApi } from "@/api/localApi";
import { xeApi } from "@/api/xeApi";

import moment from 'moment';

export default function Trip() {
  const [form] = Form.useForm();
  const [tripId, setTripId] = useState(null);
  const [isModal, setIsModal] = useState({ isOpen: false, mode: "" });
  const [dataRoute, setDataRoutes] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [dataLocals, setDataLocals] = useState([]);
  const [dataCar, setDataCar] = useState([]);

  const errorHandler = (error) => {
    console.log("Fail: ", error);
  };
  const listTrips = async () => {
    const res = await apiCaller({
      request: tripApi.listTrips(),
      errorHandler,
    });
    if (res) {
      setDataSource(res.data);
      console.log(res.data);
    }
  };
  const getAllRoute = async () => {
    const res = await apiCaller({
      request: routeApi.getAllRoutes(),
      errorHandler,
    });
    if (res) {
      setDataRoutes(res.data);
      console.log(res.data);
    }
  };
  const getLocationTreeByCondition = async () => {
    const data = {
      status: 1,
    };
    const res = await apiCaller({
      request: localApi.getLocationTreeByCondition(data),
      errorHandler,
    });
    if (res) {
      setDataLocals(res.data);
    }
  };
  const getAllCar = async () => {
    const res = await apiCaller({
      request: xeApi.getAllVehicles(),
      errorHandler,
    });
    if (res) {
      setDataCar(res.data);
      console.log(res.data);
    }
  };
  const updateStatusTrip = async (status, chuyenId) => {
    const data = {
      chuyenId: chuyenId,
      trangThai: status,
    };
    console.log(data, chuyenId);
    const res = await apiCaller({
      request: tripApi.updateStatusTrip(data),
      errorHandler,
    });
    if (res) {
      console.log(res.data);
      listTrips();
    }
  };
  useEffect(() => {
    getAllCar();
    listTrips();
    getAllRoute();
    getLocationTreeByCondition();
  }, []);
  const items1 = [
    {
      value: 1,
      label: "Chưa xuất bến",
    },
    {
      value: 0,
      label: "Hủy chuyến",
    },
    {
      value: 2,
      label: "Đang di chuyển",
    },
  ];
  const items2 = [
    { value: 2, label: "Đang di chuyển" },
    {
      value: 3,
      label: "Hoàn thành",
    },
  ];
  const dataTable = dataSource.map((val) => {
    return {
      id: val.chuyenId,
      xeId: val.xeId,
      gheConTrong: val.gheConTrong,
      thoiGianDi: moment(val.thoiGianDi, "DD/MM/YYYY HH:mm:ss"),
      maChuyen: val.maChuyen,
      tuyenDuongId: val.tuyenDuongId,
      status: val.trangThai,
      address: val.idDiemDi + "+" + val.idDiemDen,
    };
  });
  const getNameFromId = (inputString, data) => {
    const ids = inputString.split("+");
    const names = ids.map((id) => {
      const found = data.find((item) => item.id === id);
      return found ? found.name : null;
    });

    return names.join(" - ");
  };
  const getBienSoFromXeId = (id, vehicles) => {
    const vehicle = vehicles.find((item) => item.xeId === id);
    return vehicle ? vehicle.bienSo : null;
  };
  const columns = [
    {
      title: "Mã chuyến",
      dataIndex: "maChuyen",
      key: "maChuyen",
    },
    {
      title: "Biển số xe",
      dataIndex: "xeId",
      key: "xeId",
      render: (text) => <p>{getBienSoFromXeId(text, dataCar)}</p>,
    },
    {
      title: "Điểm đi - Điểm đến",
      dataIndex: "address",
      key: "address",
      render: (text) => <p>{getNameFromId(text, dataLocals)}</p>,
    },
    {
      title: "Ghế trống",
      dataIndex: "gheConTrong",
      key: "gheConTrong",
    },
    {
      title: "Thời gian xuất bến",
      dataIndex: "thoiGianDi",
      key: "thoiGianDi",
      render(momentTime) {
        return momentTime.format("DD/MM/YYYY HH:mm");
      }
    },
    {
      title: "Trạng thái",
      key: "status",
      align: "center",
      width: 150,
      dataIndex: "status",
      render: (text, record) => (
        <div
          className="flex justify-center"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {Number(text) === 3 ? (
            <p className="text-white bg-[#27AE60] w-fit p-2 rounded-3xl">
              Hoàn thành
            </p>
          ) : Number(text) === 0 ? (
            <p className="w-fit p-2 rounded-3xl border border-solid border-[#4F4F4F]">
              Đã hủy
            </p>
          ) : (
            <Select
              className={`w-full ${Number(text) === 2 ? "custom1" : "custom2"
                } `}
              onChange={(e) => {
                updateStatusTrip(e, record.id);
              }}
              defaultValue={Number(text)}
              options={Number(text) === 2 ? items2 : items1}
            />
          )}
        </div>
      ),
    },
    {
      title: "",
      render: (_, record) => (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsModal({ isOpen: true, mode: "edit" });
            setTripId(record.id);
            //setDataRoutes(record.tuyenDuongId)
            form.setFieldsValue({
              maChuyen: record.maChuyen,
              tuyenDuongId: record.tuyenDuongId,
              xeId: record.xeId,
              idDiemDi: record.address.split("+")[0],
              idDiemDen: record.address.split("+")[1],
            });
          }}
          type="primary"
        >
          Cập nhật chuyến đi
        </div>
      ),
      key: "detail_ticket",
    },
  ];

  const handleFormSubmit = async (values) => {
    const formattedDate = `${values.thoiGianDi.$D
      .toString()
      .padStart(2, "0")}/${(values.thoiGianDi.$M + 1)
        .toString()
        .padStart(2, "0")}/${values.thoiGianDi.$y} ${values.thoiGianDi.$H
          .toString()
          .padStart(2, "0")}:${values.thoiGianDi.$m
            .toString()
            .padStart(2, "0")}:${values.thoiGianDi.$s.toString().padStart(2, "0")}`;
    //const formattedDate = moment(values.thoiGianDi, "DD/MM/YYYY HH:mm:ss");
    const data = {
      maChuyen: values.maChuyen,
      tuyenDuongId: values.tuyenDuongId,
      xeId: values.xeId,
      idDiemDi: values.idDiemDi,
      idDiemDen: values.idDiemDen,
      thoiGianDi: formattedDate,
    };
    const data1 = {
      chuyenId: tripId,
      maChuyen: values.maChuyen,
      tuyenDuongId: values.tuyenDuongId,
      xeId: values.xeId,
      idDiemDi: values.idDiemDi,
      idDiemDen: values.idDiemDen,
      thoiGianDi: formattedDate,
    };
    const res = await apiCaller({
      request:
        isModal.mode === "edit" ? tripApi.updateTrip(data1) : tripApi.createTrip(data),
        //tripId !== null ? tripApi.updateTrip(data1) : tripApi.createTrip(data),
      errorHandler,
    });
    if (res) {
      console.log(res.data);
      await listTrips();
      await getAllCar();
    }
    setIsModal({ isOpen: false, mode: "" });
    form.resetFields();
  };
  const itemCar = dataCar.map((item) => ({
    value: item.xeId,
    label: item.bienSo,
  }));
  const itemRoute = dataLocals.map((item) => ({
    value: item.code,
    label: item.name,
  }));
  const routeSelect = dataRoute.map(item => ({
    value: item.tuyenDuongID,
    label: item.tenTuyenDuong
  }));
  const itemCar1 = dataCar.map((item) => ({
    value: item.xeId,
    label: item.tuyenDuongID,
  }));
  
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <p className="text-xl font-bold">Danh sách chuyến đi</p>
        <Button
          type="primary"
          className="h-11 w-20"
          onClick={() => {
            setIsModal({ isOpen: true, mode: "create" });
          }}
        >
          Thêm
        </Button>
      </div>
      <Table
        scroll={{ x: 900 }}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              setIsModal({ isOpen: true, mode: "edit" });
              setTripId(record.chuyenid);
              form.setFieldsValue(record);
            },
          };
        }}
        dataSource={dataTable}
        columns={columns}
      />
      <Modal
        title={isModal.mode === "edit" ? "Chỉnh sửa thông tin xe" : "Thêm xe"}
        open={isModal.isOpen}
        onCancel={() => {
          setIsModal({ isOpen: false, mode: "" });
        }}
        footer={false}
      >
        <Form layout="vertical" form={form} onFinish={handleFormSubmit}>
          <div className="grid grid-cols-2 gap-8">
            <Form.Item
              label="Mã chuyến"
              name="maChuyen"
              rules={[{ required: true, message: "Vui lòng nhập Mã chuyến" }]}
            >
              <Input className="w-full h-[56px] " type="text" />
            </Form.Item>

            <Form.Item
              label="Biển số xe"
              name="xeId"
              rules={[{ required: true, message: "Vui lòng nhập Biển số xe" }]}
            >
              <Select
                placeholder="Chọn địa điểm"
                className="w-full h-[56px] "
                allowClear
                options={itemCar}
                onChange={(xeId) => {
                  // Find the corresponding route ID based on selected bus ID (xeId)
                  const selectedRouteId = itemCar1.find((item) => item.value === xeId);
                  console.log(selectedRouteId) //todo

                  const routeId = selectedRouteId.label;

                  // Find the corresponding route based on the route ID
                  const selectedRoute = routeSelect.find((route) => route.value === routeId);

                  console.log(selectedRoute) //todo

                  const routeName = selectedRoute ? selectedRoute.label : ""; // Get the route name

                  form.setFieldsValue({ tenTuyenDuong: routeName }); // Update the form field
                  console.log(routeName)
                }}
              />
            </Form.Item>

            <Form.Item label="Tên tuyến đường" name="tenTuyenDuong">
             <Input readOnly className="w-full h-[56px] "/>
            </Form.Item>

            <Form.Item
              label="Điểm đi"
              name="idDiemDi"
              rules={[{ required: true, message: "Vui lòng chọn Điểm đi" }]}
            >
              <Select
                placeholder="Chọn địa điểm"
                className="w-full h-[56px] "
                allowClear
                options={itemRoute}
              />
            </Form.Item>
            <Form.Item
              label="Điểm đến"
              name="idDiemDen"
              rules={[{ required: true, message: "Vui lòng chọn Điểm đến" }]}
            >
              <Select
                placeholder="Chọn địa điểm"
                className="w-full h-[56px] "
                allowClear
                options={itemRoute}
              />
            </Form.Item>{
              (<Form.Item
                label="Thời gian xuất bến"
                name="thoiGianDi"
                rules={[{ required: true, message: "Vui lòng nhập Thời gian xuất bến" }]}
              >
                <DatePicker showTime className="w-full h-[56px] "/>
              </Form.Item>)
              }

          </div>
          <Form.Item className="flex justify-end">
            <Button
              className="h-12  w-32"
              onClick={() => {
                setIsModal({ isOpen: false, mode: "" });
                form.resetFields();
                setTripId(null);
              }}
            >
              {" "}
              Hủy
            </Button>

            <Button className="h-12 w-32 ml-5" type="primary" htmlType="submit">
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
