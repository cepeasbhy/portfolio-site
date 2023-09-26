import Header from "@/app/_components/cryptocurrent/header";
import SearchBar from "@/app/_components/cryptocurrent/searchBar";
import "@/app/_styles/crypto.css";

export default function CryptoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div id="main-content">
        <section id="search">
          <SearchBar />
        </section>
        {children}
      </div>
    </>
  );
}
