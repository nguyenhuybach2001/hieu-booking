"use client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "./index.css";
import { tripApi } from "@/api/tripApi";
import apiCaller from "@/api/apiCaller";
import { useRouter } from "next/navigation";

export default function TripListPage() {
  const router = useRouter();
  const [listTrips, setListTrips] = useState([])
  const [trips, setTrips] = useState([])
  const errorHandler = (error) => {
    console.log("Fail: ", error);
  };
  const getListTrips = async () => {
    const res = await apiCaller({
      request: tripApi.listTrips(),
      errorHandler,
    });
    if (res) {
      setListTrips(res.data)
    }
  }
  useEffect(() => {
    const Data = JSON.parse(localStorage.getItem('data'))
    setTrips(Data)
    getListTrips()
  }, [])
  const items1 = [
    {
      value: '0',
      label: "Đã hủy",
    },
    {
      value: '1',
      label: "Đã đặt, chưa thanh toán",
    },
    {
      value: '2',
      label: "Đã thanh toán",
    }
  ];
  const columns = [
    {
      title: "Hành trình",
      dataIndex: "chuyenId",
      key: "trip",
      width: 200,
      render: (text) => <p>{listTrips.find((item) => item.chuyenId === text)?.maChuyen}</p>
    },
    {
      title: "Ngày xuất bến",
      dataIndex: "chuyenId",
      key: "date",
      render: (text) => <p>{listTrips.find((item) => item.chuyenId === text)?.thoiGianDi.split(" ")[0]}</p>
    },
    {
      title: "Giờ xuất bến",
      dataIndex: "chuyenId",
      key: "time_start",
      render: (text) => <p>{listTrips.find((item) => item.chuyenId === text)?.thoiGianDi.split(" ")[1]}</p>
    },
    {
      title: "Thành tiền(VNĐ)",
      dataIndex: "hoaDon",
      key: "bill",
    },
    {
      title: "Trạng thái",
      dataIndex: "trangThaiVe",
      key: "state",
      render: (text) => <p>{items1.find((item) => item.value === text)?.label}</p>
    },
    {
      title: "",
      dataIndex: "see",
      key: "see",
      render: (text, record) => (
        <button
          className="bg-orange-400 py-2 px-5 w-full rounded-lg text-white"
          onClick={() => {
            router.push("/ticket");

          }}
        >
          Xem
        </button>
      ),
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
            <p className="font-medium">{trips?.[0]?.hoTenKhach}</p>
          </div>
          <div className="flex justify-between gap-10 mt-5">
            <p>Số điện thoại:</p>
            <p className="font-medium">{trips?.[0]?.sdtKhach}</p>
          </div>
          <div className="flex justify-between gap-10 mt-5">
            <p>Email</p>
            <p className="font-medium">{trips?.[0]?.emailKhack}</p>
          </div>
        </div>

        <div className="mt-10">
          <Table
            columns={columns}
            dataSource={trips}
            rowClassName={() => "custom-table-row"}
            pagination={{ pageSize: 4 }}
          />
        </div>
      </div>
    </div>
  );
}
