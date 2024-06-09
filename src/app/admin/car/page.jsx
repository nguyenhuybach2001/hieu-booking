"use client";
import { Button, Form, Input, Modal, Space, Table } from "antd";
import React, { useState } from "react";

export default function Car() {
  const [isModal, setIsModal] = useState({ isOpen: false, mode: "" });
  const [form] = Form.useForm();
  const [carId, setCarId] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      bien_xe: "22c1-3333",
      name: "1",
      phone: "Meo",
      class: "mi",
      route: 32,
      price: 32323,
    },
    {
      id: 2,
      bien_xe: "22c1-3333",
      name: "2",
      phone: "Meo",
      class: "mi",
      route: 32,
      price: 32323,
    },
    {
      id: 3,
      bien_xe: "22c1-3333",
      name: "3",
      phone: "Meo",
      class: "mi",
      route: 32,
      price: 32323,
    },
  ]);
  const handleFormSubmit = (values) => {
    if (isModal.mode === "create") {
      const newRoute = {
        ...values,
        id: dataSource.length
          ? Math.max(...dataSource.map((route) => route.id)) + 1
          : 1,
      };
      setDataSource([...dataSource, newRoute]);
    } else {
      setDataSource(
        dataSource.map((route) =>
          route.id === carId ? { ...route, ...values } : route
        )
      );
    }
    setIsModal({ isOpen: false, mode: "" });
    form.resetFields();
  };
  const columns = [
    {
      title: "Biển số",
      dataIndex: "bien_xe",
      key: "bien_xe",
    },
    {
      title: "Tài xế",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Sđt tài xế",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Hạng xe",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Tuyến đường",
      dataIndex: "route",
      key: "route",
    },
    {
      title: "Giá vé (VND)",
      dataIndex: "price",
      key: "price",
    },
  ];
  const handleDelete = () => {
    setDataSource(dataSource.filter((route) => route.id !== carId));
    setIsModal({ isOpen: false, mode: "" });
    form.resetFields();
    setCarId(null);
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
        rowClassName={"cursor-pointer"}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              setIsModal({ isOpen: true, mode: "edit" });
              setCarId(record.id);
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
        }}
        footer={false}
      >
        <Form layout="vertical" form={form} onFinish={handleFormSubmit}>
          <div className="grid grid-cols-2 gap-8">
            <Form.Item
              label="Biển số"
              name="bien_xe"
              rules={[{ required: true, message: "Vui lòng nhập biển số xe" }]}
            >
              <Input className="h-12" type="text" />
            </Form.Item>
            <Form.Item
              label="Tài xế"
              name="name"
              rules={[{ required: true, message: "Vui lòng nhập tên tài xế" }]}
            >
              <Input className={"h-12"} type="text" />
            </Form.Item>
            <Form.Item
              label="Sđt tài xế"
              name="phone"
              rules={[{ required: true, message: "Vui lòng nhập Sđt tài xế" }]}
            >
              <Input className={"h-12"} type="text" />
            </Form.Item>
            <Form.Item
              label="Hạng xe"
              name="class"
              rules={[{ required: true, message: "Vui lòng chọn hạng xe" }]}
            >
              <Input className={"h-12"} type="text" />
            </Form.Item>
            <Form.Item
              label="Tuyến đường"
              name="route"
              rules={[{ required: true, message: "Vui lòng chọn tuyến đường" }]}
            >
              <Input className={"h-12"} type="text" />
            </Form.Item>
            <Form.Item
              label="Giá vé (VNĐ)"
              name="price"
              rules={[{ required: true, message: "Vui lòng nhập giá vé" }]}
            >
              <Input className={"h-12"} type="text" />
            </Form.Item>
          </div>
          <Form.Item className="flex justify-end">
            <Button
              className="h-12  w-32"
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
                className="h-12 m-5 w-32"
                onClick={handleDelete}
              >
                Xóa
              </Button>
            )}
            <Button className="h-12 w-32" type="primary" htmlType="submit">
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
