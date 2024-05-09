"use client";
import { SearchOutlined } from "@ant-design/icons";
import { DatePicker, Select } from "antd";
import dayjs from "dayjs";
import { Option } from "antd/es/mentions";
import React from "react";

export default function Search() {
  return (
    <div className="bg-white h-[135px] mt-10 rounded-xl">
      <div className="grid grid-cols-12 py-5 px-10 font-bold">
        <div className="col-span-3">
          <p>Điểm xuất phát</p>
          <Select className="w-[250px] h-[56px] mt-2" >
            <Option value="option 1">option 1</Option>
            <Option value="option 2">option 2</Option>
          </Select>
        </div>
        <div className="col-span-1">
          <img
            src="/images/repeat.webp"
            className="w-[32px] h-[32px] mt-12 ml-6"
          />
        </div>
        <div className="col-span-4">
          <p>Điểm đến </p>
          <Select className="w-[250px] h-[56px] mt-2">
            <Option value="option 1">option 1</Option>
            <Option value="option 2">option 2</Option>
          </Select>
        </div>
        <div className="col-span-2">
          <p>Ngày đi</p>
          <DatePicker
            className="mt-2 h-[56px]"
            defaultValue={dayjs()}
            format="DD-MM-YYYY"
            minDate={dayjs("01-01-1900", "DD-MM-YYYY")}
            maxDate={dayjs("01-01-2030", "DD-MM-YYYY")}
          />
        </div>
        <div className="col-span-2 font-normal">
          <button className="flex items-center gap-2 bg-blue-400 py-3 px-5 ml-5 mt-8 w-[150px] h-[56px] rounded-md text-white ">
            <SearchOutlined className="text-xl" />
            <p>Tìm kiếm</p>
          </button>
        </div>
      </div>
    </div>
  );
}
