"use client";
import { Button, Space, Table } from "antd";
import React from "react";

export default function Route() {
  const columns = [
    {
      title: "Tên tuyến đường",
      dataIndex: "id",
      key: "STT",
    },
    {
      title: "Điểm A",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Điểm B",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Khoảng cách (km)",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Thời gian di chuyển",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <p className="text-xl font-bold">
          Danh sách tuyến đường đang khai thác
        </p>
        <Button type="primary" className="h-11">
          Thêm tuyến đường
        </Button>
      </div>
      <Table columns={columns} />
    </div>
  );
}
