"use client";
import apiCaller from "@/api/apiCaller";
import { localApi } from "@/api/localApi";
import { routeApi } from "@/api/routeApi";
import { Button, Form, Input, Modal, Select, Table } from "antd";
import React, { useEffect, useState } from "react";

function getNameById(id, data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      return data[i].name;
    }
  }
  return null; // Return null if no matching id is found
}

export default function Route() {
  const [isModal, setIsModal] = useState({ isOpen: false, mode: "" });
  const [routeId, setRouteId] = useState(null);
  const [dataRoutes, setDataRoutes] = useState([])
  const [dataLocals, setDataLocals] = useState([])
  const [form] = Form.useForm();
  const errorHandler = (error) => {
    console.log("Fail: ", error);
  };

  const getAllRoute = async () => {
    const res = await apiCaller({
      request: routeApi.getAllRoutes(),
      errorHandler,
    });
    if (res) {
      setDataRoutes(res.data)
      console.log(res.data)
    }
  };
  const getLocationTreeByCondition = async () => {
    const data = {
      status: 1
    }
    const res = await apiCaller({
      request: localApi.getLocationTreeByCondition(data),
      errorHandler,
    });
    if (res) {
      setDataLocals(res.data)
    }
  };
  useEffect(() => {
    getAllRoute()
    getLocationTreeByCondition()
  }, [])
  const columns = [
    {
      title: "Tên tuyến đường",
      dataIndex: "tenTuyenDuong",
      key: "tenTuyenDuong",
    },
    {
      title: "Điểm A",
      dataIndex: "diemDungA",
      key: "diemDungA",
      render: (text) => <p>{getNameById(text, dataLocals)}</p>,
    },
    {
      title: "Điểm B",
      dataIndex: "diemDungB",
      key: "diemDungB",
      render: (text) => <p>{getNameById(text, dataLocals)}</p>,
    },
    {
      title: "Khoảng cách (km)",
      dataIndex: "khoangCach",
      key: "khoangCach",
    },
    {
      title: "Thời gian di chuyển",
      dataIndex: "thoiGianDiChuyen",
      key: "thoiGianDiChuyen",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Button
          onClick={() => {
            setIsModal({ isOpen: true, mode: "edit" });
            setRouteId(record.tuyenDuongID);
            form.setFieldValue(record);
          }}
          type="primary"
          className="bg-[#F2994A]"
        >
          Sửa
        </Button>
      ),
    },
  ];
  const handleFormSubmit = async (values) => {
    const data = {
      "tenTuyenDuong": values.tenTuyenDuong,
      "khoangCach": values.khoangCach,
      "thoiGianDiChuyen": values.thoiGianDiChuyen,
      "diemDungA": values.diemDungA,
      "diemDungB": values.diemDungB
    }
    const data1 = {
      tuyenDuongID: routeId,
      tenTuyenDuong: values.tenTuyenDuong,
      khoangCach: values.khoangCach,
      thoiGianDiChuyen: values.thoiGianDiChuyen,
      diemDungA: values.diemDungA,
      diemDungB: values.diemDungB
    }
    const res = await apiCaller({
      request: isModal.mode === "edit" ? routeApi.updateRoute(data1) : routeApi.createRoute(data),
      errorHandler,
    });
    if (res) {
      getAllRoute()
      setIsModal({ isOpen: false, mode: "" });
      form.resetFields();
    }
  };
  const result = dataLocals.map(item => ({
    value: item.id,
    label: item.name
  }));
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <p className="text-xl font-bold">
          Danh sách tuyến đường đang khai thác
        </p>
        <Button
          onClick={() => {
            setIsModal({ isOpen: true, mode: "create" });
            form.resetFields()
          }}
          type="primary"
          className="h-11"
        >
          Thêm tuyến đường
        </Button>
      </div>
      <Table dataSource={dataRoutes} columns={columns} />
      <Modal
        title={
          isModal.mode === "edit"
            ? "Chỉnh sửa thông tin tuyến đường"
            : "Thêm tuyến đường"
        }
        open={isModal.isOpen}
        onCancel={() => {
          setIsModal({ isOpen: false, mode: "" });
          form.resetFields()
        }}
        footer={false}
      >
        <Form layout="vertical" form={form} onFinish={handleFormSubmit}>
          <Form.Item
            label="Tên tuyến đường"
            name="tenTuyenDuong"
            rules={[
              { required: true, message: "Vui lòng nhập tên tuyến đường" },
            ]}
          >
            <Input className="h-12" type="text" />
          </Form.Item>
          <div className="grid grid-cols-2 gap-8">
            <Form.Item
              label="Điểm A"
              name="diemDungA"
              rules={[{ required: true, message: "Vui lòng nhập điểm A" }]}
            >
              <Select
                placeholder="Chọn địa điểm"
                className="w-full h-[56px] "
                allowClear
                options={result}
              />
            </Form.Item>
            <Form.Item
              label="Điểm B"
              name="diemDungB"
              rules={[{ required: true, message: "Vui lòng nhập điểm B" }]}
            >
              <Select
                placeholder="Chọn địa điểm"
                className="w-full h-[56px] "
                allowClear
                options={result}
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Form.Item
              label="Khoảng cách (km)"
              name="khoangCach"
              rules={[{ required: true, message: "Vui lòng nhập khoảng cách" }, {
                pattern: /^\d+$/,
                message: "Chỉ được phép nhập số",
              },]}
            >
              <Input className={"h-12"} type="text" />
            </Form.Item>
            <Form.Item
              label="Thời gian di chuyển"
              name="thoiGianDiChuyen"
              rules={[{ required: true, message: "Vui lòng nhập thời gian di chuyển" }]}
            >
              <Input className={"h-12"} type="text" />
            </Form.Item>
          </div>
          <Form.Item className="flex justify-end">
            <Button
              className="h-12 mr-5 w-32"
              onClick={() => {
                setIsModal({ isOpen: false, mode: "" });
                form.resetFields();
                setRouteId(null);
              }}
            >
              {" "}
              Hủy
            </Button>
            <Button className="h-12 w-32" type="primary" htmlType="submit">
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
