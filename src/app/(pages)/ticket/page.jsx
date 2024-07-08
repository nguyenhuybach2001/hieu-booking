"use client";
import apiCaller from "@/api/apiCaller";
import { localApi } from "@/api/localApi";
import { ticketApi } from "@/api/ticketApi";
import { tripApi } from "@/api/tripApi";
import { xeApi } from "@/api/xeApi";
import { message, Modal } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { list } from "postcss";
import React, { useEffect, useState } from "react";

function addHours(timeString, hoursToAdd) {
  console.log(timeString);
  // Tách chuỗi thời gian thành các phần giờ, phút, giây
  const [hours, minutes, seconds] = timeString?.split(":")?.map(Number);

  // Tạo đối tượng Date với giờ, phút, giây từ chuỗi thời gian
  let date = new Date();
  date.setHours(hours, minutes, seconds);

  // Cộng thêm giờ
  date.setHours(date.getHours() + hoursToAdd);

  // Lấy giờ, phút, giây từ đối tượng Date mới
  const newHours = date.getHours().toString().padStart(2, "0");
  const newMinutes = date.getMinutes().toString().padStart(2, "0");
  const newSeconds = date.getSeconds().toString().padStart(2, "0");

  // Tạo chuỗi thời gian mới
  return `${newHours}:${newMinutes}:${newSeconds}`;
}

