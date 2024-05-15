import React from "react";
import { footer } from "./config";

export default function Footer() {
  return (
    <div className="mt-auto bg-slate-800 text-white">
      <div className="max-w-6xl  w-full mx-auto px-12 py-20 gap-24 grid grid-cols-5 text-sm">
        <div className="col-span-3 flex gap-20 w-full">
          {footer.map((item, i) => (
            <div key={i}>
              <p className="font-bold">{item.title}</p>
              {item.contents.map((content, index) => (
                <p key={index} className="mt-5">
                  {content.subtitle}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="col-span-2 w-full">
          <div className="flex items-center">
            <img loading="lazy" decoding="async" src="/images/location.webp" alt="" className="w-[40px] h-[40px]"/> 2972 Westheimer RD.Santa
            Ana, Illinois 85486
          </div>
          <div className="flex items-center mt-10">
          <img loading="lazy" decoding="async" src="/images/phone.webp" alt="" className="w-[35px] h-[35px]"/> (303) 555-0105
          </div>
          <div className="flex items-center mt-10 gap-5">
          <img loading="lazy" decoding="async" src="/images/twitter.webp" alt="" className="w-[40px] h-[40px]"/>
          <img loading="lazy" decoding="async" src="/images/facebook.webp" alt="" className="w-[40px] h-[40px]"/>
          <img loading="lazy" decoding="async" src="/images/message.webp" alt="" className="w-[40px] h-[40px]"/>
          <img loading="lazy" decoding="async" src="/images/linkedin.webp" alt="" className="w-[40px] h-[40px]"/>
          <img loading="lazy" decoding="async" src="/images/youtube.webp" alt="" className="w-[40px] h-[30px]"/>
          </div>
        </div>
      </div>
    </div>
  );
}
