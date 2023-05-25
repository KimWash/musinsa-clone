"use client";

import { useEffect, useState } from "react";
import CategoryMenu from "../component/CategoryMenu";
import Footer from "../component/Footer";
import Ranking from "../component/Ranking";
import RankingItem from "../component/RankingItem";
import ReviewItem from "../component/ReviewItem";
import Reviews from "../component/Reviews";
import axios from "axios";
import { ResponseWrapper } from "../model/dto/ResponseWrapper";
import RankingItemDto from "../model/dto/RankingItemDto";

export default function Home() {
  const [rankingItems, setRankingItems] = useState<RankingItemDto[]>();
  useEffect(() => {
    axios.get(`/api/product`).then((res) => {
      setRankingItems((res.data as ResponseWrapper<RankingItemDto[]>).data);
    });
  }, []);

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
    <div>
      {rankingItems && <Ranking rankingItems={rankingItems} />}
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
    </div>
  );
}
