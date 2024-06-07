import React from "react";

export default function DiscoverPage() {
  return (
    <div>
      <div className="bg-[url('/images/image_about.webp')] bg-cover h-[420px]">
        <div className="max-w-6xl w-full mx-auto px-12  p-24">
          <p className="flex justify-center text-8xl font-medium text-white">
            Về Binford
          </p>
        </div>
      </div>
      <div className="bg-slate-100">
        <div className="max-w-6xl w-full mx-auto px-12">
          <div className="bg-white px-12 py-10 rounded-xl relative -top-44">
            <div className="mb-20">
              <p className="text-xl font-bold mb-5 ">
                Về chúng tôi - Binford Bus Company
              </p>
              <p className="mb-5">
                Binford Bus Company tự hào là một trong những nhà cung cấp dịch
                vụ xe khách đường dài uy tín và đáng tin cậy nhất tại Việt Nam.
                Với hơn 20 năm kinh nghiệm trong ngành, chúng tôi cam kết mang
                đến cho khách hàng những trải nghiệm di chuyển an toàn, thoải
                mái và đáng nhớ.
              </p>
              <p>
                Sứ mệnh của chúng tôi là kết nối mọi người và tạo dựng cộng đồng
                thông qua những hành trình chất lượng. Chúng tôi tin rằng việc
                di chuyển không chỉ đơn thuần là đi từ điểm A đến điểm B, mà còn
                là cơ hội để khám phá thế giới và kết nối với những người mới.
              </p>
            </div>
            <div className="mb-20">
              <p className="text-xl font-bold mb-5 ">
                Giá trị cốt lõi của chúng tôi:
              </p>
              <ul className="list-disc pl-8">
                <li className="mb-5">
                  An toàn: An toàn là ưu tiên hàng đầu của chúng tôi. Chúng tôi
                  luôn đảm bảo rằng tất cả các xe buýt của mình đều được bảo
                  dưỡng định kỳ và trang bị các tính năng an toàn tiên tiến
                  nhất.
                </li>
                <li className="mb-5">
                  {" "}
                  Thoải mái: Chúng tôi cung cấp cho khách hàng những chiếc xe
                  buýt hiện đại với chỗ ngồi rộng rãi, tiện nghi và hệ thống
                  giải trí đa dạng.
                </li>
                <li className="mb-5">
                  {" "}
                  Tin cậy: Chúng tôi cam kết cung cấp dịch vụ đúng giờ, chính
                  xác và đáp ứng mọi nhu cầu của khách hàng.{" "}
                </li>
                <li>
                  Chuyên nghiệp: Đội ngũ nhân viên của chúng tôi được đào tạo
                  bài bản và luôn sẵn sàng hỗ trợ khách hàng một cách chu đáo.
                </li>
              </ul>
            </div>
            <div className="mb-20">
              <p className="text-xl font-bold mb-5 ">
                Tại sao chọn Binford Bus Company?:
              </p>
              <ul className="list-disc pl-8">
                <li className="mb-5">
                  Kinh nghiệm: Chúng tôi có hơn 20 năm kinh nghiệm trong ngành
                  vận tải hành khách đường dài.{" "}
                </li>
                <li className="mb-5">
                  Đội xe hiện đại: Chúng tôi sở hữu đội xe buýt hiện đại, được
                  trang bị đầy đủ tiện nghi.{" "}
                </li>
                <li className="mb-5">
                  Giá cả cạnh tranh: Chúng tôi cung cấp dịch vụ với giá cả cạnh
                  tranh và phù hợp với mọi nhu cầu.{" "}
                </li>
                <li>
                  Dịch vụ khách hàng tốt: Chúng tôi luôn quan tâm đến nhu cầu
                  của khách hàng và cung cấp dịch vụ khách hàng chu đáo.{" "}
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xl font-bold mb-5 ">Liên hệ với chúng tôi:</p>
              <p className="mb-5">
                Để biết thêm thông tin về dịch vụ của chúng tôi, vui lòng liên
                hệ với chúng tôi qua:
              </p>
              <ul className="list-disc pl-8 mb-5">
                <li>
                  Website:
                  https://www.spring-ford.net/about-spring-ford/departments/transportation
                </li>
                <li>Email: [đã xoá địa chỉ email]</li>
                <li>Hotline: 1900 1234</li>
              </ul>
              <p>Binford Company - Nâng tầm trải nghiệm di chuyển của bạn!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
