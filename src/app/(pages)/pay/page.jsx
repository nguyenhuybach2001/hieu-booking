'use client'
import apiCaller from "@/api/apiCaller";
import { ticketApi } from "@/api/ticketApi";
import { tripApi } from "@/api/tripApi";
import { xeApi } from "@/api/xeApi";
import { Image, QRCode } from "antd";
import React, { useEffect, useState } from "react";

export default function PayPage() {
  const [listVehicles, setListVehicles] = useState([]);
  const [trip, setTrip] = useState([])
  const [tripId, setTripId] = useState([])
  const [detailTicket, setDetailTicket] = useState([])
  const [soGhe, setSoGhe] = useState('')
  const [ticket, setTicket] = useState([])
  const [ticketId, setTicketId] = useState('')
  const [giaVe, setGiaVe] = useState([])

  const errorHandler = (error) => {
    console.log("Fail: ", error);
  };
  const items1 = [
    {
      value: '0',
      label: "Đã hủy",
    },
    {
      value: '1',
      label: "Chưa thanh toán",
    },
    {
      value: '2',
      label: "Đã thanh toán",
    }
  ];

  //call api lấy ra danh sách xe
  const getAllvehicles = async () => {
    const res = await apiCaller({
      request: xeApi.getAllVehicles(),
      errorHandler,
    });
    if (res) {
      setListVehicles(res.data)
    }
  };
  //call api lấy ra chuến đi hiện tại
  const getTrip = async () => {
    const data = {
      chuyenId: tripId
    }
    const res = await apiCaller({
      request: tripApi.searchTripById(data),
      errorHandler,
    });
    if (res) {
      setTrip(res.data)
      console.log(res.data)
    }
  };
  //call api lấy thông tin vé xe
  const getInformationLookups = async () => {
    const data = {
      veXeId: ticketId
    }
    const res = await apiCaller({
      request: ticketApi.searchInfoVe(data),
      errorHandler,
    });
    if (res) {
      setTicket(res.data)
    }
  };
  console.log(ticket)
  useEffect(() => {
    const soGhe = ticket?.gheDat?.split(';').length
    const giaVe = parseInt(ticket?.hoaDon) / soGhe
    setSoGhe(soGhe)
    setGiaVe(giaVe)
  }, [ticket])
  useEffect(() => {
    getInformationLookups()
  }, [ticketId])
  useEffect(() => {
    const ticketId = localStorage.getItem('ticketId')
    setTicketId(ticketId)
    getAllvehicles()
  }, [])
  useEffect(() => {
    getTrip()
  }, [tripId])
  return (
    <div className="w-full bg-slate-100 h-full">
      <div className="max-w-6xl px-12 mx-auto pb-20">
        <div className="my-10 text-center underline font-bold text-5xl">
          Thanh toán online
        </div>
        <div className="grid grid-cols-3 gap-16">
          <div className="col-span-1 text-justify">
            <p className="font-bold text-xl mb-5">Chi tiết thanh toán</p>
            <div className="border border-blue-400 rounded-xl bg-white py-8 px-5">
              Để thực hiện chuyển khoản thanh toán vé xe khách online, quý khách
              cần làm theo các bước sau:
              <br />
              <br />
              1. Đăng nhập vào ứng dụng ngân hàng trực tuyến trên điện thoại của
              bạn.
              <br /> 2. Chọn mục thanh toán Qr.
              <br /> 3. Quét mã Qr thanh toán hiện trên màn hình trang web Nhấn
              chọn thanh toán.
              <br /> 4. Lưu lại hình ảnh giao dịch
              <br />
              <br />
              Vé của bạn sẽ được xác nhận và thông báo lại cho bạn từ nhà xe
              trong vòng 1 ngày kể từ ngày bạn thực hiện thanh toán thành công.
              <br />
              <br />
              Lưu ý: Nếu bạn không nhận được thông báo đã thanh toán thành công
              từ sau 48h kể từ khi thanh toán, vui lòng liên hệ nhà xe qua số
              điện thoại hoặc zalo nhà xe được gắn trên trang chủ hoặc chân
              trang web để được hỗi trợ sớm và nhanh nhất
            </div>
          </div>
          <div className="col-span-2 text-base">
            <p className="font-bold text-xl mb-5">Chi tiết thanh toán</p>
            <div className="border border-blue-400 rounded-xl bg-white py-8 px-5">
              <div className="flex justify-between gap-5">
                <div>
                  <div className="flex justify-between gap-10">
                    <p>Biển số xe</p>
                    <p className="font-bold">{listVehicles.find((item) => item.xeId === trip?.xeId)?.bienSo}</p>
                  </div>
                  <div className="flex justify-between gap-10 mt-2">
                    <p>Giá vé</p>
                    <p className="font-bold">{giaVe}</p>
                  </div>
                  <div className="flex justify-between gap-10 mt-2">
                    <p>Số Ghế</p>
                    <p className="font-bold">{soGhe}</p>
                  </div>
                </div>
                <hr className="bg-slate-200 h-[85px] w-[1px]" />
                <div>
                  <div className="flex justify-between gap-10 mt-2">
                    <p>Thành tiền</p>
                    <p className="font-bold text-blue-500 text-xl">
                      {ticket?.hoaDon} VNĐ
                    </p>
                  </div>
                  <div className="flex justify-between gap-10 mt-2">
                    <p>Trạng thái</p>
                    <p className="font-bold">{items1.find((item) => item.value === ticket?.trangThaiVe)?.label}</p>
                  </div>
                </div>
              </div>
              <hr className="bg-slate-200 h-[1px] my-8" />
              <div>
                <p className="text-center font-bold">Qr thanh toán</p>
                <div className="grid grid-cols-2 gap-5 mt-8">
                  <QRCode
                    className="!w-full !h-full"
                    errorLevel="Q"
                    value="Chủ tài khoản: LE HOANG HIEU
                    Số tài khoản: 105870483112"
                  />
                  <div>
                    <Image src="/images/vietin.png" alt="#" className="mb-6" />
                    <p>
                      Chủ tài khoản:{" "}
                      <span className="font-bold">LE HOANG HIEU</span>
                    </p>
                    <p>
                      Số tài khoản:{" "}
                      <span className="font-bold">105870483112</span>
                    </p>
                    <p>
                      Chi nhánh quản lý:{" "}
                      <span className="font-bold">CN HAI BA TRUNG</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
