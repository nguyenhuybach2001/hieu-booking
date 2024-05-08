"use client";
import React from "react";
import { categorys } from "./config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "antd";

export default function Header() {
  const router = useRouter();
  return (
    <div>
      <div className="max-w-6xl  w-full mx-auto px-12 ">
        <div className="grid grid-cols-8 h-[105px] items-center">
          <div className="col-span-2 font-bold text-5xl">Logo</div>
          <div className="col-span-4 flex gap-4">
            {categorys.map((category, i) => (
              <Link key={i} href={category.path}>
                {category.title}
              </Link>
            ))}
          </div>
          <div className="flex gap-10 col-span-2">
            <Button
              className="h-11"
              // onClick={() => router.push("/register")}
            >
              Đăng ký
            </Button>
            <button
              className="border-[2px] text-blue-600 border-blue-500 px-5 p-1 rounded-md cursor-pointer active:bg-blue-300"
              onClick={() => router.push("/login")}
            >
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
