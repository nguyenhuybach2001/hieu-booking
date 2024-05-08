'use client'
import React from "react";
import { categorys } from "./config";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  return <div>
  <div className="container flex justify-center items-center text-xl font-medium mt-5">
    <div className=" mx-auto font-bold text-4xl">Logo</div>
    <div className="">{categorys.map((category, i) => (
      <Link key={i} href={category.path} className="mx-10 cursor-pointer">{category.title}</Link>
    ))}</div>
    <div className="flex gap-10 mx-10">
      <button className="border-[2px] text-blue-600 border-blue-500 px-5 p-1 rounded-md cursor-pointer active:bg-blue-300" onClick={() => router.push('/register')}>Đăng ký</button>
      <button className="border-[2px] text-blue-600 border-blue-500 px-5 p-1 rounded-md cursor-pointer active:bg-blue-300" onClick={() => router.push('/login')}>Đăng nhập</button>
    </div>
  </div>
  
  </div>;
}
