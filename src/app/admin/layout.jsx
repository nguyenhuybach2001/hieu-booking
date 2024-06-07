"use client";
import {
  AppstoreOutlined,
  CalendarOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Divider, Layout, Menu } from "antd";
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
      icon: <img src="/svgs/home.svg" alt="#" />,
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
        <Header
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="demo-logo" />
        </Header>
        <Layout className="px-12 pt-3 pb-16 gap-8">
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
              <p className=" flex active:scale-105 gap-3 cursor-pointer py-3">
                <img src="/svgs/setting.svg" /> Cài đặt
              </p>
              <p className=" flex active:scale-105 gap-3 cursor-pointer py-3">
                <img src="/svgs/person.svg" /> Người dùng
              </p>
              <p className=" flex active:scale-105 gap-3 cursor-pointer py-3">
                <img src="/svgs/quit.svg" /> Đăng xuất
              </p>
            </div>
          </Sider>
          <Layout
            className="overflow-auto"
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
