"use client";
import { ticketApi } from "@/api/ticketApi";
import { Input } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import apiCaller from "@/api/apiCaller";
import { useDispatch } from "react-redux";
import { addDataRouter } from "@/lib/features/searchSlices"
export default function Lookups() {
  const [username, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter()

  const search = () => {
    const errorHandler = (error) => {
      console.log("Fail: ", error);
    };
    const getInformationLookups = async () => {
      const data = {
        hoTenKhach: username,
        sdtKhach: number,
        emailKhack: email
      }
      const res = await apiCaller({
        request: ticketApi.searchVe(data),
        errorHandler,
      });
      if (res) {
        router.push('/trip-lists')
        console.log(res.data)
        localStorage.setItem(
          'data',
          JSON.stringify(res.data)
        )
      }
    };
    getInformationLookups()
  }
  return (
    <div className="w-full bg-slate-100 h-full">
      <div className="max-w-6xl px-12 mx-auto pb-20">
        <div className="my-10 text-center underline font-bold text-5xl">
          Tra cứu vé
        </div>
        <div className="mt-10">
          <p className="font-bold text-xl">
            Để tra cứu thông tin, vui lòng điền điền chính xác 3 thông tin dưới
            đây
          </p>
          <div className="bg-white rounded-lg border-[2px] border-slate-300 p-10 text-lg mt-5">
            <div>
              <p className="mb-2">Họ và Tên người đi</p>
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
                type="string"
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
          </div>
          <div className="grid grid-cols-2 mt-10">
            <div></div>
            <div className="flex justify-between gap-x-10">
              <button className="bg-white py-3 w-full h-[56px] border-[2px] border-slate-300 rounded-xl hover:bg-blue-600 hover:text-white active:bg-blue-400">
                Hủy
              </button>
              <button
                className="bg-white py-3 w-full h-[56px] border-[2px] border-slate-300 rounded-xl hover:bg-blue-600 hover:text-white active:bg-blue-400"
                onClick={search}
              >
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
