import React from "react";
import { Image } from "antd";
import { places } from "./config";

export default function HanoiPage() {
  return (
    <div>
      <div className="bg-[url('/images/hanoi1.webp')] bg-cover h-[420px]">
        <div className="max-w-6xl w-full mx-auto px-12  p-24">
          <p className="text-8xl font-medium text-white mt-14">Hà Nội</p>
        </div>
      </div>
      <div className="bg-slate-100 py-10">
        <div className="max-w-6xl  w-full mx-auto px-12">
          <p className="mb-5">
            Được thành lập hơn 1000 năm trước, thành phố thủ đô của Việt Nam rất
            giàu lịch sử, với những con đường của khu phố cổ huyên náo có niên
            đại từ thế kỷ 14. Lang thang trên những con đường rợp bóng cây này
            qua mặt tiền thuộc địa đổ nát sẽ đưa bạn quay ngược thời gian. Tuy
            nhiên, Hà Nội ngày nay còn nhiều hơn quá khứ. Thành phố cổ đang được
            tiếp thêm sinh lực với các quán cà phê hiện đại, nhà hàng đẳng cấp
            thế giới và phòng trưng bày nghệ thuật mát mẻ. Khi mặt trời lặn, bạn
            có thể chọn các lỗ tưới nước, từ các quán bar trên sân thượng tinh
            xảo đến bia hơi ù ù. Nếu bạn đi du lịch Hà Nội lần đầu tiên, đây là
            những trải nghiệm bạn phải thử ít nhất một lần trong đời. Từ những
            ngôi đền cổ đến những khu chợ náo nhiệt, Hà Nội đều có tất cả. Về cơ
            bản, đó là nhịp đập văn hóa của Việt Nam.
          </p>
          {places.map((place, i) => (
            <div key={i} className="grid grid-cols-2 gap-10 mb-10">
              <div style={{ order: i % 2 === 1 ? 1 : 2 }}>
                <Image
                  src={place.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
                <p className="font-bold text-2xl mb-5">{place.title}</p>
                <p>{place.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
