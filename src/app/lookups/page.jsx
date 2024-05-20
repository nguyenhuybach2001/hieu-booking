"use client";
import { Input } from "antd";
import React, { useState } from "react";

export default function Lookups() {
  const [username, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
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
          </div>
          <div className="grid grid-cols-2 mt-10">
            <div></div>
            <div className="flex justify-between gap-x-10">
              <button className="bg-white py-3 w-full h-[56px] border-[2px] border-slate-300 rounded-xl hover:bg-blue-600 hover:text-white active:bg-blue-400">
                Hủy
              </button>
              <button className="bg-white py-3 w-full h-[56px] border-[2px] border-slate-300 rounded-xl hover:bg-blue-600 hover:text-white active:bg-blue-400">
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
