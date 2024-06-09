/* eslint-disable @next/next/no-img-element */
import Search from "@/components/search";
import { items } from "./config";
import { RightOutlined } from "@ant-design/icons";
import Buses from "@/components/buses";
import { options } from "@/components/buses/config";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg-[url('/images/image.webp')] bg-cover h-[420px]">
        <div className="max-w-6xl w-full mx-auto px-12  p-24">
          <p className="text-blue-600 text-5xl font-medium">
            Hành trình an toàn, trải nghiệm trọn vẹn
          </p>
          <p className="text-white text-3xl font-medium mt-7">
            Hành trình của bạn, niềm vui của chúng tôi.
          </p>
        </div>
      </div>

      <div className="bg-slate-100">
        <div className="max-w-6xl  w-full mx-auto px-12">
          <Search />
          <div className="flex gap-14 mt-10">
            {items.map((item, i) => (
              <div className="flex flex-col items-center " key={i}>
                <img loading="lazy" src={item.src} alt="" decoding="async" />
                <p className=" my-5 text-2xl font-medium">{item.title}</p>
                <p className="text-justify">{item.content}</p>
              </div>
            ))}
          </div>
          <hr className="max-w-4xl mx-auto h-1 bg-stone-700 my-10" />
          <div>
            <div id="tuyen_duong" className="font-medium text-3xl flex gap-2 mb-5">
              Các tuyến phổ biến <RightOutlined className="text-2xl" />
            </div>
            <div className="grid grid-cols-4 gap-x-10 gap-y-5 pb-16">
              {options.map((option, i) => (
                <Buses
                  key={i}
                  image={option.image}
                  title={option.title}
                  price={option.price}
                  time={option.time}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
