"use client";
import { Button, Form, Input, Modal, Select, Space, Table } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import "./style.css";

export default function Trip() {
  const [form] = Form.useForm();
  const [tripId, setTripId] = useState(null);
  const [isModal, setIsModal] = useState({ isOpen: false, mode: "" });
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      bien_xe: "22c1-3333",
      seat_null: "1",
      start_time: "Meo",
      trip: "mi",
      route: 32,
      status: 1,
      diem_den: "dd",
      diem_di: "dssdss",
    },
  ]);
  const items1 = [
    {
      value: 1,
      label: "Chưa xuất bến",
    },
    {
      value: 2,
      label: "Hủy chuyến",
    },
    {
      value: 3,
      label: "Đang di chuyển",
    },
  ];
  const items2 = [
    { value: 3, label: "Đang di chuyển" },
    {
      value: 4,
      label: "Hoàn thành",
    },
  ];
  const dataTable = dataSource.map((val) => {
    return {
      id: val.id,
      bien_xe: val.bien_xe,
      seat_null: val.seat_null,
      start_time: val.start_time,
      trip: val.trip,
      route: val.route,
      status: val.status,
      address: val.diem_di + "-" + val.diem_den,
    };
  });
  console.log(dataTable);
  const columns = [
    {
      title: "Mã chuyến",
      dataIndex: "trip",
      key: "trip",
    },
    {
      title: "Tuyến đường",
      dataIndex: "route",
      key: "route",
    },
    {
      title: "Biển số xe",
      dataIndex: "bien_xe",
      key: "bien_xe",
    },
    {
      title: "Điểm đi - Điểm đến",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Ghế trống",
      dataIndex: "seat_null",
      key: "seat_null",
    },
    {
      title: "Thời gian xuất bến",
      dataIndex: "start_time",
      key: "start_time",
    },
    {
      title: "Trạng thái",
      key: "status",
      align: "center",
      width: 150,
      render: (_, record) => (
        <div
          className="flex justify-center"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {record.status === 4 ? (
            <p className="text-white bg-[#27AE60] w-fit p-2 rounded-3xl">
              Hoàn thành
            </p>
          ) : record.status === 2 ? (
            <p className="w-fit p-2 rounded-3xl border border-solid border-[#4F4F4F]">
              Đã hủy
            </p>
          ) : (
            <Select
              className={`w-full ${
                record.status === 3 ? "custom1" : "custom2"
              } `}
              onChange={(e) => {
                setDataSource(
                  dataSource.map((route) =>
                    route.id === record.id ? { ...route, status: e } : route
                  )
                );
              }}
              defaultValue={record.status}
              options={record.status === 3 ? items2 : items1}
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
            form.setFieldsValue(record);
          }}
          type="primary"
        >
          Chi tiết vé
        </div>
      ),
      key: "detail_ticket",
    },
  ];
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
          route.id === tripId ? { ...route, ...values } : route
        )
      );
    }
    setIsModal({ isOpen: false, mode: "" });
    form.resetFields();
  };
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
              setTripId(record.id);
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
              name="trip"
              rules={[{ required: true, message: "Vui lòng nhập biển số xe" }]}
            >
              <Input className="h-12" type="text" />
            </Form.Item>
            <Form.Item
              label="Tuyến đường"
              name="route"
              rules={[{ required: true, message: "Vui lòng nhập tên tài xế" }]}
            >
              <Input className={"h-12"} type="text" />
            </Form.Item>
            <Form.Item
              label="Biển số xe"
              name="bien_xe"
              rules={[{ required: true, message: "Vui lòng nhập Sđt tài xế" }]}
            >
              <Input className={"h-12"} type="text" />
            </Form.Item>
            <Form.Item
              label="Điểm đi"
              name="diem_di"
              rules={[{ required: true, message: "Vui lòng chọn hạng xe" }]}
            >
              <Input className={"h-12"} type="text" />
            </Form.Item>
            <Form.Item
              label="Điểm đến"
              name="diem_den"
              rules={[{ required: true, message: "Vui lòng chọn tuyến đường" }]}
            >
              <Input className={"h-12"} type="text" />
            </Form.Item>
            <Form.Item
              label="Thời gian xuất bến"
              name="start_time"
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
                setTripId(null);
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
