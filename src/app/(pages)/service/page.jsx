import React from "react";
import { services } from "./config";
import { Image } from "antd";

export default function ServicePage() {
  return (
    <div>
      <div className="bg-[url('/images/image_service.webp')] bg-cover h-[420px]">
        <div className="max-w-6xl w-full mx-auto px-12  p-24">
          <p className="text-8xl font-medium text-white">Uy tín và</p>
          <p className="text-8xl font-medium text-white mt-5">chất lượng</p>
        </div>
      </div>
      <div className="bg-slate-100 py-10">
        <div className="max-w-6xl  w-full mx-auto px-12">
          <p className="text-4xl font-bold mb-5 ">
            Khám phá sự tiện lợi và thoải mái cùng Binford
          </p>
          <p className="mb-5">
            Binford tự hào là nhà cung cấp dịch vụ xe khách đường dài uy tín
            hàng đầu Việt Nam, mang đến cho quý khách những trải nghiệm di
            chuyển an toàn, thoải mái và đáng nhớ. Với đội xe hiện đại, cùng đội
            ngũ nhân viên chuyên nghiệp, nhiệt tình, Binford cam kết đáp ứng mọi
            nhu cầu của quý khách.
          </p>
          {services.map((service, i) => (
            <div key={i} className="grid grid-cols-3 gap-10 mb-10">
              <div style={{ order: i % 2 === 1 ? 1 : 2 }} className="col-span-2">
                <Image
                  src={service.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
                <p className="font-bold text-2xl mb-5">{service.title}</p>
                <p>{service.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
