import Search from "@/components/search";
import { items } from "./config";
import { RightOutlined } from "@ant-design/icons";
import Buses from "@/components/buses";
import { options } from "@/components/buses/config";
export default function Home() {
  return (
    <div>
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

      <div className="bg-slate-200">
        <div className="max-w-6xl  w-full mx-auto px-12">
          <Search />
          <div className="flex gap-14 mt-10">
            {items.map((item, i) => (
              <div key={i}>
                <img
                  src={item.src}
                  alt=""
                  className="w-[100px] h-[100px] mx-auto"
                />
                <p className="mx-auto w-max my-5 text-2xl font-medium">
                  {item.title}
                </p>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
          <hr className="max-w-4xl mx-auto h-1 bg-stone-700 my-10" />
          <div>
            <div className="font-medium text-3xl flex gap-2 mb-5">
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
    </div>
  );
}
