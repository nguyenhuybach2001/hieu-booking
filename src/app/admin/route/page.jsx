"use client";
import { Button, Form, Input, Modal, Table } from "antd";
import React, { useState } from "react";

export default function Route() {
  const [isModal, setIsModal] = useState({ isOpen: false, mode: "" });
  const [routeId, setRouteId] = useState(null);
  const [form] = Form.useForm();
  const columns = [
    {
      title: "Tên tuyến đường",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Điểm A",
      dataIndex: "start",
      key: "start",
    },
    {
      title: "Điểm B",
      dataIndex: "end",
      key: "end",
    },
    {
      title: "Khoảng cách (km)",
      dataIndex: "gap",
      key: "gap",
    },
    {
      title: "Thời gian di chuyển",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Button
          onClick={() => {
            setIsModal({ isOpen: true, mode: "edit" });
            setRouteId(record.id);
            form.setFieldsValue(record);
          }}
          type="primary"
          className="bg-[#F2994A]"
        >
          Sửa
        </Button>
      ),
    },
  ];
  
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "1",
      start: "Meo",
      end: "mi",
      gap: 32,
      time: 32323,
    },
    { id: 2, name: "2", start: "Mike", end: "mi", gap: 32, time: 32323 },
    { id: 3, name: "3", start: "Mai", end: "mi", gap: 32, time: 32323 },
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
          route.id === routeId ? { ...route, ...values } : route
        )
      );
    }
    setIsModal({ isOpen: false, mode: "" });
    form.resetFields();
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <p className="text-xl font-bold">
          Danh sách tuyến đường đang khai thác
        </p>
        <Button
          onClick={() => {
            setIsModal({ isOpen: true, mode: "create" });
          }}
          type="primary"
          className="h-11"
        >
          Thêm tuyến đường
        </Button>
      </div>
      <Table dataSource={dataSource} columns={columns} />
      <Modal
        title={
          isModal.mode === "edit"
            ? "Chỉnh sửa thông tin tuyến đường"
            : "Thêm tuyến đường"
        }
        open={isModal.isOpen}
        onCancel={() => {
          setIsModal({ isOpen: false, mode: "" });
        }}
        footer={false}
      >
        <Form layout="vertical" form={form} onFinish={handleFormSubmit}>
          <Form.Item
            label="Tên tuyến đường"
            name="name"
            rules={[
              { required: true, message: "Vui lòng nhập tên tuyến đường" },
            ]}
          >
            <Input className="h-12" type="text" />
          </Form.Item>
          <div className="grid grid-cols-2 gap-8">
            <Form.Item
              label="Điểm A"
              name="start"
              rules={[{ required: true, message: "Vui lòng nhập điểm A" }]}
            >
              <Input className={"h-12"} type="text" />
            </Form.Item>
            <Form.Item
              label="Điểm B"
              name="end"
              rules={[{ required: true, message: "Vui lòng nhập điểm B" }]}
            >
              <Input className={"h-12"} type="text" />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Form.Item
              label="Khoảng cách (km)"
              name="gap"
              rules={[{ required: true, message: "Vui lòng nhập điểm A" }]}
            >
              <Input className={"h-12"} type="text" />
            </Form.Item>
            <Form.Item
              label="Thời gian di chuyển"
              name="time"
              rules={[{ required: true, message: "Vui lòng nhập điểm B" }]}
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
