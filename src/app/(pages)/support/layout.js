import { Inter } from "next/font/google";
import "../../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Suspense } from "react";
import Loading from "../../loading";

export const metadata = {
  title: "Booking App",
  description: "Booking App",
};

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
    </>
  );
}
