import { Metadata } from "next";
import CryptoApp from "./cryptoApp";

export const metadata: Metadata = {
  title: "CRYPTOCURRENT",
};

export default function Page() {
  return (
    <>
      <CryptoApp />
    </>
  );
}
