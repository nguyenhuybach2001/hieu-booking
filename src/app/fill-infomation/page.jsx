"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Input, Modal } from "antd";
import { useRouter } from "next/navigation";
import { list, seats_fisrt, seats_second, seats_third } from "./config";
import "./index.css";

export default function Info() {
  const [checked, setChecked] = useState("");
  const [username, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [pickOn, setPickOn] = useState(false);
  const [pickOff, setPickOff] = useState(true);
  const [picked, setPicked] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalCompleteOpen, setIsModalCompleteOpen] = useState(false);
  const router = useRouter();
  const handlePickOn = () => {
    setPickOn(true);
    setPickOff(false);
  };
  const handlePickOff = () => {
    setPickOff(true);
    setPickOn(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setIsModalCompleteOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOkComplete = () => {
    setIsModalCompleteOpen(false);
    router.push("/ticket");
  };

  const handleCancelComplete = () => {
    router.push("/");
  };
  const handleCheck = (id) => {
    setChecked(id);
  };

  const handlePickSeat = (id) => {
    setPicked((prev) => {
      const isChecked = picked.includes(id);
      if (isChecked) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  return (
    <div className="w-full bg-slate-100 h-full">
      <div className="max-w-6xl  w-full mx-auto px-12 mb-20">
        <div className="underline w-max m-auto font-bold text-5xl mt-10">
          Chọn vé
        </div>
        <div className="text-blue-500 my-5 text-xl">
          <ArrowLeftOutlined />
          <Link href="/search" className="ml-3">
            Quay lại trang tìm kiếm
          </Link>
        </div>
        <div className="grid grid-cols-10 mt-10">
          <div className="col-span-7 bg-white border-[2px] border-slate-300 rounded-xl">
            <div className="my-5 bg-slate-900 py-2 pl-2 pr-10 w-max rounded-r-xl text-white">
              <p className="font-bold text-lg">Economy</p>
              <p>Di chuyển tiết kiệm</p>
            </div>
            <div className="mx-10 flex justify-between gap-16 pb-10">
              <div className="bg-slate-100 w-full rounded-xl px-5 pt-3 pb-10">
                <div className="flex justify-between font-bold items-center">
                  <img src="./images/wheel.webp" />
                  <p>Tầng 1</p>
                </div>
                <div className="grid grid-cols-3 gap-x-10 gap-y-5 mt-5 text-xl">
                  {seats_fisrt.map((seat) => (
                    <div
                      key={seat.id}
                      className={`h-16 hover:bg-b flex items-center justify-center w-14 cursor-pointer ${
                        picked.includes(seat.id) ? "bg-b" : ""
                      }`}
                      onClick={() => handlePickSeat(seat.id)}
                    >
                      {seat.code}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-100 w-full rounded-xl px-5 pt-3 pb-10">
                <div className="flex justify-between font-bold items-center">
                  <img src="./images/wheel.webp" />
                  <p>Tầng 2</p>
                </div>
                <div className="flex justify-between gap-y-5 mt-5 text-xl">
                  <div>
                    {seats_second.map((seat) => (
                      <div
                        key={seat.id}
                        className={`h-16 hover:bg-b flex items-center justify-center w-14 cursor-pointer margin-top ${
                          picked.includes(seat.id) ? "bg-b" : ""
                        }`}
                        onClick={() => handlePickSeat(seat.id)}
                      >
                        {seat.code}
                      </div>
                    ))}
                  </div>
                  <div>
                    {seats_third.map((seat) => (
                      <div
                        key={seat.id}
                        className={`h-16 hover:bg-b flex items-center justify-center w-14 cursor-pointer margin-top ${
                          picked.includes(seat.id) ? "bg-b" : ""
                        }`}
                        onClick={() => handlePickSeat(seat.id)}
                      >
                        {seat.code}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 ml-10">
            <div className="bg-white border-[2px] border-slate-300 rounded-xl pb-5">
              <div className="bg-orange-400 rounded-t-xl text-white pt-5">
                <p className="w-max m-auto text-xl font-medium">
                  Hà Nội - Điện Biên
                </p>
                <p className="w-max m-auto pt-2 pb-5">
                  24/12/1999 - 2 chỗ - Economy
                </p>
              </div>
              <div className="max-w-56 mx-auto text-xs">
                <div className="flex justify-between  mt-5 font-medium items-center">
                  <p>Bến xe Bản Phủ</p>
                  <img
                    src="/images/arows.webp"
                    alt=""
                    className="w-max mx-auto"
                  />
                  <p>Bến xe Mỹ Đình</p>
                </div>
                <div className="flex justify-between my-2">
                  <p>Thứ 4, 8 tháng 5, 2024</p>
                  <li>19:30 - 06:00</li>
                </div>
                <div className="flex gap-2 items-center">
                  <img src="/images/clock.webp" alt="" />
                  <p>7 giờ 30 phút</p>
                </div>
                <hr className="w-full my-5 h-[1px] bg-black" />
                <div className="flex justify-between">
                  <p>Chính sách và hạn mức hành lý</p>
                  <Link href="/detail" className="text-blue-400 underline">
                    Chi tiết
                  </Link>
                </div>
              </div>
            </div>
            <p className="text-xl font-bold my-5">Chi tiết thanh toán</p>
            <div className="bg-white border-[2px] border-slate-300 rounded-xl  py-5">
              <div className="max-w-60 mx-auto">
                <div className=" flex justify-between">
                  <p>Giá vé</p>
                  <p className="font-bold">500.000 VNĐ</p>
                </div>
                <div className=" flex justify-between mt-2">
                  <p>Số ghế</p>
                  <p className="font-bold">2</p>
                </div>
                <hr className="w-full bg-slate-200 h-[3px] my-5" />
                <div className="flex justify-between font-bold">
                  <p>Thành tiền</p>
                  <p className="text-blue-500">1.000.000 VNĐ</p>
                </div>
                <div className="flex mt-2 text-xs items-center">
                  <img src="/images/tickblack.webp" alt="" className="w-10" />
                  <p className="ml-3">
                    Tôi đã xem xét và đồng ý với chính sách về giá vé của hãng!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-10">
          <div className="col-span-7">
            <div className="mt-10">
              <p className="font-bold text-xl">Thông tin khách hàng</p>
              <div className="bg-white rounded-lg border-[2px] border-slate-300 p-10 text-lg mt-5">
                <div>
                  <p className="mb-2">Họ và Tên</p>
                  <Input
                    className="h-14 text-lg px-10"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <p className="mb-2">Số điện thoại</p>
                  <Input
                    className="h-14 text-lg px-10"
                    placeholder="Enter Your Phone Number"
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <p className="mb-2">Email</p>
                  <Input
                    className="h-14 text-lg px-10"
                    placeholder="example@email.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <p className="mb-2">Ghi chú</p>
                  <Input
                    className="h-14 text-lg px-10"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="font-bold text-xl">Hình thức thanh toán</p>
              <div className="bg-white rounded-lg border-[2px] border-slate-300 p-10 mt-5 flex gap-10 text-lg">
                <button
                  className={`border-[2px] border-blue-400 rounded-xl p-3 bg-slate-100 w-full text-left pl-5 flex gap-5 items-center ${
                    pickOff ? "!bg-blue-600 text-white" : ""
                  }`}
                  onClick={() => handlePickOff()}
                >
                  {pickOff ? (
                    <img src="/images/pick.webp" alt="" />
                  ) : (
                    <img src="/images/nopick.webp" alt="" />
                  )}
                  Thanh toán khi lên xe
                </button>
                <button
                  className={`border-[2px] border-blue-400 rounded-xl p-3 bg-slate-100 w-full text-left pl-5 flex gap-5 items-center ${
                    pickOn ? "!bg-blue-600 text-white" : ""
                  }`}
                  onClick={() => handlePickOn()}
                >
                  {pickOn ? (
                    <img src="/images/pick.webp" alt="" />
                  ) : (
                    <img src="/images/nopick.webp" alt="" />
                  )}
                  Thanh toán online
                </button>
              </div>
            </div>

            <div className="mt-10">
              <p className="font-bold text-xl">Hình thức nhận thông báo</p>
              <div className="bg-white rounded-lg border-[2px] border-slate-300 py-5 px-10 mt-5 grid grid-cols-3 gap-5 text-lg">
                {list.map((item) => (
                  <div key={item.id}>
                    <button
                      className={`border-[2px] border-blue-400 rounded-xl p-3 bg-slate-100 w-full text-left pl-5 flex gap-5 items-center ${
                        checked === item.id ? "!bg-blue-600 text-white" : ""
                      }`}
                      onClick={() => handleCheck(item.id)}
                    >
                      {checked === item.id ? (
                        <img src="/images/pick.webp" alt="" />
                      ) : (
                        <img src="/images/nopick.webp" alt="" />
                      )}
                      {item.content}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-10 mt-10 gap-10">
              <p className="col-span-7 text-slate-500">
                Bằng việc ấn vào nút này, bạn công nhận mình đã đọc và đồng ý
                với các Điều khoản & Điều kiện và Chính sách và quyền riêng tư
                của hãng
              </p>
              <button
                className="flex items-center justify-center text-xl col-span-3 gap-2 bg-blue-600 py-3 w-full h-[56px] rounded-xl text-white active:bg-blue-400"
                onClick={showModal}
              >
                Tiếp tục <ArrowRightOutlined />
              </button>
            </div>
          </div>
        </div>
        <Modal
          title="Xem lại thông tin đặt vé của bạn"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Xác nhận"
          cancelText="Hủy"
        >
          <p>Vui lòng kiểm tra kỹ thông tin trên trước khi xác nhận</p>
          <p>Sau khi xác nhận, bạn không thể thay đổi thông tin</p>
        </Modal>
        <Modal
          title={
            <div className="flex gap-2 items-center text-lg font-bold text-green-600">
              <img src="/images/tick.webp" alt="" className="w-5 h-5" /> Hoàn
              thành
            </div>
          }
          open={isModalCompleteOpen}
          onOk={handleOkComplete}
          onCancel={handleCancelComplete}
          okText="Xem vé xe"
          cancelText="Trở về trang chủ"
        >
          <p>
            Vé của bạn đã được ghi nhận vào hệ thống. Bạn sẽ sớm nhận được thông
            báo xác nhận từ phía nhà xe. Nếu bạn có bất kỳ câu hỏi nào, vui lòng
            liên hệ với bộ phận chăm sóc khách hàng
          </p>
        </Modal>
      </div>
    </div>
  );
}
