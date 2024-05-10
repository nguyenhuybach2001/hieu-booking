"use client";
import { SearchOutlined } from "@ant-design/icons";
import { DatePicker, Select } from "antd";
import dayjs from "dayjs";
import { Option } from "antd/es/mentions";
import React from "react";

export default function Search() {
  return (
    <div className="bg-white h-[135px] rounded-xl">
      <div className="grid grid-cols-12 pt-5 pl-10 font-bold">
        <div className="col-span-4">
          <p>Điểm xuất phát</p>
        </div>
        <div className="col-span-3">
          <p>Điểm đến </p>
        </div>
        <div className="col-span-2 ml-5 w-full">
          <p>Ngày đi</p>
        </div>
      </div>
      <div className="grid grid-cols-12 pt-2 pl-10 font-bold">
        <div className="col-span-3">
          <Select className="w-full h-[56px] " >
            <Option value="option 1">option 1</Option>
            <Option value="option 2">option 2</Option>
          </Select>
        </div>
        <div className="col-span-1 m-auto w-max items-center">
          <img
            src="/images/repeat.webp"
            className="w-[32px] h-[32px]"
          />
        </div>
        <div className="col-span-3">
          <Select className="w-full h-[56px] ">
            <Option value="option 1">option 1</Option>
            <Option value="option 2">option 2</Option>
          </Select>
        </div>
        <div className="col-span-2 ml-5 w-full">
          <DatePicker
            className="h-[56px]"
            defaultValue={dayjs()}
            format="DD-MM-YYYY"
            minDate={dayjs("01-01-1900", "DD-MM-YYYY")}
            maxDate={dayjs("01-01-2030", "DD-MM-YYYY")}
          />
        </div>
        <div className="col-span-2 font-normal ml-5 w-full">
          <button className="flex items-center gap-2 bg-blue-400 py-3 px-5 ml-5 w-[150px] h-[56px] rounded-md text-white ">
            <SearchOutlined className="text-xl" />
            <p>Tìm kiếm</p>
          </button>
        </div>
      </div>
    </div>
  );
}
