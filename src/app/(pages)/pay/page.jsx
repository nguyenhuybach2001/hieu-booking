import { QRCode } from "antd";
import React from "react";

export default function PayPage() {
  return (
    <div className="w-full bg-slate-100 h-full">
      <div className="max-w-6xl px-12 mx-auto pb-20">
        <div className="my-10 text-center underline font-bold text-5xl">
          Thanh toán online
        </div>
        <div className="grid grid-cols-3 gap-16">
          <div className="col-span-1 text-justify">
            <p className="font-bold text-xl mb-5">Chi tiết thanh toán</p>
            <div className="border border-blue-400 rounded-xl bg-white py-8 px-5">
              Để thực hiện chuyển khoản thanh toán vé xe khách online, quý khách
              cần làm theo các bước sau:
              <br />
              <br />
              1. Đăng nhập vào ứng dụng ngân hàng trực tuyến trên điện thoại của
              bạn.
              <br /> 2. Chọn mục thanh toán Qr.
              <br /> 3. Quét mã Qr thanh toán hiện trên màn hình trang web Nhấn
              chọn thanh toán.
              <br /> 4. Lưu lại hình ảnh giao dịch
              <br />
              <br />
              Vé của bạn sẽ được xác nhận và thông báo lại cho bạn từ nhà xe
              trong vòng 1 ngày kể từ ngày bạn thực hiện thanh toán thành công.
              <br />
              <br />
              Lưu ý: Nếu bạn không nhận được thông báo đã thanh toán thành công
              từ sau 48h kể từ khi thanh toán, vui lòng liên hệ nhà xe qua số
              điện thoại hoặc zalo nhà xe được gắn trên trang chủ hoặc chân
              trang web để được hỗi trợ sớm và nhanh nhất
            </div>
          </div>
          <div className="col-span-2 text-base">
            <p className="font-bold text-xl mb-5">Chi tiết thanh toán</p>
            <div className="border border-blue-400 rounded-xl bg-white py-8 px-5">
              <div className="flex justify-between gap-5">
                <div>
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
                </div>
                <hr className="bg-slate-200 h-[85px] w-[1px]" />
                <div>
                  <div className="flex justify-between gap-10 mt-2">
                    <p>Thành tiền</p>
                    <p className="font-bold text-blue-500 text-xl">
                      1.000.000 VNĐ
                    </p>
                  </div>
                  <div className="flex justify-between gap-10 mt-2">
                    <p>Trạng thái</p>
                    <p className="font-bold">Chưa thanh toán</p>
                  </div>
                </div>
              </div>
              <hr className="bg-slate-200 h-[1px] my-8" />
              <div>
                <p className="text-center font-bold">Qr thanh toán</p>
                <div className="grid grid-cols-2 gap-5 mt-8">
                  <QRCode
                    className="!w-full !h-full"
                    errorLevel="Q"
                    value="Chủ tài khoản: LE HOANG HIEU
                    Số tài khoản: 105870483112"
                  />
                  <div>
                    <img src="/images/vietin.png" alt="#" className="mb-6" />
                    <p>
                      Chủ tài khoản:{" "}
                      <span className="font-bold">LE HOANG HIEU</span>
                    </p>
                    <p>
                      Số tài khoản:{" "}
                      <span className="font-bold">105870483112</span>
                    </p>
                    <p>
                      Chi nhánh quản lý:{" "}
                      <span className="font-bold">CN HAI BA TRUNG</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
