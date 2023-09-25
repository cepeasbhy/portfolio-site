import { Metadata } from "next";
import "./crypto.css";
import Header from "@/app/components/cryptocurrent/header";
import CryptoApp from "./cryptoApp";

export const metadata: Metadata = {
  title: "CRYPTOCURRENT",
};

export default function Page() {
  return (
    <>
      <Header />
      <div id="main-content">
        <CryptoApp />
      </div>
    </>
  );
}
