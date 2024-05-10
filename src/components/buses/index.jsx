import React from "react";

export default function Buses(props) {
  return (
    <div>
      <div className="bg-white mx-auto w-full p-2 rounded-md">
        <img src={props.image} alt="" />
        <div className="font-medium flex justify-between mt-5">
            <div>{props.title}</div>
            <div className="flex gap-2 items-center"><img src="/images/clock.webp" alt="" className="h-4 w-4"/> {props.time}</div>
            </div>
        <p>Economic - Business - Luxury</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}
