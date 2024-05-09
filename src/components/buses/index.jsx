import React from "react";

export default function Buses(props) {
  return (
    <div>
      <div className="bg-white w-[250px] mx-auto p-2 rounded-md">
        <img src={props.image} alt="" />
        <div className="font-medium flex justify-between">
            <div>{props.title}</div>
            <div className="flex gap-2 items-center"><img src="/images/clock.webp" alt="" className="h-4 w-4"/> {props.time}</div>
            </div>
        <p>Economic - Business - Luxury</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}
