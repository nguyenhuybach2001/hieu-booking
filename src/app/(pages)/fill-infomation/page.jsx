"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Image, Input, Modal } from "antd";
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
    router.push("/ticket");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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

  const [data, setData] = useState([
    {
      gheId: "086fd5ca-0fc9-4ac9-a3a0-2d9d53ab311e",
      maGhe: "B2_1",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "1",
    },
    {
      gheId: "0912e228-0fe7-4c97-b593-4f9dac527f63",
      maGhe: "B1_3",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "13fbb353-6336-4096-8529-139dcd53fbeb",
      maGhe: "B2_5",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "1417d8e0-522b-40ea-8185-37479a8142b8",
      maGhe: "A2_6",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "151679f6-ab35-4635-9eb3-8b5b7fe34aee",
      maGhe: "B2_6",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "21d684b8-6e10-4e8e-825e-83e2f354b728",
      maGhe: "A3_1",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "2690d6ea-562a-4a74-aa64-0bb136c5c4a1",
      maGhe: "B3_3",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "270d5625-d59d-47c8-9111-601a95619692",
      maGhe: "B1_2",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "304eef90-19d0-4e52-97c7-23dd3dbd771e",
      maGhe: "B1_7",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "3bf9b18f-0076-4e43-8744-bdc3b366c290",
      maGhe: "A1_7",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "401298f0-923a-4075-a679-b99a791e0b9d",
      maGhe: "B2_3",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "1",
    },
    {
      gheId: "43222df4-d2de-45a3-978a-f6e18c5efe9b",
      maGhe: "A3_4",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "54e40ae3-6c58-42be-b691-44b39d312476",
      maGhe: "A2_4",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "581a6d8b-327a-490b-9ce3-f3f9fee2c573",
      maGhe: "A3_6",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "5f4c6379-3425-4687-a69d-86c9433d7713",
      maGhe: "A1_5",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "636daa4f-4b89-4b54-b66e-a13878b5064f",
      maGhe: "B1_4",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "6a263e50-da8a-499e-b060-1166f536f8a7",
      maGhe: "A3_7",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "6d611903-0128-40ac-bbdf-0dc16c00a5c6",
      maGhe: "A3_3",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "6f6fdd50-5204-49ac-8686-f05ff690d7ec",
      maGhe: "A1_2",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "70ac227a-b716-4bfd-a373-fcb770b9cbc4",
      maGhe: "A1_1",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "72307f41-04b7-4abb-b64b-e6c9f5649711",
      maGhe: "A1_6",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "730c5d42-4e96-4cd0-bd36-8a1504205639",
      maGhe: "B3_7",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "81fc9dd9-664c-47b2-8a71-f89fd38d99e5",
      maGhe: "B2_2",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "1",
    },
    {
      gheId: "8e54f28a-3afd-41fb-aef0-0b61090bdf28",
      maGhe: "A3_2",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "97a2182a-e5bb-4fb0-a432-56701eb78f43",
      maGhe: "B1_1",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "9904a6e1-3f87-41fa-92a0-14136bc967e7",
      maGhe: "A2_1",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "9c36b03b-d6e1-4d3d-8e82-18b4f00f59a8",
      maGhe: "A2_2",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "a0560c32-4ff4-4e2b-9fc8-867b7a61b924",
      maGhe: "B1_5",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "a05a2eab-07b5-491e-819b-0eaa4e086a4b",
      maGhe: "A2_5",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "ad7f77ae-0f60-47c2-baae-2409c18a67ab",
      maGhe: "B3_2",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "b7cb961a-9d00-4d21-899b-4f52e83f5b67",
      maGhe: "B2_7",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "1",
    },
    {
      gheId: "c15b9b57-3944-4f23-86d0-1c54df3a9bcf",
      maGhe: "B3_4",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "c8bb3993-c402-41b5-91f2-7fe86ebdc97e",
      maGhe: "B1_6",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "cb7e0b65-4db3-4746-a2c5-7c747de7275f",
      maGhe: "B3_6",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "d62e4a6b-78a8-42ad-8c37-5605d26268e0",
      maGhe: "B3_5",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "d92480bb-2c3f-41b4-a4b3-b69310bbd950",
      maGhe: "B2_4",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "1",
    },
    {
      gheId: "dbd14415-c2d5-4ab4-84cb-efbb69716f48",
      maGhe: "A2_7",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "dd4434d0-11a3-42f4-a90b-9a62f5d5e64b",
      maGhe: "A1_4",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "ea6451a6-5170-4605-b615-3b36985f20ae",
      maGhe: "B3_1",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "f6a77e21-7e09-4e4a-9e35-4a5e913df70d",
      maGhe: "A1_3",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
    {
      gheId: "fc6dd3b2-b3b5-47da-9b26-bfc75c2d2e9d",
      maGhe: "A2_3",
      chuyenId: "232216ff-0557-48f4-a563-971219ab37ec",
      trangThai: "0",
    },
  ]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const sortedData = [...data].sort((a, b) => {
      const [rowA, colA] = a.maGhe.split("_");
      const [rowB, colB] = b.maGhe.split("_");

      if (rowA < rowB) return -1;
      if (rowA > rowB) return 1;

      return parseInt(colA) - parseInt(colB);
    });
    setData(sortedData);
  }, []);
  console.log(data);
  const handleSeatClick = (gheId) => {
    if (selectedSeats.includes(gheId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== gheId));
    } else {
      setSelectedSeats([...selectedSeats, gheId]);
    }
  };

  const handleBooking = () => {
    console.log("Selected seats:", selectedSeats);
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
                  <Image src="./images/wheel.webp" />
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
                  <Image
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
                  <Image src="/images/clock.webp" alt="" />
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
                  className={`border-[2px] border-blue-400 rounded-xl p-3 bg-slate-100 w-full text-left pl-5 flex gap-5 items-center ${
                    pickOff ? "!bg-blue-600 text-white" : ""
                  }`}
                  onClick={() => handlePickOff()}
                >
                  {pickOff ? (
                    <Image src="/images/pick.webp" alt="" />
                  ) : (
                    <Image src="/images/nopick.webp" alt="" />
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
                    <Image src="/images/pick.webp" alt="" />
                  ) : (
                    <Image src="/images/nopick.webp" alt="" />
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
                        <Image src="/images/pick.webp" alt="" />
                      ) : (
                        <Image src="/images/nopick.webp" alt="" />
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
      </div>
    </div>
  );
}
