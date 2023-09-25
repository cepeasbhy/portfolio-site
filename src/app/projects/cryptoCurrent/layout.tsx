import Header from "@/app/_components/cryptocurrent/header";
import "@/app/_styles/crypto.css";

export default function CryptoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div id="main-content">{children}</div>
    </>
  );
}
