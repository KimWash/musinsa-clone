export default function Header() {
  return (
    <div className="header store_header clearfix">
      <div className="main-wrapper wrapper">
        <h1 className="title">
          <a href="/">MUSINSA</a>
        </h1>
        <div className="search-wrapper ">
          <div className="fl searchInput-box box">
            <form
              id="search_form"
              method="get"
              action="https://search.musinsa.com/search/musinsa/integration"
            >
              <input
                id="search_type"
                type="hidden"
                name="type"
                defaultValue=""
              />
              <label htmlFor="search_query" className="blind">
                통합 검색
              </label>
              <input
                id="search_query"
                type="text"
                name="q"
                maxLength={30}
                autoComplete="off"
                className="search head-search-inp"
              />
              <span
                id="search_button"
                className="search-btn btn ui-head-search-btn"
              >
                <i className="ic-22-stencil-search ic-white">검색</i>
              </span>
              <span className="cam-btn btn ui-head-search-btn">
                <i className="ic-22-stencil-camera">이미지 검색</i>
              </span>
            </form>
          </div>
        </div>
        <div className="gnb wrapper clearfix">
          <ul className="gnb-list clearfix gnb-list-wrap">
            <li className="hovering gnb-campaign-list">
              <a
                href="https://www.musinsa.com/app/campaign/index/togethersale23"
                style={{ color: "rgb(0, 145, 250)" }}
              >
                동행세일
              </a>
            </li>
            <li className="hovering gnb-campaign-list">
              <a
                href="https://www.musinsa.com/app/plan/views/35646"
                style={{ color: "rgb(0, 212, 123)" }}
              >
                PLUS배송
              </a>
            </li>
            <li className="hovering">
              <a href="https://www.musinsa.com/ranking/best">랭킹</a>
            </li>
            <li className="hovering">
              <a href="https://www.musinsa.com/app/styles/lists">코디</a>
            </li>
            <li className="hovering">
              <a href="https://www.musinsa.com/app/showcase/lists">스페셜</a>
            </li>
            <li className="hovering">
              <a href="https://www.musinsa.com/mz/news">매거진</a>
            </li>
            <li className="hovering">
              <a href="https://www.musinsa.com/mz/tv">TV</a>
            </li>
            <li className="hovering">
              <a href="https://www.musinsa.com/app/raffle/lists">이벤트</a>
            </li>
            <li className="hovering">
              <a href="https://www.musinsa.com/brands">브랜드</a>
            </li>
          </ul>
        </div>
        <div
          className="store-searchWord-box searchWord-box box clearfix ui-search-recommend-area ui-search-recommend-area-result search_layer"
          style={{ display: "none" }}
        >
          <div className="left-column column">
            <dl className="recommendSearchWord-list list store_list">
              <dt className="title-listItem listItem clearfix">
                <span className="title">추천 검색어</span>
              </dt>
            </dl>
            <dl className="recommendBrand-list list store_list">
              <dt className="title-listItem listItem clearfix">
                <span className="title">추천 브랜드</span>
              </dt>
            </dl>
            <dl className="useCategory-list list store_list">
              <dt className="title-listItem listItem clearfix">
                <span className="title">품목 카테고리</span>
              </dt>
            </dl>
          </div>
          <div className="right-column column">
            <dl className="recommendProduct-list list store_list">
              <dt className="title-listItem listItem clearfix">
                <span className="title">추천 상품</span>
                <span className="closeBtn btn">닫기</span>
              </dt>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
