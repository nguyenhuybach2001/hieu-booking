import { DownOutlined } from "@ant-design/icons";
import React from "react";

export default function DiscoverPage() {
  return (
    <div>
      <div className="bg-[url('/images/image_support.webp')] bg-cover h-[420px]">
        <div className="max-w-6xl w-full mx-auto px-12  p-24">
          <p className="text-8xl font-medium text-white">An toàn và</p>

          <p className="text-8xl font-medium text-white mt-5">Bền vững</p>
        </div>
      </div>
      <div className="bg-slate-100 py-10">
        <div className="max-w-6xl w-full mx-auto px-12">
          <p className="font-bold mb-2">Dịch vụ khách hàng</p>
          <p>
            Tìm câu trả lời cho các câu hỏi thường gặp về đặt chỗ và các chuyến
            đi Binford của bạn. Sử dụng công cụ tìm kiếm để có được tất cả thông
            tin bạn cần và tìm thêm các tùy chọn hữu ích. Chúc các bạn có những
            chuyến đi vui vẻ
          </p>

          <div className="grid grid-cols-3 gap-x-10 mt-5">
            <div className="bg-white">
              <img
                src="/images/rectangle8.webp"
                alt=""
                className="border border-slate-300 w-full"
              />
              <div className="border border-slate-300 py-5 px-4">
                <p className="flex justify-center font-medium">
                  Thông tin và lộ trình hiện tại
                </p>
                <p className="flex justify-center text-center text-sm">
                  Tất cả thời gian khởi hành và điểm đến kết thúc của Binford
                </p>
              </div>
            </div>
            <div className="bg-white">
              <img
                src="/images/rectangle7.webp"
                alt=""
                className="border border-slate-300 w-full"
              />
              <div className="border border-slate-300 py-5 px-4">
                <p className="flex justify-center font-medium">
                  Thay đổi đặt chỗ của bạn
                </p>
                <p className="flex justify-center text-center text-sm">
                  Bạn chỉ cần xác nhận thay đổi đặt chỗ để hoàn thành là tốt
                </p>
              </div>
            </div>
            <div className="bg-white">
              <img
                src="/images/rectangle8.webp"
                alt=""
                className="border border-slate-300 w-full"
              />
              <div className="border border-slate-300 py-5 px-4">
                <p className="flex justify-center font-medium">
                  Thất lạc & tìm lại hành lý
                </p>
                <p className="flex justify-center text-center text-sm">
                  Bạn bị mất hành lý hãy báo cáo cho chúng tôi, chúng tôi sẽ tìm
                  lại cho bạn
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="font-bold text-lg mb-5">Đặt vé:</p>
            <div className="bg-white border border-slate-100 rounded-md">
              <div className="flex justify-between bg-indigo-900 text-white p-2 px-4 rounded-t-md">
                <p>KH có thể đặt vé qua những kênh nào?</p>
                <DownOutlined />
              </div>
              <div className="bg-white py-4">
                <ul className="list-disc pl-8">
                  <li>Zalo</li>
                  <li>Facebook</li>
                  <li>Hotline</li>
                  <li>Quầy vé</li>
                  <li>Website haivan.com</li>
                </ul>
              </div>
              <div className="flex justify-between bg-indigo-900 text-white p-2 px-4 rounded-t-md">
                <p>KH có thể đặt vé qua những kênh nào?</p>
                <DownOutlined />
              </div>
              <div className="bg-white py-4">
                <ul className="list-disc pl-8">
                  <li>
                    Nếu khách hàng book vé qua Website thì có thể tự lựa chọn
                    dòng xe, chuyến, số ghế theo sở thích của mình
                  </li>
                </ul>
              </div>
              <div className="flex justify-between bg-indigo-900 text-white p-2 px-4 rounded-t-md">
                <p>
                  Khách hàng có thể tự hủy vé trên Website đối với những booking
                  đã thanh toán không ?
                </p>
                <DownOutlined />
              </div>
              <div className="bg-white py-4">
                <ul className="list-disc pl-8">
                  <li>
                    Đối với những vé đã thanh toán khách hàng không thể tự hủy
                    vé - cần liên hệ với tổng đài để được hỗ trợ
                  </li>
                </ul>
              </div>
              <div className="flex justify-between bg-indigo-900 text-white p-2 px-4 rounded-t-md">
                <p>
                  KH thanh toán theo hình thức chuyển khoản, sau 2 ngày không
                  nhận được thông báo thì làm như thế nào ?
                </p>
                <DownOutlined />
              </div>
              <div className="bg-white py-4">
                <ul className="list-disc pl-8">
                  <li>
                    KH liên hệ số Hotline gặp tư vấn viên, cung cấp thông tin
                    thời gian chuyển khoản và mã tham chiếu để nhận viên kiểm
                    tra thông tin
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="font-bold text-lg mb-5">Chính sách hoàn tiền:</p>
            <div className="bg-white border border-slate-100 rounded-md">
              <div className="flex justify-between bg-indigo-900 text-white p-2 px-4 rounded-t-md">
                <p>Tôi có thể hủy vé đã thanh toán như thế nào?</p>
                <DownOutlined />
              </div>
              <div className="bg-white py-4">
                <ul className="list-disc pl-8">
                  <li>
                    Trường hợp khách muốn hủy vé đã thanh toán vui lòng gọi điện
                    trực tiếp bộ phận chăm sóc khách hàng để thông báo hủy vé.
                  </li>
                </ul>
              </div>
              <div className="flex justify-between bg-indigo-900 text-white p-2 px-4 rounded-t-md">
                <p>Hủy vé có bị mất phí không?</p>
                <DownOutlined />
              </div>
              <div className="bg-white py-4">
                <ul className="list-disc pl-8">
                  <li>Hủy vé không bị mất phí</li>
                </ul>
              </div>
              <div className="flex justify-between bg-indigo-900 text-white p-2 px-4 rounded-t-md">
                <p>KH không lên được xe thì có được hoàn tiền hay không?</p>
                <DownOutlined />
              </div>
              <div className="bg-white py-4">
                <ul className="list-disc pl-8">
                  <li>
                    Chúng tôi cam kết hoàn tiền vé cho khách nếu lỗi xảy ra do
                    nhà xe cung cấp dịch vụ . Nhưng nếu KH lỡ chuyến xe vì bất
                    cứ lý do nào khác, hãng không cam kết hoàn tiền vé cho
                    khách.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="font-bold text-lg mb-5">Chính sách hoàn tiền</p>
            <div className="bg-white border border-slate-100 rounded-md">
              <div className="flex justify-between bg-indigo-900 text-white p-2 px-4 rounded-t-md">
                <p>Tôi có thể hủy vé đã thanh toán như thế nào?</p>
                <DownOutlined />
              </div>
              <div className="bg-white py-4">
                <ul className="list-disc pl-8">
                  <li>
                    Trường hợp khách muốn hủy vé đã thanh toán vui lòng gọi điện
                    trực tiếp bộ phận chăm sóc khách hàng để thông báo hủy vé.
                  </li>
                </ul>
              </div>
              <div className="flex justify-between bg-indigo-900 text-white p-2 px-4 rounded-t-md">
                <p>
                  Khi khách muốn hủy vé hoàn tiền thì cần làm những thủ tục gì?
                </p>
                <DownOutlined />
              </div>
              <div className="bg-white py-4">
                <ul className="list-disc pl-8">
                  <li>
                    KH cũng cấp cho TĐ thông tin tên + số điện thoại đặt vé +
                    thông tin tài khoản ngân hàng của khách
                  </li>
                </ul>
              </div>
              <div className="flex justify-between bg-indigo-900 text-white p-2 px-4 rounded-t-md">
                <p>KH có thể nhận lại tiền do hủy vé của mình bằng cách nào?</p>
                <DownOutlined />
              </div>
              <div className="bg-white py-4">
                <ul className="list-disc pl-8">
                  <li>
                    Những trường hợp hủy vé nằm trong chính sách hủy vé của hãng
                    sẽ được hoàn tiền dưới dưới hình thức chuyển khoản
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
