/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Select } from "antd";
import dayjs from "dayjs";
import { Option } from "antd/es/mentions";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const handleSearch = () => {
    if (pathName === "/") {
      router.push("/search");
    }
  };
  const pathName = usePathname();
  return (
    <div
      className={`bg-white relative rounded-xl p-5 ${
        pathName === "/" ? "-top-10" : ""
      }`}
    >
      <div className="grid grid-cols-5 gap-5 items-center">
        <div className="col-span-3 gap-5 grid-cols-9 grid">
          <div className="col-span-4 flex flex-col gap-3">
            <p className="font-bold">Điểm xuất phát</p>
            <Select
              defaultValue="lucy"
              className="w-full h-[56px] "
              allowClear
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </div>
          <div className="col-span-1 flex justify-center items-center relative top-4">
            <img
              loading="lazy"
              decoding="async"
              src="/images/repeat.webp"
              className="w-[32px] h-[32px]"
            />
          </div>
          <div className="col-span-4 flex flex-col gap-3">
            <p className="font-bold">Điểm đến </p>

            <Select
              defaultValue="lucy"
              className="w-full h-[56px] "
              allowClear
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-3">
          <p className="font-bold">Ngày đi</p>
          <DatePicker
            className="h-[56px]"
            defaultValue={dayjs()}
            format="DD-MM-YYYY"
            minDate={dayjs("01-01-1900", "DD-MM-YYYY")}
            maxDate={dayjs("01-01-2030", "DD-MM-YYYY")}
          />
        </div>
        <div className="col-span-1 flex items-end h-full">
          <Button
            className="h-14 w-full"
            type="primary"
            icon={<SearchOutlined className="text-xl" />}
            onClick={handleSearch}
          >
            Tìm kiếm
          </Button>
        </div>
      </div>
    </div>
  );
}
