"use client";
import React, { useState } from "react";
import { Table } from "antd";
import "./index.css";

export default function TripListPage() {
  const columns = [
    {
      title: "Hành trình",
      dataIndex: "trip",
      key: "trip",
      width: 200,
    },
    {
      title: "Ngày xuất bến",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Giờ xuất bến",
      dataIndex: "time_start",
      key: "time_start",
    },
    {
      title: "Ngày đặt",
      dataIndex: "booking_date",
      key: "booking_date",
    },
    {
      title: "Thành tiền(VNĐ)",
      dataIndex: "bill",
      key: "bill",
    },
    {
      title: "Trạng thái",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "",
      dataIndex: "see",
      key: "see",
      render: (text, record) => (
        <button
          className="bg-orange-400 py-2 px-5 w-full rounded-lg text-white"
          onClick={() => { }}
        >
          Xem
        </button>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      trip: "Hà Nội - Hải Phòng",
      date: "8/16/13",
      time_start: "11:00",
      booking_date: "5/27/15",
      bill: "1.000.000",
      state: "Đang chuẩn bị",
    },
    {
      key: "2",
      trip: "Hà Nội - Sơn La",
      date: "1/15/12",
      time_start: "22:00",
      booking_date: "9/4/12",
      bill: "1.000.000",
      state: "Đã hủy",
    },
    {
      key: "3",
      trip: "Hải Phòng - Đà Nẵng",
      date: "5/27/15",
      time_start: "23:00",
      booking_date: "6/19/14",
      bill: "600.000",
      state: "Hoàn thành",
    },
    {
      key: "4",
      trip: "Đà Lạt - Hà Nội",
      date: "1/15/12",
      time_start: "5:00",
      booking_date: "12/4/17",
      bill: "600.000",
      state: "Hoàn thành",
    },
    {
      key: "5",
      trip: "Đà Lạt - Hà Nội",
      date: "1/15/12",
      time_start: "5:00",
      booking_date: "12/4/17",
      bill: "600.000",
      state: "Hoàn thành",
    },
    {
      key: "6",
      trip: "Đà Lạt - Hà Nội",
      date: "1/15/12",
      time_start: "5:00",
      booking_date: "12/4/17",
      bill: "600.000",
      state: "Hoàn thành",
    },
    {
      key: "7",
      trip: "Đà Lạt - Hà Nội",
      date: "1/15/12",
      time_start: "5:00",
      booking_date: "12/4/17",
      bill: "600.000",
      state: "Hoàn thành",
    },
    {
      key: "8",
      trip: "Đà Lạt - Hà Nội",
      date: "1/15/12",
      time_start: "5:00",
      booking_date: "12/4/17",
      bill: "600.000",
      state: "Hoàn thành",
    },
  ];
  return (
    <div className="w-full bg-slate-100 h-full">
      <div className="max-w-6xl px-12 mx-auto pb-10">
        <div className="my-10 text-center underline font-bold text-5xl">
          Danh sách vé
        </div>
        <div className="max-w-[550px] mx-auto border rounded-md border-slate-500 bg-white p-5 text-sm">
          <div className="flex justify-between gap-10">
            <p>Họ và Tên:</p>
            <p className="font-medium">Kathryn Murphy</p>
          </div>
          <div className="flex justify-between gap-10 mt-5">
            <p>Số điện thoại:</p>
            <p className="font-medium">(704) 555-0127</p>
          </div>
          <div className="flex justify-between gap-10 mt-5">
            <p>Email</p>
            <p className="font-medium">willie.jennings@example.com</p>
          </div>
        </div>

        <div className="mt-10">
          <Table
            columns={columns}
            dataSource={data}
            rowClassName={() => "custom-table-row"}
            pagination={{ pageSize: 4 }}
          />
        </div>
      </div>
    </div>
  );
}