export default function Ticket() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [ticketId, setTicketId] = useState("");
  const [tripId, setTripId] = useState("");
  const [bienSo, setBienSo] = useState("");
  const [tgDen, setTgDen] = useState("");
  const [trip, setTrip] = useState([]);
  const [ticket, setTicket] = useState([]);
  const [soGhe, setSoGhe] = useState([]);
  const [giaVe, setGiaVe] = useState([]);
  const [dataLocals, setDataLocals] = useState([]);
  const [listVehicles, setListVehicles] = useState([]);

  const items1 = [
    {
      value: "0",
      label: "Đã hủy",
    },
    {
      value: "1",
      label: "Chưa thanh toán",
    },
    {
      value: "2",
      label: "Đã thanh toán",
    },
  ];

  const errorHandler = (error) => {
    console.log("Fail: ", error);
  };
  //call api lấy thông tin vé xe
  const getInformationLookups = async () => {
    const data = {
      veXeId: ticketId,
    };
    const res = await apiCaller({
      request: ticketApi.searchInfoVe(data),
      errorHandler,
    });
    if (res) {
      setTicket(res.data);
    }
  };

  //call api lấy ra danh sách xe
  const getAllvehicles = async () => {
    const res = await apiCaller({
      request: xeApi.getAllVehicles(),
      errorHandler,
    });
    if (res) {
      setListVehicles(res.data);
    }
  };
  //call api lấy ra địa điểm
  const getLocationTreeByCondition = async () => {
    const data = {
      status: 1,
    };
    const res = await apiCaller({
      request: localApi.getLocationTreeByCondition(data),
      errorHandler,
    });
    if (res) {
      setDataLocals(res.data);
    }
  };

  //call api tìm chuyến đi theo id
  const getTrip = async () => {
    const data = {
      chuyenId: tripId,
    };
    const res = await apiCaller({
      request: tripApi.searchTripById(data),
      errorHandler,
    });
    if (res) {
      setTrip(res.data);
      setTgDen(res.data.thoiGianDi.split(' ')[1])
    }
  };
  console.log(listVehicles);
  useEffect(() => {
    const ticketId = localStorage.getItem("ticketId");
    setTicketId(ticketId);
    const soGhe = ticket?.gheDat?.split(";").length;
    const giaVe = parseInt(ticket?.hoaDon) / soGhe;
    setSoGhe(soGhe);
    setGiaVe(giaVe);
    getAllvehicles();
    getLocationTreeByCondition();
  }, []);

  useEffect(() => {
    setTripId(ticket.chuyenId);
    const soGhe = ticket?.gheDat?.split(";").length;
    const giaVe = parseInt(ticket?.hoaDon) / soGhe;
    setSoGhe(soGhe);
    setGiaVe(giaVe);
  }, [ticket]);

  useEffect(() => {
    getTrip();
  }, [tripId]);

  useEffect(() => {
    ticketId && getInformationLookups();
  }, [ticketId]);

  useEffect(() => {
    const bienSo = listVehicles.find(
      (item) => item.xeId === trip?.xeId
    )?.bienSo;
    setBienSo(bienSo);
  }, [trip]);
  const handlePay = () => {
    router.push("/pay");
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCancelTicket = async () => {
    const data = {
      veXeId: ticketId,
    };
    const res = await apiCaller({
      request: ticketApi.cancelVe(data),
      errorHandler,
    });
    if (res) {
      router.push("/");
      message.success(res.message);
    }
  };
  const handleBack = () => {
    setOpen(false);
  };
  console.log(ticket);
  console.log(trip);
  console.log(tgDen);

  return (
    <div className="w-full bg-slate-100 h-full">
      <div className="my-10 text-center underline font-bold text-5xl">
        Chi tiết vé
      </div>
      <div className="max-w-6xl px-12 mx-auto gap-10 grid grid-cols-2 mb-10">
        <div className="bg-white w-full rounded-xl grid grid-cols-12 mb-10">
          <div className="col-span-1 bg-slate-700 w-full"></div>
          <div className="col-span-11 px-9 py-5">
            <p className=" text-center text-slate-400 ">Economic</p>
            <div className="grid grid-cols-3 gap-2 mt-6 mb-4">
              <div className="col-span-1 justify-between flex flex-col gap-3 w-full">
                <p className="font-bold">
                  {dataLocals.find((item) => item.id === trip?.idDiemDi)?.name}
                </p>
                <p className="text-5xl">{trip?.thoiGianDi?.split(" ")[1]?.split(':')[0]}<span>:{trip?.thoiGianDi?.split(" ")[1]?.split(':')[1]}</span></p>
              </div>
              <div className="flex w-full items-end">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/iconTime.webp"
                />
              </div>
              <div className="col-span-1 items-end flex flex-col gap-3 justify-between w-full">
                <p className="font-bold">
                  {dataLocals.find((item) => item.id === trip?.idDiemDen)?.name}
                </p>
                <p className="text-5xl">{addHours(tgDen, 8)?.split(':')[0]}<span>:{addHours(tgDen, 8)?.split(':')[1]}</span></p>
              </div>
            </div>
            <p className="text-center font-bold text-xl mt-5">
              Ngày {trip?.thoiGianDi?.split(" ")[0]}
            </p>
            <hr className="bg-black h-[1px] my-10" />
            <div className="flex justify-between gap-10">
              <p>Họ và tên:</p>
              <p className="font-bold">{ticket?.hoTenKhach}</p>
            </div>
            <div className="flex justify-between gap-10 mt-5">
              <p>Số điện thoại:</p>
              <p className="font-bold">{ticket?.sdtKhach}</p>
            </div>
            <div className="flex justify-between gap-10 mt-5">
              <p>Email</p>
              <p className="font-bold">{ticket?.emailKhack}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white w-full rounded-xl py-10 px-5">
            <div className="flex justify-between gap-10 mt-5">
              <p>Biển số xe</p>
              <p className="font-bold">{bienSo}</p>
            </div>
            <div className="flex justify-between gap-10 mt-3">
              <p>Giá vé</p>
              <p className="font-bold">{giaVe}</p>
            </div>
            <div className="flex justify-between gap-10 mt-3">
              <p>Số ghế</p>
              <p className="font-bold">{soGhe}</p>
            </div>
            <div className="flex justify-between gap-10 mt-3">
              <p>Vị trí ghế:</p>
              <p className="font-bold">{ticket?.gheDat}</p>
            </div>
            <hr className="bg-slate-200 h-[2px] my-10" />
            <div className="flex justify-between gap-10 ">
              <p>Thành tiền</p>
              <p className="font-bold text-blue-500">{ticket?.hoaDon} VNĐ</p>
            </div>
            <div className="flex justify-between gap-10 mt-3">
              <p>Trạng thái </p>
              <p className="font-bold">
                {
                  items1.find((item) => item.value === ticket?.trangThaiVe)
                    ?.label
                }
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-3 mt-10">
            <button className="bg-white py-3 w-full h-[56px] border-[2px] border-slate-300 rounded-xl hover:bg-blue-600 hover:text-white active:bg-blue-400">
              Chia sẻ vé
            </button>
            <button
              className="bg-white py-3 w-full h-[56px] border-[2px] border-slate-300 rounded-xl hover:bg-blue-600 hover:text-white active:bg-blue-400"
              onClick={handleOpen}
            >
              Hủy vé
            </button>
            <button
              className="bg-white py-3 w-full h-[56px] border-[2px] border-slate-300 rounded-xl hover:bg-blue-600 hover:text-white active:bg-blue-400"
              onClick={handlePay}
            >
              Thanh toán online
            </button>
          </div>
        </div>
      </div>
      <Modal
        title={
          <div className="flex gap-2 items-center text-lg font-bold">
            <img src="/images/ask.webp" alt="" className="w-5 h-5" /> Xác nhận
            hủy vé
          </div>
        }
        open={open}
        onOk={handleCancelTicket}
        onCancel={handleBack}
        okText="Hủy vé"
        cancelText="Trở về"
      >
        <p>
          Vé của bạn đã được ghi nhận vào hệ thống. Bạn sẽ sớm nhận được thông
          báo xác nhận từ phía nhà xe. Nếu bạn có bất kỳ câu hỏi nào, vui lòng
          liên hệ với bộ phận chăm sóc khách hàng
        </p>
      </Modal>
    </div>
  );
}
