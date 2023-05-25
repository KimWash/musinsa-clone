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
import { Review } from "../model/dto/ReviewItemDto";

export default function Home() {
  const [rankingItems, setRankingItems] = useState<RankingItemDto[]>();
  useEffect(() => {
    axios.get(`/api/product`).then((res) => {
      setRankingItems((res.data as ResponseWrapper<RankingItemDto[]>).data);
    });
  }, []);
  const [reviewItems, setReviewItems] = useState<Review[]>();
  useEffect(() => {
    axios.get(`/api/review`).then((res) => {
      setReviewItems((res.data as ResponseWrapper<Review[]>).data);
    });
  }, []);
  return (
    <div>
      {rankingItems && <Ranking rankingItems={rankingItems} />}
      {reviewItems && <Reviews reviewItems={reviewItems} />}

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
