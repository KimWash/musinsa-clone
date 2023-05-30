import Header from "../component/Header";
import MyPageOrderInfo from "../component/MyPageOrderInfo";
import MyPageUserInfo from "../component/MyPageUserInfo";
import style from "./MyPage.module.css";
export default function MyPage() {

  
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="//static.msscdn.net/skin/musinsa/css/layout.min.css?202201131000"
      />
      <link
        rel="stylesheet"
        href="//image.msscdn.net/ui/musinsa/resources/common/css/icon.min.css?202101051200"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="//static.msscdn.net/skin/musinsa/css/guide.min.css?202304261614"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="//static.msscdn.net/skin/musinsa/css/style.min.css?202303211032"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="//static.msscdn.net/skin/musinsa/css/sub.css?202305041110"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="//static.msscdn.net/skin/musinsa/css/media_query.css?202010301640"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="//static.msscdn.net/skin/musinsa/css/new.css?202112010912"
      />
      <link
        href="https://static.msscdn.net/ui/build/pc/css/mypage.css?202110120934"
        rel="stylesheet"
        type="text/css"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="//static.msscdn.net/skin/musinsa/css/order.min.css?202305031050"
      ></link>
      <div className=" mypage musinsa">
        {/* 상단 콘텐츠 영역 */}
        <div id="default_top">
          <div className="top-column column top-musinsa">
            <Header />
          </div>
        </div>
        <main className={style.content}>
          {/* ANCHOR Common Mypage */}
          <MyPageUserInfo />
          {/* contents */}
          <MyPageOrderInfo />
          {/* //contents */}
        </main>
      </div>
    </>
  );
}
