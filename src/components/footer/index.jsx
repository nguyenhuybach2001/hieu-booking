import React from "react";
import { footer } from "./config";
import {
  AimOutlined,
  PhoneOutlined,
  FacebookOutlined,
  MessageOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="mt-auto bg-indigo-900 text-white">
      <div className="container pl-56 py-10 flex gap-10">
        <div className="flex gap-16">
          {footer.map((item, i) => (
            <div key={i}>
              <p className="text-lg font-bold">{item.title}</p>
              {item.contents.map((content, index) => (
                <p key={index} className="mt-5">
                  {content.subtitle}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div>
          <div>
            <AimOutlined className="text-3xl mr-3" /> 2972 Westheimer RD.Santa
            Ana, Illinois 85486
          </div>
          <div className="mt-5">
            <PhoneOutlined className="text-3xl mr-3" /> (303) 555-0105
          </div>
          <div className="mt-5">
            <FacebookOutlined className="text-3xl mr-3" />{" "}
            <MessageOutlined className="text-3xl mr-3" />{" "}
            <YoutubeOutlined className="text-3xl mr-3" />{" "}
            <InstagramOutlined className="text-3xl mr-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
