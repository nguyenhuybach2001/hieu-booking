"use client";
import apiCaller from "@/api/apiCaller";
import { routeApi } from "@/api/routeApi";
import { xeApi } from "@/api/xeApi";
import { Button, Form, Input, Modal, Select, Space, Table } from "antd";
import React, { useEffect, useState } from "react";

export default function Car() {
  const [isModal, setIsModal] = useState({ isOpen: false, mode: "" });
  const [form] = Form.useForm();
  const [carId, setCarId] = useState(null);
  const [dataSource, setDataSource] = useState([]);
  const [dataRoute, setDataRoute] = useState([]);
  const errorHandler = (error) => {
    console.log("Fail: ", error);
  };
  const getAllCar = async () => {
    const res = await apiCaller({
      request: xeApi.getAllVehicles(),
      errorHandler,
    });
    if (res) {
      setDataSource(res.data)
      console.log(res.data)
    }
  };
  const getAllRoute = async () => {
    const res = await apiCaller({
      request: routeApi.getAllRoutes(),
      errorHandler,
    });
    if (res) {
      setDataRoute(res.data)
      console.log(res.data)
    }
  };
  useEffect(() => {
    getAllCar()
    getAllRoute()
  }, [])
  const routeSelect = dataRoute.map(item => ({
    value: item.tuyenDuongID,
    label: item.tenTuyenDuong
  }));

  const handleFormSubmit = async (values) => {
    const data = {
      "bienSo": values.bienSo,
      "taiXe": values.taiXe,
      "sdtTaiXe": values.sdtTaiXe,
      "giaVe": values.giaVe,
      "hangXeID": values.hangXeID,
      "tuyenDuongID": values.tuyenDuongID
    }
    const data1 = {
      xeId: carId,
      "bienSo": values.bienSo,
      "taiXe": values.taiXe,
      "sdtTaiXe": values.sdtTaiXe,
      "giaVe": values.giaVe,
      "hangXeID": values.hangXeID,
      "tuyenDuongID": values.tuyenDuongID
    }
    console.log(data1,"ffffff")
    const res = await apiCaller({
      request: isModal.mode === "edit" ? xeApi.updateVehicle(data1) : xeApi.createVehicle(data),
      errorHandler,
    });
    if (res) {
      console.log(res.data)
      getAllCar()
      setIsModal({ isOpen: false, mode: "" });
      form.resetFields();
    }
  };
  const items = [{
    value: "27d7e26b-00f4-4f0f-b9e1-b388e82a64ee", label: "Economic"
  },
  {
    value: "9ae69232-7a4a-43e5-8c19-363c92069ba7", label: "Luxury"
  }, {
    value: "a95ebce2-77b4-44c8-8c18-2e0e3dae6875", label: "Bussiess"
  }]
  const columns = [
    {
      title: "Biển số",
      dataIndex: "bienSo",
      key: "bienSo",
    },
    {
      title: "Tài xế",
      dataIndex: "taiXe",
      key: "taiXe",
    },
    {
      title: "Sđt tài xế",
      dataIndex: "sdtTaiXe",
      key: "sdtTaiXe",
    },
    {
      title: "Hạng xe",
      dataIndex: "hangXeID",
      key: "hangXeID",
      render: (text)=><p>{items.find((item) => item.value === text).label}</p>
    },
    {
      title: "Tuyến đường",
      dataIndex: "tuyenDuongID",
      key: "tuyenDuongID",
      render: (text)=><p>{dataRoute.find((item) => item.tuyenDuongID === text).tenTuyenDuong}</p>
    },
    {
      title: "Giá vé (VND)",
      dataIndex: "giaVe",
      key: "giaVe",
    },
  ];
  const handleDelete = async () => {
    const data = {
      "xeId": carId,
    }
    const res = await apiCaller({
      request: xeApi.deleteVehicle(data),
      errorHandler,
    });
    if (res) {
      getAllCar()
      setIsModal({ isOpen: false, mode: "" });
      form.resetFields();
      setCarId(null);
    }

  };
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <p className="text-xl font-bold">Danh sách xe</p>
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
        rowClassName={"cursor-pointer"}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              setIsModal({ isOpen: true, mode: "edit" });
              setCarId(record.xeId);
              form.setFieldsValue(record);
            },
          };
        }}
        dataSource={dataSource}
        columns={columns}
      />
      <Modal
        title={isModal.mode === "edit" ? "Chỉnh sửa thông tin xe" : "Thêm xe"}
        open={isModal.isOpen}
        onCancel={() => {
          setIsModal({ isOpen: false, mode: "" });
          form.resetFields()
        }}
        footer={false}
      >
        <Form layout="vertical" form={form} onFinish={handleFormSubmit}>
          <div className="grid grid-cols-2 gap-8">
            <Form.Item
              label="Biển số"
              name="bienSo"
              rules={[{ required: true, message: "Vui lòng nhập biển số xe" }]}
            >
              <Input className="h-12" type="text" />
            </Form.Item>
            <Form.Item
              label="Tài xế"
              name="taiXe"
              rules={[{ required: true, message: "Vui lòng nhập tên tài xế" }]}
            >
              <Input className={"h-12"} type="text" />
            </Form.Item>
            <Form.Item
              label="Sđt tài xế"
              name="sdtTaiXe"
              rules={[{ required: true, message: "Vui lòng nhập Sđt tài xế" }]}
            >
              <Input className={"h-12"} type="text" />
            </Form.Item>
            <Form.Item
              label="Hạng xe"
              name="hangXeID"
              rules={[{ required: true, message: "Vui lòng chọn hạng xe" }]}
            >
              <Select
                placeholder="Chọn địa điểm"
                className="w-full h-[56px] "
                allowClear
                options={items}
              />
            </Form.Item>
            <Form.Item
              label="Tuyến đường"
              name="tuyenDuongID"
              rules={[{ required: true, message: "Vui lòng chọn tuyến đường" }]}
            >
              <Select
                placeholder={"Chọn tuyến đường"}
                className="w-full h-[56px] "
                //style={{ width: 120 }}
                options={routeSelect}
              />
            </Form.Item>
            <Form.Item
              label="Giá vé (VNĐ)"
              name="giaVe"
              rules={[{ required: true, message: "Vui lòng nhập giá vé" }]}
            >
              <Input className={"h-12"} type="text" />
            </Form.Item>
          </div>
          <Form.Item className="flex justify-end">
            <Button
              className="h-12 m-3 w-32"
              onClick={() => {
                setIsModal({ isOpen: false, mode: "" });
                form.resetFields();
                setCarId(null);
              }}
            >
              {" "}
              Hủy
            </Button>
            {isModal.mode === "edit" && (
              <Button
                danger
                type="primary"
                className="h-12 m-3 w-32"
                onClick={handleDelete}
              >
                Xóa
              </Button>
            )}
            <Button className="h-12 m-3 w-32" type="primary" htmlType="submit">
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
