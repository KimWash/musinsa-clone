"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <div className="header store_header clearfix">
      <div className="main-wrapper wrapper">
        <h1 className="title" >
          <p onClick={() => router.replace("/app")}>MUSINSA</p>
        </h1>
        <div className="search-wrapper ">
          <div className="fl searchInput-box box">
            <form id="search_form" method="get" action="/app/search">
              <label htmlFor="search_query" className="blind">
                통합 검색
              </label>
              <input
                id="search_query"
                type="text"
                name="keyword"
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
