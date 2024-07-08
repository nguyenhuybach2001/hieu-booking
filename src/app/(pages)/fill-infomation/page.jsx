"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Image, Input, Modal } from "antd";
import { useRouter } from "next/navigation";
import { list, seats_fisrt, seats_second, seats_third } from "./config";
import "./index.css";
import { useSelector } from "react-redux";
import { gheApi } from "@/api/gheApi";
import apiCaller from "@/api/apiCaller";
import { localApi } from "@/api/localApi";
import { tripApi } from "@/api/tripApi";
import { routeApi } from "@/api/routeApi";
import { ticketApi } from "@/api/ticketApi";

export default function Info() {
  const [notification, setNotification] = useState("1");
  const [username, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [picked, setPicked] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [type, setType] = useState(false);
  const [dataLocals, setDataLocals] = useState([])
  const [tripId, setTripId] = useState([])
  const [trip, setTrip] = useState([])
  const [pay, setPay] = useState('1')

  const router = useRouter();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
  const [data, setData] = useState([]);
  const errorHandler = (error) => {
    console.log("Fail: ", error);
  };
  //call api lấy danh sách ghế
  const getListSeat = async () => {
    const tripId = localStorage.getItem('tripId')
    setTripId(tripId)
    const data = {
      chuyenId: tripId
    }
    const res = await apiCaller({
      request: gheApi.getListSeat(data),
      errorHandler,
    });
    if (res) {
      setData(res.data)
      console.log(res.data)
      if (res.data.length === 42) {
        setType(true)
      }
    }

  }
  //call api lấy ra địa điểm
  const getLocationTreeByCondition = async () => {
    const data = {
      status: 1
    }
    const res = await apiCaller({
      request: localApi.getLocationTreeByCondition(data),
      errorHandler,
    });
    if (res) {
      setDataLocals(res.data)
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
  useEffect(() => {
    getTrip()
  }, [tripId])
  //call api lấy ra danh sách chuyến đi
  useEffect(() => {
    getListSeat()
    getLocationTreeByCondition()
  }, [])

  useEffect(() => {
    //chia data làm 2 mảng A,B
    const splitArrayByMaGhe = (data) => {
      let arrayA = [];
      let arrayB = [];

      data.forEach(item => {
        if (item.maGhe.startsWith("A")) {
          arrayA.push(item);
        } else if (item.maGhe.startsWith("B")) {
          arrayB.push(item);
        }
      });

      return { arrayA, arrayB };
    }
    const { arrayA, arrayB } = splitArrayByMaGhe(data)
    //sắp xếp mảng A
    const sortedData1 = [...arrayA].sort((a, b) => {
      const [colA, rowA] = a.maGhe.split("_");
      const [colB, rowB] = b.maGhe.split("_");
      const colANum = parseInt(colA.substring(1), 10);
      const colBNum = parseInt(colB.substring(1), 10);
      const rowANum = parseInt(rowA, 10);
      const rowBNum = parseInt(rowB, 10);

      if (rowANum < rowBNum) return -1;
      if (rowANum > rowBNum) return 1;

      return colANum - colBNum;
    });
    //sắp xếp mảng B
    const sortedData2 = [...arrayB].sort((a, b) => {
      const [colA, rowA] = a.maGhe.split("_");
      const [colB, rowB] = b.maGhe.split("_");
      const colANum = parseInt(colA.substring(1), 10);
      const colBNum = parseInt(colB.substring(1), 10);
      const rowANum = parseInt(rowA, 10);
      const rowBNum = parseInt(rowB, 10);

      if (rowANum < rowBNum) return -1;
      if (rowANum > rowBNum) return 1;

      return colANum - colBNum;
    });
    setData1(sortedData1);
    setData2(sortedData2);
  }, [data]);

  const handleBooking = async () => {
    const data = {
      idGheDat: picked,
      hoTenKhach: username,
      sdtKhach: number,
      emailKhack: email,
      ghiChu: note,
      thanhToan: pay,
      thongBao: notification
    }
    const res = await apiCaller({
      request: ticketApi.createVe(data),
      errorHandler,
    });
    if (res) {
      router.push("/ticket");
      localStorage.setItem(
        'ticketId',
        res.data.veXeId
      )
    }

  };
  return (
    <div className="w-full bg-slate-100 h-full">
      <div className="max-w-6xl  w-full mx-auto px-12 mb-20">
        <div className="underline w-max m-auto font-bold text-5xl mt-10">
          Chọn vé
        </div>

        <Link href="/search" className="w-fit">
          <div className="text-blue-500 my-5 text-xl">
            <ArrowLeftOutlined className="mr-3" />
            Quay lại trang tìm kiếm
          </div>
        </Link>
        <div className="grid grid-cols-10 mt-10">
          <div className="col-span-7 bg-white border-[2px] border-slate-300 rounded-xl">
            <div className="my-5 bg-slate-900 py-2 pl-2 pr-10 w-max rounded-r-xl text-white">
              <p className="font-bold text-lg">Economy</p>
              <p>Di chuyển tiết kiệm</p>
            </div>
            <div className="mx-10 flex justify-between gap-16 pb-10">
              <div className="bg-slate-100 w-full rounded-xl px-5 pt-3 pb-10">
                <div className="flex justify-between font-bold items-center">
                  <Image src="./images/wheel.webp" />
                  <p>Tầng 1</p>
                </div>
                <div className={`grid ${type ? 'grid-cols-3' : 'grid-cols-2'} gap-x-10 gap-y-5 mt-5 text-xl`}>
                  {data1.map((seat) => (
                    <div
                      key={seat.id}
                      className={`h-16 hover:bg-b ${seat.trangThai === '0' ? "bg-[#828282] rounded" : "cursor-pointer"} flex items-center justify-center w-14 cursor-pointer ${picked.includes(seat.gheId) ? "bg-b" : ""
                        }`}
                      onClick={() => {
                        seat.trangThai === '1' ? handlePickSeat(seat.gheId) : null
                      }}
                    >
                      {seat.maGhe}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-100 w-full rounded-xl px-5 pt-3 pb-10">
                <div className="flex justify-between font-bold items-center">
                  <Image src="./images/wheel.webp" />
                  <p>Tầng 2</p>
                </div>
                <div className={`grid ${type ? 'grid-cols-3' : 'grid-cols-2'} gap-x-10 gap-y-5 mt-5 text-xl`}>
                  {data2.map((seat) => (
                    <div
                      key={seat.gheId}
                      className={`h-16 hover:bg-b ${seat.trangThai === '0' ? "bg-[#828282] rounded" : "cursor-pointer"} flex items-center justify-center w-14  ${picked.includes(seat.gheId) ? "bg-b" : ""
                        }`}
                      onClick={() => {
                        seat.trangThai === '1' ? handlePickSeat(seat.gheId) : null
                      }}
                    >
                      {seat.maGhe}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 ml-10">
            <div className="bg-white border-[2px] border-slate-300 rounded-xl pb-5">
              <div className="bg-orange-400 rounded-t-xl text-white pt-5">
                <div className="grid grid-cols-7 text-xl font-medium">
                  <p className="col-span-3 text-center">{dataLocals.find((item) => item.id === trip?.idDiemDi)?.name}</p>
                  <p className="col-span-1">-</p>
                  <p className="col-span-3">{dataLocals.find((item) => item.id === trip?.idDiemDen)?.name}</p>
                </div>
                <p className="w-max m-auto pt-2 pb-5">
                  {trip?.thoiGianDi?.split(' ')[0]} - 2 chỗ - Economy
                </p>
              </div>
              <div className="max-w-56 mx-auto text-xs">
                <div className="flex justify-between  mt-5 font-medium items-center">
                  <p>{dataLocals.find((item) => item.id === trip?.idDiemDi)?.name}</p>
                  <Image
                    src="/images/arows.webp"
                    alt=""
                    className="w-max mx-auto"
                  />
                  <p>{dataLocals.find((item) => item.id === trip?.idDiemDen)?.name}</p>
                </div>
                <div className="flex gap-2 items-center mt-5">
                  <Image src="/images/clock.webp" alt="" />
                  <p>Thời gian đi {trip?.thoiGianDi?.split(' ')[1]}</p>
                </div>
                <div className="flex gap-2 items-center mt-5">
                  <Image src="/images/clock.webp" alt="" />
                  <p>Thời gian di chuyển {trip?.thoiGianDiChuyen}</p>
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
                  <p className="font-bold">{trip?.giaVe}</p>
                </div>
                <div className=" flex justify-between mt-2">
                  <p>Số ghế</p>
                  <p className="font-bold">{picked.length}</p>
                </div>
                <hr className="w-full bg-slate-200 h-[3px] my-5" />
                <div className="flex justify-between font-bold">
                  <p>Thành tiền</p>
                  <p className="text-blue-500">{picked.length * parseInt(trip?.giaVe)} VNĐ</p>
                </div>
                <div className="flex mt-2 text-xs items-center">
                  <Image src="/images/tickblack.webp" alt="" className="w-10" />
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
                  className={`border-[2px] border-blue-400 rounded-xl p-3 bg-slate-100 w-full text-left pl-5 flex gap-5 items-center ${pay === '1' ? "!bg-blue-600 text-white" : ""
                    }`}
                  onClick={() => setPay('1')}
                >
                  {pay === '1' ? (
                    <img src="/images/pick.webp" alt="" />
                  ) : (
                    <img src="/images/nopick.webp" alt="" />
                  )}
                  Thanh toán khi lên xe
                </button>
                <button
                  className={`border-[2px] border-blue-400 rounded-xl p-3 bg-slate-100 w-full text-left pl-5 flex gap-5 items-center ${pay === '2' ? "!bg-blue-600 text-white" : ""
                    }`}
                  onClick={() => setPay('2')}
                >
                  {pay === '2' ? (
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
                      className={`border-[2px] border-blue-400 rounded-xl p-3 bg-slate-100 w-full text-left pl-5 flex gap-5 items-center ${notification === item.id ? "!bg-blue-600 text-white" : ""
                        }`}
                      onClick={() => setNotification(item.id)}
                    >
                      {notification === item.id ? (
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
          onOk={handleBooking}
          onCancel={handleCancel}
          okText="Xác nhận"
          cancelText="Hủy"
        >
          <p>Vui lòng kiểm tra kỹ thông tin trên trước khi xác nhận</p>
          <p>Sau khi xác nhận, bạn không thể thay đổi thông tin</p>
        </Modal>
      </div>
    </div>
  );
}
