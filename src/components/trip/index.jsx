import Link from "next/link";
import React from "react";

export default function Trip(props) {
  return (
    <div className="grid grid-cols-12 bg-white mb-5 rounded-xl">
      <div className="col-span-6 grid grid-cols-12">
        <div className="col-span-1 bg-slate-700 w-5/6"></div>
        <div className="col-span-11 ml-2 mb-10">
          <p className="w-max mx-auto text-blue-600 font-bold my-5">
            {props.vehicle}
          </p>
          <div className="grid grid-cols-3 font-bold ml-5">
            <p className="col-span-2">{props.departure}</p>
            <p className="ml-5">{props.destination}</p>
          </div>
          <div className="text-5xl grid grid-cols-3 my-5 ml-5">
            <div className="col-span-1">{props.timeStart}</div>
            <img src="/images/iconTime.webp" />
            <div className="col-span-1 ml-5">{props.timeEnd}</div>
          </div>
          <Link href='ajhjahj' className="text-blue-400 font-medium underline">Chi tiết chuyến đi </Link>
        </div>
      </div>
      <div className="col-span-4 border-[2px] border-slate-200 rounded-2xl m-2 p-2">
        {props.title}
        <div>
            <ul>
                {props.content.map((item, i) => (
                    <li key={i} className="ml-10 mt-2 list-disc">{item}</li>
                ))}
            </ul>
        </div>
      </div>
      <div className="col-span-2 border-[2px] border-slate-200 rounded-2xl m-2">
        <div className="w-max mx-auto mt-5">Còn {props.blank} chỗ trống </div>
        <div className="w-max mx-auto mt-10 text-4xl font-medium">{props.price}</div>
        <p className="mt-5 text-xl text-right mr-2">VNĐ</p>
      </div>
    </div>
  );
}
