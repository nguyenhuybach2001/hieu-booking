"use client";
import React from "react";
import { categorys } from "./config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "antd";

export default function Header() {
  return (
    <div>
      <div className="max-w-6xl  w-full mx-auto px-12 ">
        <div className="flex justify-between h-[105px] items-center">
          <div className=" font-bold text-5xl">Logo</div>
          <div className=" flex gap-4">
            {categorys.map((category, i) => (
              <Link key={i} href={category.path}>
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
