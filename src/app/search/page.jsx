import Search from "@/components/search";
import React from "react";
import { options } from "./config";
import Trip from "@/components/trip";

export default function SearchPage() {
  const getCurrentDate = () => {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    return `${day}-${month}-${year}`;
  };
  const currentDate = getCurrentDate();

  return (
    <div className="w-full bg-slate-200 h-full">
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
                vehicle = {option.vehicle}
                departure = {option.departure}
                destination = {option.destination}
                timeStart = {option.timeStart}
                timeEnd = {option.timeEnd}
                title = {option.title}
                content = {option.content}
                blank = {option.blank}
                price = {option.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
