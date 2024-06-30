"use client";
import { Modal } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Ticket() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handlePay = () => {
    router.push("/pay");
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCancelTicket = () => {

  }
  const handleBack = () => {
    setOpen(false)
  }

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
                <p className="font-bold">Bến xe Bản Phủ</p>
                <p className="text-5xl">19:30</p>
              </div>
              <div className="flex w-full items-end">
                <img loading="lazy"
                  decoding="async"
                  src="/images/iconTime.webp"
                />
              </div>
              <div className="col-span-1 items-end flex flex-col gap-3 justify-between w-full">
                <p className="font-bold">Bến xe Mỹ Đình</p>
                <p className="text-5xl">06:00</p>
              </div>
            </div>
            <p className="text-center font-bold">Thứ 4, 8 tháng 5. 2024</p>
            <hr className="bg-black h-[1px] my-10" />
            <div className="flex justify-between gap-10">
              <p>Họ và tên:</p>
              <p className="font-bold">Kathryn Murphy</p>
            </div>
            <div className="flex justify-between gap-10 mt-5">
              <p>Số điện thoại:</p>
              <p className="font-bold">(704) 555-0127</p>
            </div>
            <div className="flex justify-between gap-10 mt-5">
              <p>Email</p>
              <p className="font-bold">Willie.jennings@example.com</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white w-full rounded-xl py-10 px-5">
            <div className="flex justify-between gap-10 mt-5">
              <p>Mã Đơn</p>
              <p className="font-bold">CATW112</p>
            </div>
            <div className="flex justify-between gap-10 mt-3">
              <p>Giá vé</p>
              <p className="font-bold">500.000 VNĐ</p>
            </div>
            <div className="flex justify-between gap-10 mt-3">
              <p>Số ghế</p>
              <p className="font-bold">2</p>
            </div>
            <div className="flex justify-between gap-10 mt-3">
              <p>Vị trí ghế:</p>
              <p className="font-bold">A1-1; B1-1</p>
            </div>
            <hr className="bg-slate-200 h-[2px] my-10" />
            <div className="flex justify-between gap-10 ">
              <p>Thành tiền</p>
              <p className="font-bold text-blue-500">1000.000 VNĐ</p>
            </div>
            <div className="flex justify-between gap-10 mt-3">
              <p>Trạng thái </p>
              <p className="font-bold">Chưa thanh toán</p>
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
            <img src="/images/ask.webp" alt="" className="w-5 h-5" /> Xác nhận hủy vé
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
