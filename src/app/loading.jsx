import { Image } from "antd";
import React from "react";

export default function Loading() {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <Image src="/gifs/loading.gif" alt="#" />
    </div>
  );
}
