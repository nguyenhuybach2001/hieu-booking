import React from "react";

export default function Place(props) {
  return (
    <div>
      <div className="bg-white mx-auto w-full p-2 rounded-md">
        <img src={props.image} alt="" loading="lazy" decoding="async" />
        <div className="mt-2 font-medium text-blue-600">{props.place}</div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
