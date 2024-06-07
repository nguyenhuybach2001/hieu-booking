"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Admin() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 gap-8 h-full grid-rows-8">
      <div
        onClick={() => router.push("/admin/car")}
        className="bg-[url('/images/admin/image1.png')] group bg-cover cursor-pointer row-span-3 rounded-xl  flex justify-center items-center"
      >
        <p className=" text-4xl text-white text-center group-hover:scale-105">
          Quản lý xe
        </p>
      </div>
      <div
        onClick={() => router.push("/admin/trip")}
        className="bg-[url('/images/admin/image2.png')] group  bg-cover cursor-pointer  row-span-3   rounded-xl flex justify-center items-center"
      >
        <p className=" text-4xl text-white text-center group-hover:scale-105">
          Quản lý chuyến đi
        </p>
      </div>
      <div
        onClick={() => router.push("/admin/route")}
        className=" row-span-3 rounded-xl flex bg-[url('/images/admin/image3.png')] group bg-cover cursor-pointer   justify-center items-center"
      >
        <p className=" text-4xl text-white text-center group-hover:scale-105">
          Quản lý tuyến đường
        </p>
      </div>

      <div
        onClick={() => router.push("/admin/ticket")}
        className="   row-span-3 rounded-xl flex justify-center bg-[url('/images/admin/image4.png')] group bg-cover cursor-pointer items-center"
      >
        <p className=" text-4xl text-white text-center group-hover:scale-105">
          Quản lý vé
        </p>
      </div>
      <div className="row-span-2    rounded-xl bg-[url('/images/admin/image5.png')] group bg-cover cursor-pointer flex justify-center items-center">
        <p className=" text-4xl text-white text-center group-hover:scale-105">
          Cài đặt
        </p>
      </div>
      <div className="row-span-2  rounded-xl flex   bg-[url('/images/admin/image6.png')] group bg-cover cursor-pointer justify-center items-center">
        <p className=" text-4xl text-white text-center group-hover:scale-105">
          Người dùng
        </p>
      </div>
    </div>
  );
}
