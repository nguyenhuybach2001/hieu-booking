"use client";
import { Button, Space, Table } from "antd";
import React from "react";

export default function Car() {
  const columns = [
    {
      title: "Biển số",
      dataIndex: "id",
      key: "STT",
    },
    {
      title: "Tài xế",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Sđt tài xế",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Hạng xe",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tuyến đường",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Giá vé (VND)",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <p className="text-xl font-bold">Danh sách xe</p>
        <Button type="primary" className="h-11 w-20">
          Thêm
        </Button>
      </div>
      <Table columns={columns} />
    </div>
  );
}
