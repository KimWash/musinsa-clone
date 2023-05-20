import CategoryMenu from "./CategoryMenu";
import Footer from "./Footer";
import Ranking from "./Ranking";
import RankingItem from "./RankingItem";
import ReviewItem from "./ReviewItem";
import Reviews from "./Reviews";

export default function Home() {
  const rankingItems = [
    {
      id: 3242778,
      rank: 1,
      imageUrl:
        "//image.msscdn.net/images/goods_img/20230418/3242778/3242778_16844093776312_320.jpg",
      name: "스파오(SPAO) [데일리지] 쿨 경량 원턱 와이드 진_SPTJD37C52",
      brandName: "스파오",
      originPrice: 49900,
      discountedPrice: 44910,
    },
    {
      id: 2,
      name: "몽클레어(MONCLER) 남성 마야프 숏 다운 재킷 - 블랙 / H20911A002705968E999",
      imageUrl:
        "//image.msscdn.net/images/goods_img/20230328/3184338/3184338_16825813011127_320.jpg",
      brandName: "몽클레어",
      originPrice: 2850000,
      discountedPrice: 2322000,
      rank: 2,
    },
    {
      id: 3,
      name: "아디다스(ADIDAS) BB 트랙탑 - 네이비 / IK9149",
      imageUrl:
        "//image.msscdn.net/images/goods_img/20230425/3260636/3260636_16829853147881_320.jpg",
      brandName: "아디다스",
      originPrice: 139000,
      discountedPrice: null,
      rank: 3,
    },
    {
      id: 4,
      name: "아디다스(ADIDAS) BB 트랙 팬츠 - 옐로우 / IK9155",
      imageUrl:
        "//image.msscdn.net/images/goods_img/20230426/3262226/3262226_16830139024966_320.jpg",
      brandName: "아디다스",
      originPrice: 109000,
      discountedPrice: null,
      rank: 4,
    },
    {
      id: 5,
      name: "생로랑(SAINT LAURENT) 여성 선셋 체인 숄더백 - 블랙 / 533026D422W1000",
      imageUrl:
        "//image.msscdn.net/images/goods_img/20221011/2849898/2849898_1_320.jpg",
      brandName: "생로랑",
      originPrice: 2790000,
      discountedPrice: 1791000,
      rank: 5,
    },
    {
      id: 6,
      name: "르메르(LEMAIRE) 공용 미디움 크루아상 크로스백 - 다크 초콜릿 / BG0001LL0018BR490",
      imageUrl:
        "//image.msscdn.net/images/goods_img/20230327/3181583/3181583_16830046892716_320.jpg",
      brandName: "르메르",
      originPrice: 2268000,
      discountedPrice: 1410000,
      rank: 6,
    },
    {
      id: 7,
      name: "폴로 랄프 로렌(POLO RALPH LAUREN) 숏슬리브 시어서커 셔츠 - 화이트",
      imageUrl:
        "//image.msscdn.net/images/goods_img/20230502/3271381/3271381_16843658579909_320.jpg",
      brandName: "폴로 랄프 로렌",
      originPrice: 189000,
      discountedPrice: null,
      rank: 7,
    },
  ];

  const reviewItems = [
    {
      id: 0, // Assign a unique identifier to each object if necessary
      productId: 3002286,
      productName: "러브이즈트루 SU HEART LOGO TEE(BLACK)",
      productSize: "FREE 구매",
      productImageUrl:
        "//image.msscdn.net/images/goods_img/20221230/3002286/3002286_16723747912104_50.jpg",
      content:
        "이뻐야 편하고 그리고 짧지도 길지도 않아서 좀 애매한 거 같긴한데 전 좋았어요",
      imageUrl:
        "//image.msscdn.net/data/estimate/3002286_0/gallery_6468aa148103d.jpg.list",
      rate: 50,
      regDt: new Date("2023-05-20 20:08:06"),
      authorName: "성재민씨",
    },
    {
      id: 1, // Assign a unique identifier to each object if necessary
      productId: 2118822,
      productName: "카비시 SELLER LOGO LS TEE WHITE(CV2BFUT550A)",
      productSize: "화이트^L 구매",
      productImageUrl:
        "//image.msscdn.net/images/goods_img/20210909/2118822/2118822_3_50.jpg",
      content:
        "무난무난하게 입기 예뻐요! 로고 디자인도 예쁘고 후루룩ㄱ 걸쳐도 좋은 것 같아요",
      imageUrl:
        "//image.msscdn.net/data/estimate/2118822_0/gallery_6468aa0113b76.jpg.list",
      rate: 50,
      regDt: new Date("2023-05-20 20:07:46"),
      authorName: "gcode",
    },
  ];
  const reviewItems2 = [
    {
      id: 2, // Assign a unique identifier to each object if necessary
      productId: 2657438,
      productName: "파티온 노스카나인 트러블 세럼 30ml",
      productSize: "없음",
      productImageUrl:
        "//image.msscdn.net/images/goods_img/20220711/2657438/2657438_1_50.jpg",
      content: "재구매해서 잘쓰고 있고 성능이 좋은거같아요 굿",
      imageUrl:
        "//image.msscdn.net/data/estimate/2657438_0/gallery_64671e1e46a93.jpg.list",
      rate: 50,
      regDt: new Date("2023-05-19 15:58:39"),
      authorName: "오버스척",
    },
    {
      id: 3, // Assign a unique identifier to each object if necessary
      productId: 1258777,
      productName: "그라펜 [짱구대디PICK] 립 센스 3.9g (발색립밤)",
      productSize: "없음",
      productImageUrl:
        "//image.msscdn.net/images/goods_img/20191230/1258777/1258777_16811092098343_100.png",
      content: "좋고 발색이 약간 약한거같이 느끼기도 하요 나쁘지않아요",
      imageUrl:
        "//image.msscdn.net/data/estimate/1258777_0/gallery_64671da166401.jpg.list",
      rate: 50,
      regDt: new Date("2023-05-19 15:56:34"),
      authorName: "오버스척",
    },
    {
      id: 4, // Assign a unique identifier to each object if necessary
      productId: 2033000,
      productName: "포맨트 시그니처 퍼퓸 코튼브리즈 50ml",
      productSize: "없음",
      productImageUrl:
        "//image.msscdn.net/images/goods_img/20210719/2033000/2033000_6_50.jpg",
      content:
        "바람이 선선하게 부는 날에 시원하게 입고 향수까지 뿌리면 진짜 청량감이 느껴져서 너무 좋아요.",
      imageUrl:
        "//image.msscdn.net/data/estimate/2033000_0/gallery_64671a24e636c.jpg.list",
      rate: 50,
      regDt: new Date("2023-05-19 15:41:42"),
      authorName: "뉴비_840f75bc5073",
    },
  ];
  return (
    <>
      <CategoryMenu />
      <div className="right_area main">
        <Ranking rankingItems={rankingItems} />
        <Reviews reviewItems={reviewItems} reviewItems2={reviewItems2} />

        <div className="right_container new-notice-area">
          <div className="main_category_box">
            <h2 className="txt_tit_main">공지사항</h2>
            <span className="txt_detail_link">
              <a href="/app/cs/notice_list">전체</a>
            </span>
          </div>
          <div className="new-notice">
            <ul id="noticeSlide">
              <li>
                <a href="/app/cs/notice_view/9694">
                  <span className="main_notice_txt ellipsis">
                    개인정보처리방침 개정 내용 사전 안내 (03/28~)
                  </span>
                  <span className="notice-date">23.03.21</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
