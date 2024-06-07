"use client";
import { Button, Space, Table } from "antd";
import React from "react";

export default function Trip() {
  const columns = [
    {
      title: "Mã chuyến",
      dataIndex: "id",
      key: "STT",
    },
    {
      title: "Tuyến đường",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Biển số xe",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Điểm đi - Điểm đến",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Ghế trống",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Thời gian xuất bến",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Trạng thái",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <p className="text-xl font-bold">Danh sách chuyến đi</p>
        <Button type="primary" className="h-11 w-20">
          Thêm
        </Button>
      </div>
      <Table columns={columns} />
    </div>
  );
}
