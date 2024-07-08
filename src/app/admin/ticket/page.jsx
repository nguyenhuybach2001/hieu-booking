"use client";
import apiCaller from "@/api/apiCaller";
import { ticketApi } from "@/api/ticketApi";
import { tripApi } from "@/api/tripApi";
import { Button, Select, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function Ticket() {
  const [dataTickets, setDataTickets] = useState([])
  const [dataTrip, setDataTrip] = useState([])
  const errorHandler = (error) => {
    console.log("Fail: ", error);
  };
  const listTrips = async () => {
    const res = await apiCaller({
      request: tripApi.listTrips(),
      errorHandler,
    });
    if (res) {
      setDataTrip(res.data)
      console.log(res.data)
    }
  };
  const listVe = async () => {
    const res = await apiCaller({
      request: ticketApi.listVe(),
      errorHandler,
    });
    if (res) {
      setDataTickets(res.data)
      console.log(res.data)
    }
  };
  useEffect(() => {
    listTrips()
    listVe()
  }, [])
  const items1 = [
    {
      value: 1,
      label: "Chưa Thanh toán",
    },
    {
      value: 2,
      label: "Hủy ",
    },
    {
      value: 3,
      label: "Đã thanh toán",
    },
  ];
  const items2 = [
    { value: 3, label: "Đã thanh toán" },
    {
      value: 4,
      label: "Hoàn thành",
    },
  ];
  const ExportPdfButton = () => {
    const exportPDF = () => {
      const input = document.getElementById('table-to-pdf');
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('download.pdf');
      });
    };
  
    return <Button onClick={exportPDF}>Export PDF</Button>;
  };
  const columns = [
    {
      title: "Chuyến đi",
      dataIndex: "chuyenId",
      key: "chuyenId",
      render: (text)=><p>{dataTrip.find((item) => item.chuyenId === text)?.maChuyen}</p>
    },
    {
      title: "Tên khách hàng",
      dataIndex: "hoTenKhach",
      key: "hoTenKhach",
    },
    {
      title: "Sđt khách hàng",
      dataIndex: "sdtKhach",
      key: "sdtKhach",
    },
    {
      title: "Ghế đặt",
      dataIndex: "gheDat",
      key: "gheDat",
    },
    {
      title: "Trạng thái",
      key: "status",
      align: "center",
      width: 150,
      dataIndex: "trangThaiVe",
      render: (text, record) => (
        <div
          className="flex justify-center"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {Number(text) === 4 ? (
            <p className="text-white bg-[#27AE60] w-fit p-2 rounded-3xl">
              Hoàn thành
            </p>
          ) : Number(text) === 2 ? (
            <p className="w-fit p-2 rounded-3xl border border-solid border-[#4F4F4F]">
              Đã hủy
            </p>
          ) : (
            <Select
              className={`w-full ${Number(text) === 3 ? "custom1" : "custom2"
                } `}
              onChange={(e) => {
                updateStatusTrip(e, record.id)
              }}
              defaultValue={Number(text)}
              options={Number(text) === 3 ? items2 : items1}
            />
          )}
        </div>
      ),
    },
    {
      title: "Hóa đơn",
      dataIndex: "hoaDon",
      key: "hoaDon",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <p className="text-xl font-bold">Danh sách xe</p>
        <ExportPdfButton/>
      </div>
      <Table columns={columns} dataSource={dataTickets}/>
    </div>
  );
}
