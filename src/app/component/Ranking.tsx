import RankingItemDto from "../model/dto/RankingItemDto";
import RankingItem from "./RankingItem";

export default function Ranking({
  rankingItems,
}: {
  rankingItems: RankingItemDto[];
}) {
  return (
    <div className="right_container main_ranking_area top-right-container">
      <div className="main_category_box" id="ranking_list">
        <h2 className="txt_tit_main">실시간 랭킹</h2>
        <input
          type="hidden"
          name="rank_kind"
          id="rank_kind"
          defaultValue="goods"
        />
        <span className="txt_detail_link">
          <a href="javascript:void(0)">전체</a>
        </span>
        <div className="tool-tabBtn renew-menu-list" id="ranking_tab">
          <a href="javascript:void(0)" className="active">
            상품<span className="new-ranking-date">9분 전</span>
          </a>
        </div>

        <ul className="ranking_category font_basic" id="ranking_goods_pager">
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">🔥NEW</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">전체</a>
          </li>
          <li className="activeSlide">
            <a href="javascript:gtmRankingCategory(this)">상의</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">아우터</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">바지</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">원피스</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">스커트</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">가방</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">스니커즈</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">신발</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">시계</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">모자</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">스포츠</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">양말/레그웨어</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">속옷</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">안경</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">주얼리</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">액세서리</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">뷰티</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">디지털/테크</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">리빙</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">컬처</a>
          </li>
          <li className="">
            <a href="javascript:gtmRankingCategory(this)">반려동물</a>
          </li>
          <li className="category_ranking_last">
            <a href="javascript:gtmRankingCategory(this)">세일</a>
          </li>
        </ul>
        <div className="tool-tabBtn renew-menu-list" id="ranking_tab">
          <a href="javascript:void(0)">
            브랜드 <span className="new-ranking-date">00:11 갱신</span>
          </a>
        </div>
        {/*
<ul class="ranking_category font_basic hidden" id="ranking_brand_pager">
  <li class="activeSlide category_ranking_last"><a href="javascript:void(0)">전체</a></li>
</ul>

<p class="ranking_date"> 갱신</p>
*/}
      </div>

      <div id="ranking_goods">
        <div className="main_ranking_item main_contents_maxwidth" style={{}}>
          <ul className="main_contents_size">
            {rankingItems.map((item, idx) => (
              <RankingItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
