"use client";
import {
  AppstoreOutlined,
  CalendarOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Divider, Image, Layout, Menu } from "antd";
import React, { Suspense, useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminMap } from "@/config/AdminMap";
import Loading from "../loading";

export default function AdminLayout({ children }) {
  const { Header, Content, Sider } = Layout;
  const path = usePathname();
  const [selected, setSelected] = useState();
  const handleSelect = (e) => {
    setSelected(e.key);
  };

  useEffect(() => {
    setSelected(adminMap[path]);
  }, [path]);
  const items = [
    {
      key: "1",
      icon: <Image src="/svgs/home.svg" alt="#" />,
      label: <Link href={"/admin"}>Trang chủ </Link>,
    },
    {
      key: "2",
      icon: <CalendarOutlined />,
      label: <Link href={"/admin/car"}>Quản lý xe</Link>,
    },
    {
      key: "3",
      label: <Link href={"/admin/trip"}>Quản lý chuyến đi</Link>,
      icon: <AppstoreOutlined />,
    },
    {
      key: "4",
      label: <Link href={"/admin/route"}>Quản lý tuyến đường</Link>,
      icon: <SettingOutlined />,
    },
    {
      key: "5",
      label: <Link href={"/admin/ticket"}>Quản lý vé xe</Link>,
      icon: <SettingOutlined />,
    },
  ];

  return (
    <>
      <Layout
        style={{
          height: "100vh",
        }}
      >
        <Layout className="p-12 gap-8">
          <Sider
            width={200}
            style={{
              background: "white",
            }}
            className="rounded-3xl p-3"
          >
            <div className=" flex mb-3 items-center justify-between">
              <Avatar size={50} />
              <div>
                <p className="font-bold">test</p>
                <p>test</p>
              </div>
              <div>dd</div>
            </div>
            <Menu
              mode="inline"
              selectedKeys={[selected]}
              style={{
                borderRight: 0,
              }}
              items={items}
              onSelect={handleSelect}
            />
            <Divider className="my-3 " />
            <div className="m-1 px-4">
              <div className=" flex active:scale-105 gap-3 cursor-pointer py-3">
                <Image src="/svgs/setting.svg" alt="#" /> Cài đặt
              </div>
              <div className=" flex active:scale-105 gap-3 cursor-pointer py-3">
                <Image src="/svgs/person.svg" alt="#" /> Người dùng
              </div>
              <div className=" flex active:scale-105 gap-3 cursor-pointer py-3">
                <Image src="/svgs/quit.svg" alt="#" /> Đăng xuất
              </div>
            </div>
          </Sider>
          <Layout
            className="overflow-auto overflow-x-hidden"
            style={{
              margin: "24px 50px 0 50px",
            }}
          >
            <Suspense fallback={<Loading />}>
              <Content
                style={{
                  margin: 0,
                  height: "100%",
                }}
              >
                {children}
              </Content>
            </Suspense>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
