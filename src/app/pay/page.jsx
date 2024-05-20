import React from "react";

export default function PayPage() {
  return (
    <div className="w-full bg-slate-100 h-full">
      <div className="max-w-6xl px-12 mx-auto pb-20">
        <div className="my-10 text-center underline font-bold text-5xl">
          Thanh toán online
        </div>
        <div className="grid grid-cols-3 gap-16">
          <div className="col-span-2 text-justify">
            Để thực hiện chuyển khoản thanh toán vé xe khách online, quý khách
            cần làm theo các bước sau: Đầu tiên, đăng nhập vào ứng dụng ngân
            hàng trực tuyến hoặc trang web của ngân hàng. Tiếp theo, chọn mục
            chuyển khoản và nhập thông tin tài khoản người nhận theo thông tin
            được cung cấp bởi nhà xe hoặc trang web đặt vé. Quan trọng là phải
            nhập đúng số tiền vé như đã thông báo. Trong phần nội dung chuyển
            khoản, quý khách cần ghi rõ họ tên, số điện thoại liên lạc và mã
            chuyến xe để nhà xe có thể xác minh thông tin một cách chính xác.
            Sau khi đã kiểm tra lại thông tin chuyển khoản, quý khách nên lưu
            lại biên lai điện tử hoặc chụp màn hình giao dịch thành công để làm
            bằng chứng thanh toán khi cần thiết. Cuối cùng, thông báo cho nhà xe
            về việc chuyển khoản đã được thực hiện qua email hoặc tin nhắn để họ
            có thể cập nhật thông tin và xác nhận chỗ ngồi trên xe cho quý
            khách. Đảm bảo rằng quý khách đã nhận được xác nhận từ nhà xe trước
            khi bắt đầu hành trình. Nếu có bất kỳ vấn đề nào phát sinh, không
            ngần ngại liên hệ với nhà xe hoặc ngân hàng để được hỗ trợ kịp thời.
            Chúc quý khách có một hành trình an toàn và thuận lợi.
          </div>
          <div className="col-span-1 text-base">
            <p className="font-bold text-xl mb-5">Chi tiết thanh toán</p>
            <div className="border border-blue-400 rounded-xl bg-white py-8 px-5">
            <div className="flex justify-between gap-10">
              <p>Mã Đơn</p>
              <p className="font-bold">CATW112</p>
            </div>
            <div className="flex justify-between gap-10 mt-2">
              <p>Giá vé</p>
              <p className="font-bold">500.000 VNĐ</p>
            </div>
            <div className="flex justify-between gap-10 mt-2">
              <p>Số Ghế</p>
              <p className="font-bold">2</p>
            </div>
            <hr className="bg-slate-200 h-[2px] my-8" />
            <div className="flex justify-between gap-10 mt-2">
              <p>Thành tiền</p>
              <p className="font-bold text-blue-500 text-xl">1.000.000 VNĐ</p>
            </div>
            <div className="flex justify-between gap-10 mt-2">
              <p>Trạng thái</p>
              <p className="font-bold">Chưa thanh toán</p>
            </div>
            </div>
            <div className="border border-blue-400 rounded-xl bg-white h-56 mt-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
