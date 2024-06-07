import Place from "@/components/place";
import { places } from "@/components/place/config";
import React from "react";

export default function DiscoverPage() {
  return (
    <div>
      <div className="bg-[url('/images/image_discover.webp')] bg-cover h-[420px]">
        <div className="max-w-6xl w-full mx-auto px-12  p-24">
          <p className="text-8xl font-medium text-white">Vui vẻ và</p>
          <p className="text-8xl font-medium text-white mt-3">thư giãn</p>
        </div>
      </div>
      <div className="bg-slate-100 py-10">
        <div className="max-w-6xl  w-full mx-auto px-12">
          <p className="text-4xl font-bold mb-5 ">
            Các điểm đến tốt nhất Việt Nam
          </p>
          <p className="mb-5">
            Bạn đang vật lộn để nghĩ về những nơi để đi nghỉ? Không việc gì phải
            nghĩ nữa! Với một mạng lưới rộng lớn, chúng tôi có thể cung cấp cho
            bạn các chuyến xe đến các điểm đến tốt nhất Việt Nam.
          </p>
          <p className="mb-5">
            Cho dù bạn thích đi leo núi ở Sapa hay bạn muốn có một kỳ nghỉ thư
            giãn ở Mộc Châu, Hải Vân rất vui khi được đưa bạn đến đó.
          </p>
          <p>
            Dưới đây bạn có thể tìm hiểu thêm về các điểm đến du lịch tốt nhất ở
            Việt Nam và lấy cảm hứng để lên kế hoạch cho chuyến phiêu lưu tiếp
            theo của bạn.
          </p>
          <div className="grid grid-cols-3 gap-x-16 gap-y-10 mt-10">
            {places.map((place, i) => (
                <Place key={i}
                image = {place.image}
                place = {place.place}
                description = {place.description}
                />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
