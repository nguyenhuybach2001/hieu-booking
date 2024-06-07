"use client";
import Search from "@/components/search";
import React from "react";
import { options } from "./config";
import Trip from "@/components/trip";
import { Button, Modal, Timeline } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addTripId, handleModal } from "@/lib/features/searchSlices";

export default function SearchPage() {
  const dispatch = useDispatch();
  const tripId = useSelector((state) => state.search.tripId);
  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    return `${day}-${month}-${year}`;
  };
  const currentDate = getCurrentDate();
  const modalDetail = useSelector((state) => state.search.modalDetail);
  return (
    <div className="w-full bg-slate-100 h-full">
      <div className="max-w-6xl  w-full mx-auto px-12 mb-20">
        <div className="text-xl font-medium mt-10">{currentDate}</div>
        <p className="text-3xl mt-5 mb-10">
          Chuyến đi từ{" "}
          <span className="text-blue-500 font-bold">Điện Biên</span>
          <br /> tới <span className="text-blue-500 font-bold">Hà Nội</span>
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
          {options.map((option, i) => (
            <div key={i}>
              <Trip
                id={i}
                vehicle={option.vehicle}
                departure={option.departure}
                destination={option.destination}
                timeStart={option.timeStart}
                timeEnd={option.timeEnd}
                title={option.title}
                content={option.content}
                blank={option.blank}
                price={option.price}
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
          dispatch(addTripId(null));
        }}
        footer={null}
      >
        <p className="font-bold text-lg">
          {options[tripId]?.departure} - {options[tripId]?.destination}
        </p>
        <p className="font-light mb-8">
          Khởi hành vào thứ 4 ngày 8 tháng 5 năm 2024
        </p>
        <div className="flex relative items-center">
          <p className="absolute font-light top-6"> 7 giờ 30 phút</p>
          <Timeline
            className="w-64"
            mode={"left"}
            items={[
              {
                label: options[tripId]?.timeStart,
                children: (
                  <div>
                    <p>Hà Nội</p>
                    <p className="text-sm font-light">
                      {options[tripId]?.departure}
                    </p>
                  </div>
                ),
              },
              {
                label: options[tripId]?.timeEnd,
                children: (
                  <div>
                    <p>Điện Biên</p>
                    <p className="text-sm font-light">
                      {options[tripId]?.destination}
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
