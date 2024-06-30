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

export default function SearchPage() {
  const dispatch = useDispatch();
  const tripId = useSelector((state) => state.search.tripId);
  const searchInfo = useSelector((state) => state.search.searchInfo);
  const [dataLocals, setDataLocals] = useState([])
  const [local, setLocal] = useState([])
  const dataTrip = useSelector((state) => state.search.dataTrip);
  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    return `${day}-${month}-${year}`;
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
  useEffect(() => {
    getLocationTreeByCondition()
    getTreeLocation()
  }, [])
  console.log(dataTrip,searchInfo)
  const currentDate = getCurrentDate();
  const modalDetail = useSelector((state) => state.search.modalDetail);
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
                vehicle="Economic"
                departure={dataLocals.find((item) => item.id === option.idDiemDi)?.name}
                destination={dataLocals.find((item) => item.id === option.idDiemDen)?.name}
                timeStart="19:30"
                timeEnd="06:00"
                title="Giường nằm 4X chỗ với:"
                content={[
                  "Nước đóng chai miễn phí",
                  "Wifi miễn phí",
                  "Cổng sạc USB",
                  "Bảo hiểm du lịch",
                  "Phòng chờ VIP",
                ]}
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
        {dataLocals.find((item) => item.id ===dataTrip[tripId]?.idDiemDi)?.name} -  {dataLocals.find((item) => item.id ===dataTrip[tripId]?.idDiemDen)?.name}
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
                label:"19:30",
                children: (
                  <div>
                    <p>Hà Nội</p>
                    <p className="text-sm font-light">
                      {dataLocals.find((item) => item.id ===dataTrip[tripId]?.idDiemDi)?.name}
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
                    {dataLocals.find((item) => item.id ===dataTrip[tripId]?.idDiemDen)?.name}
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
