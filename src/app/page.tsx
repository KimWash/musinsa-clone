import Image from "next/image";
import Header from "./component/Header";
import HeaderMemeber from "./component/HeaderMember";
import Inner from "./component/Home";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="top-column column top-musinsa">
      <Header />
      <HeaderMemeber />
      <div className="wrap">
        <Inner />
      </div>
    </div>
  );
}
