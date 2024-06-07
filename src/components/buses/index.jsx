import { Image } from "antd";
import React from "react";

export default function Buses(props) {
  return (
    <div>
      <div className="bg-white mx-auto w-full p-2 rounded-md">
        <Image src={props.image} alt="" loading="lazy" decoding="async" />
        <div className="font-medium flex justify-between mt-5">
          <div>{props.title}</div>
          <div className="flex gap-2 items-center">
            <Image src="/images/clock.webp" alt="" className="h-4 w-4" loading="lazy" decoding="async"/>{" "}
            {props.time}
          </div>
        </div>
        <p>Economic - Business - Luxury</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}
