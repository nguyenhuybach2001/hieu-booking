/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import { addTripId, handleModal } from "@/lib/features/searchSlices";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

export default function Trip(props) {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-12 bg-white mb-5 rounded-xl">
      <div className="col-span-6 grid gap-3 grid-cols-12">
        <div className="col-span-1 bg-slate-700 w-full"></div>
        <div className="col-span-11 p-9">
          <p className=" text-center text-blue-600 font-bold">
            {props.vehicle}
          </p>
          <div className="grid grid-cols-3 gap-2 mt-6 mb-4">
            <div className="col-span-1 justify-between flex flex-col gap-3 w-full">
              <p className="font-bold">{props.departure}</p>
              <p className="text-5xl">{props.timeStart}</p>
            </div>
            <div className="flex w-full items-end">
              <img
                loading="lazy"
                decoding="async"
                src="/images/iconTime.webp"
              />
            </div>
            <div className="col-span-1 items-end flex flex-col gap-3 justify-between w-full">
              <p className="font-bold">{props.destination}</p>
              <p className="text-5xl">{props.timeEnd}</p>
            </div>
          </div>
          <p
            onClick={() => {
              dispatch(addTripId(props.id));
              dispatch(handleModal(true));
            }}
            className="text-blue-400 font-medium underline"
          >
            Chi tiết chuyến đi{" "}
          </p>
        </div>
      </div>
      <div className="col-span-4 border-[2px] border-slate-200 rounded-2xl m-2 p-2">
        {props.title}
        <div>
          <ul>
            {props.content.map((item, i) => (
              <li key={i} className="ml-10 mt-2 list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-2 border-[2px] border-slate-200 rounded-2xl m-2">
        <div className="w-max mx-auto mt-5">Còn {props.blank} chỗ trống </div>
        <div className="w-max mx-auto mt-10 text-4xl font-medium">
          {props.price}
        </div>
        <p className="mt-5 text-xl text-right mr-2">VNĐ</p>
      </div>
    </div>
  );
}
