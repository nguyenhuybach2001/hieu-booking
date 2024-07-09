"use client";
import Search from "@/components/search";
import React, { useEffect, useState } from "react";
import { options } from "./config";
import Trip from "@/components/trip";
import { Button, Modal, Timeline } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addTripId, handleModal } from "@/lib/features/searchSlices";
import apiCaller from "@/api/apiCaller";
import { localApi } from "@/api/localApi";
import { xeApi } from "@/api/xeApi";
import { rankCarApi } from "@/api/rankCarApi";

function addHours(timeString, hoursToAdd) {
  console.log(timeString);
  // Tách chuỗi thời gian thành các phần giờ, phút, giây
  const [hours, minutes, seconds] = timeString?.split(":")?.map(Number);

  // Tạo đối tượng Date với giờ, phút, giây từ chuỗi thời gian
  let date = new Date();
  date.setHours(hours, minutes, seconds);

  // Cộng thêm giờ
  date.setHours(date.getHours() + hoursToAdd);

  // Lấy giờ, phút, giây từ đối tượng Date mới
  const newHours = date.getHours().toString().padStart(2, "0");
  const newMinutes = date.getMinutes().toString().padStart(2, "0");
  const newSeconds = date.getSeconds().toString().padStart(2, "0");

  // Tạo chuỗi thời gian mới
  return `${newHours}:${newMinutes}:${newSeconds}`;
}

export default function SearchPage() {
  const dispatch = useDispatch();
  const tripId = useSelector((state) => state.search.tripId);
  const searchInfo = useSelector((state) => state.search.searchInfo);
  const [dataLocals, setDataLocals] = useState([])
  const [local, setLocal] = useState([])
  const [listRankCar, setListRankCar] = useState([])
  const [car, setCar] = useState([])
  const dataTrip = useSelector((state) => state.search.dataTrip);
  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const item1 = [
    'Nước đóng chai miễn phí',
    'Wifi miễn phí',
    'Cổng sạc USB',
    'Bảo hiểm du lịch',
    'Phòng chờ VIP'
  ]
  const item2 = [
    'Những dịch vụ của xe Economic',
    'Khoang hành khách riêng',
    'Đèn đọc sách',
    'Khăn lạnh miễn phí',
    'TV riêng'
  ]
  const item3 = [
    'Những dịch vụ của xe Bussiess',
    'Khoang hành khách riêng rộng hơn',
    'Bảo hiểm du lịch',
    'Phòng chờ Đặc biệt',
    'Đổi vé linh hoạt'
  ]
  const getListRankCar = async () => {
    const res = await apiCaller({
      request: rankCarApi.getListRankCar(),
      errorHandler,
    });
    if (res) {
      setListRankCar(res.data);
    }
  };
  console.log(dataTrip)
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
  const getListCar = async () => {
    const res = await apiCaller({
      request: xeApi.getAllVehicles(),
      errorHandler,
    });
    if (res) {
      setCar(res.data)
    }

  }
  useEffect(() => {
    getLocationTreeByCondition()
    getTreeLocation()
    getListCar()
    getListRankCar()
  }, [])
  const currentDate = getCurrentDate();
  const modalDetail = useSelector((state) => state.search.modalDetail);
  console.log(dataTrip)
  return (
    <div className="w-full bg-slate-100 h-full">
      <div className="max-w-6xl  w-full mx-auto px-12 mb-20">
        <div className="text-xl font-medium mt-10">{currentDate}</div>
        <p className="text-3xl mt-5 mb-10">
          Chuyến đi từ{" "}
          <span className="text-blue-500 font-bold">{local.find((item) => item.id === searchInfo.idDiemDi)?.name}</span>
          <br /> tới <span className="text-blue-500 font-bold">{local.find((item) => item.id === searchInfo.idDiemDen)?.name}</span>
        </p>
        <Search />
        <div className="max-w-4xl w-full grid grid-cols-5 my-10 items-center">
          <p>Sắp xếp theo:</p>
          <div className="cursor-pointer hover:bg-blue-600 hover:text-white active:bg-blue-300 w-max mx-auto p-2 rounded-3xl">
            Giờ đi sớm nhất
          </div>
          <div className="cursor-pointer hover:bg-blue-600 hover:text-white active:bg-blue-300 w-max mx-auto p-2 rounded-3xl">
            Giờ đi muộn nhất
          </div>
          <div className="cursor-pointer hover:bg-blue-600 hover:text-white active:bg-blue-300 w-max mx-auto p-2 rounded-3xl">
            Giá giảm dần
          </div>
          <div className="cursor-pointer hover:bg-blue-600 hover:text-white active:bg-blue-300 w-max mx-auto p-2 rounded-3xl">
            Giá tăng dần
          </div>
        </div>
        <div>
          {dataTrip.map((option, i) => (
            <div key={i}>
              <Trip
                id={option.chuyenId}
                vehicle={car.find((val) => val.xeId === option.xeId)?.tenHangXe}
                departure={dataLocals.find((item) => item.id === option.idDiemDi)?.name}
                destination={dataLocals.find((item) => item.id === option.idDiemDen)?.name}
                timeStart={`${option.thoiGianDi.split(' ')[1].split(':')[0]}:${option.thoiGianDi.split(' ')[1].split(':')[1]}`}
                timeEnd={`${addHours(option.thoiGianDi.split(' ')[1], 8).split(':')[0]}:${addHours(option.thoiGianDi.split(' ')[1], 8).split(':')[1]}`}
                title={car.find((val) => val.xeId === option.xeId)?.tenHangXe === "Luxury" ? 'Limousine 24 phòng riêng với:' : 'Giường nằm 4X phòng riêng với:'}
                content={car.find((val) => val.xeId === option.xeId)?.tenHangXe === "Economic" ? item1 : (car.find((val) => val.xeId === option.xeId)?.tenHangXe === "Bussiess" ? item2 : item3)}
                blank={option.gheConTrong}
                price={option.giaVe}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal
        width={400}
        open={modalDetail}
        onCancel={() => {
          dispatch(handleModal(false));
        }}
        footer={null}
      >
        <p className="font-bold text-lg">
          {dataLocals.find((item) => item.id === dataTrip[tripId]?.idDiemDi)?.name} -  {dataLocals.find((item) => item.id === dataTrip[tripId]?.idDiemDen)?.name}
        </p>
        <p className="font-light mb-8">
          Khởi hành vào thứ 4 ngày 8 tháng 5 năm 2024
        </p>
        <div className="flex relative items-center">
          <p className="absolute font-light top-6">{dataTrip[tripId]?.thoiGianDiChuyen}</p>
          <Timeline
            className="w-64"
            mode={"left"}
            items={[
              {
                label: "19:30",
                children: (
                  <div>
                    <p>Hà Nội</p>
                    <p className="text-sm font-light">
                      {dataLocals.find((item) => item.id === dataTrip[tripId]?.idDiemDi)?.name}
                    </p>
                  </div>
                ),
              },
              {
                label: "6:00",
                children: (
                  <div>
                    <p>Điện Biên</p>
                    <p className="text-sm font-light">
                      {dataLocals.find((item) => item.id === dataTrip[tripId]?.idDiemDen)?.name}
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </div>
        <div className="text-center">
          <Button
            onClick={() => {
              dispatch(handleModal(false));
              dispatch(addTripId(null));
            }}
            type="primary"
          >
            {" "}
            Đóng
          </Button>
        </div>
      </Modal>
    </div>
  );
}
