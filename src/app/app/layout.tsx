import CategoryMenu from "../component/CategoryMenu";
import Footer from "../component/Footer";
import Header from "../component/Header";
import HeaderMemeber from "../component/HeaderMember";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="top-column column top-musinsa">
      <Header />
      <HeaderMemeber />
      <div className="wrap">
        <CategoryMenu />
        <div className="right_area main">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
