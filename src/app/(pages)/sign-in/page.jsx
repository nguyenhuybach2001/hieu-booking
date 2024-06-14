"use client";
import { Button, Divider, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignIn() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [sđt, setSđt] = useState(null);
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const onFinish1 = (values) => {
    if (values.sđt === "0919727188") {
      setStep(2);
      form1.resetFields();
      setSđt(values.sđt);
    } else {
      form1.setFields([
        {
          name: "sđt",
          errors: ["Số điện thoại không đúng"],
        },
      ]);
    }
  };
  const onFinish2 = (values) => {
    if (values.cmnd === "040201000146") {
      form2.resetFields();
      router.push("/host");
    } else {
      form1.setFields([
        {
          name: "cmnd",
          errors: ["CMND không đúng"],
        },
      ]);
    }
  };
  return (
    <div className="grid grid-cols-2 w-screen h-screen">
      <div>
        <img
          className="w-screen h-screen"
          src={"/images/bg_signin.png"}
          alt="#"
        />
      </div>
      <div className="flex bg-[#F2F3FA] justify-center items-center">
        <div className=" bg-white rounded-xl w-2/4 scale-110">
          <p className="text-[#4F4F4F] text-center p-4">Đăng nhập</p>
          <Divider className="my-2" />
          {(() => {
            switch (step) {
              case 1:
                return (
                  <Form
                    className="text-center p-4 "
                    form={form1}
                    onFinish={onFinish1}
                  >
                    <p className="font-bold">Điền số điện thoại để đăng nhập</p>
                    <Form.Item
                      name={"sđt"}
                      className="my-6"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập số điện thoại",
                        },
                        {
                          pattern: /^\d+$/,
                          message: "Chỉ được phép nhập số",
                        },
                      ]}
                    >
                      <Input className="h-11" />
                    </Form.Item>
                    <Button
                      className="w-full h-11"
                      type="primary"
                      htmlType="submit"
                    >
                      Tiếp tục{" "}
                    </Button>
                  </Form>
                );
              case 2:
                return (
                  <Form
                    layout="vertical"
                    className="text-center p-4"
                    form={form2}
                    onFinish={onFinish2}
                  >
                    <p className="font-bold">{sđt}</p>
                    <Form.Item
                      name={"cmnd"}
                      className="my-6"
                      label="CMND"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập số điện thoại",
                        },
                        {
                          pattern: /^\d+$/,
                          message: "Chỉ được phép nhập số",
                        },
                      ]}
                    >
                      <Input.Password className="h-11" />
                    </Form.Item>
                    <Button
                      className="w-full h-11"
                      type="primary"
                      htmlType="submit"
                    >
                      Tiếp tục{" "}
                    </Button>
                  </Form>
                );
              default:
                return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
}
