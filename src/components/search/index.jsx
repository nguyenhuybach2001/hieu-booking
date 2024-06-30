/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Select } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { localApi } from "@/api/localApi";
import apiCaller from "@/api/apiCaller";
import { routeApi } from "@/api/routeApi";
import { tripApi } from "@/api/tripApi";
import { useDispatch } from "react-redux";
import { addDataTrip, addSearch } from "@/lib/features/searchSlices";

export default function Search() {
  const router = useRouter();
  const dispatch = useDispatch()
  const pathName = usePathname();
  const [local, setLocal] = useState([])
  const [searchInfo, setSearchInfo] = useState({
    idDiemDi: "617a1dad-5a0d-480f-8cd5-88c5cb4bd9d5",
    idDiemDen: "d9e52f07-01f7-4645-9a05-0ff724370cb5",
    thoiGianDi: dayjs().format("DD/MM/YYYY"),
  });
  console.log(searchInfo)
  const handleSearch = async () => {
    dispatch(addSearch(searchInfo))
    const res = await apiCaller({
      request: tripApi.searchTrips(searchInfo),
      errorHandler,
    });
    if (res) {
      router.push('/search')
      console.log(res.data)
      dispatch(addDataTrip(res.data))
    }
  };
  const errorHandler = (error) => {
    console.log("Fail: ", error);
  };
  const getTreeLocation = async () => {
    const data = {
      status: 1
    }
    const res = await apiCaller({
      request: localApi.getTreeLocation(data),
      errorHandler,
    });
    if (res) {
      setLocal(res.data)
    }
  };
  const getTreeLocationByNode = async (val) => {
    const data = {
      "code": val,
      "status": "1"
    }
    const res = await apiCaller({
      request: localApi.getTreeLocationByNode(data),
      errorHandler,
    });
    if (res) {
      console.log(res.data)
    }
  };
  useEffect(() => {
    getTreeLocation()
  }, [])
  const treeLocal = (val, e) => {
    e.stopPropagation()
    getTreeLocationByNode(val)
  }
  const result = local.map(item => ({
    value: item.id,
    label: <div className="flex justify-between"><p>{item.name}</p></div>
  }));
  const handleDepartureChange = (value) => {
    setSearchInfo({
      ...searchInfo,
      idDiemDi: value,
    });
  };

  const handleDestinationChange = (value) => {
    setSearchInfo({
      ...searchInfo,
      idDiemDen: value,
    });
  };

  const handleDateChange = (date) => {
    setSearchInfo({
      ...searchInfo,
      thoiGianDi: dayjs(date).format("DD/MM/YYYY"),
    });
  };
  return (
    <div
      className={`bg-white relative rounded-xl p-5 ${pathName === "/" ? "-top-10" : ""
        }`}
    >
      <div className="grid grid-cols-5 gap-5 items-center">
        <div className="col-span-3 gap-5 grid-cols-9 grid">
          <div className="col-span-4 flex flex-col gap-3">
            <p className="font-bold">Điểm xuất phát</p>
            <Select
              placeholder="Chọn địa điểm"
              className="w-full h-[56px] "
              allowClear
              options={result}
              value={searchInfo.idDiemDi}
              onChange={handleDepartureChange}
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
              placeholder="Chọn địa điểm"
              className="w-full h-[56px] "
              allowClear
              options={result}
              value={searchInfo.idDiemDen}
              onChange={handleDestinationChange}
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-3">
          <p className="font-bold">Ngày đi</p>
          <DatePicker
            className="h-[56px]"
            value={dayjs(searchInfo.thoiGianDi, "DD/MM/YYYY")}
            onChange={handleDateChange}
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
