"use client";

import { useEffect, useState } from "react";
import { formatNumber } from "../util";

export interface SearchFilterDto {
  category?: string;
  material?: string;
  fit?: string;
  priceAbove?: number;
  priceBelow?: number;
}

export default function SearchFilter({
  onSearch,
}: {
  onSearch: (filter: SearchFilterDto) => void;
}) {
  const categories = [
    "상의",
    "스포츠용품",
    "원피스",
    "아우터",
    "속옷",
    "바지",
    "반려동물",
    "스커트",
    "모자",
    "가방",
    "액세서리",
    "주얼리",
  ];

  const materials = [
    "면",
    "폴리에스터",
    "나일론",
    "레이온/인견",
    "스판덱스",
    "아크릴",
    "폴리우레탄",
    "린넨",
    "모달",
    "니트",
    "가죽",
    "울",
    "데님",
    "비스코스",
    "코마사",
  ];

  const fits = ["스키니", "슬림", "레귤러", "루즈", "오버사이즈"];

  const [serachFilter, setSearchFilter] = useState<SearchFilterDto>({});
  function setFilterField(
    fieldName: keyof SearchFilterDto,
    value: SearchFilterDto[keyof SearchFilterDto]
  ) {
    const valueToSet = serachFilter[fieldName] == value ? undefined : value;
    setSearchFilter((prevState) => ({ ...prevState, [fieldName]: valueToSet }));
  }

  useEffect(() => {
    onSearch(serachFilter);
  }, [serachFilter]);

  return (
    <>
      <div className="n-list-filter">
        {/* 카테고리 */}
        <div className="filter-block">
          <button type="button" className="filter-btn" id="categoryBtn">
            카테고리
          </button>
          <div
            className="location"
            id="categoryLocation"
            style={{ display: "none" }}
          />
          <div className="filter-cont form-count" id="categoryFilter">
            {categories.map((category: string, idx: number) => {
              return (
                <div data-catagorydepth="1" key={idx}>
                  <button
                    type="button"
                    className="btn"
                    style={{
                      color: serachFilter.category == category ? "#048eff" : "",
                    }}
                    onClick={() => setFilterField("category", category)}
                  >
                    {category}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* 상품속성 */}
        {/* 카테고리 */}
        <div id="attributeFilter">
          <div className="filter-block">
            <button type="button" className="filter-btn">
              <span className="filter-btn__wrap">주요소재</span>
            </button>
            <div className="filter-cont">
              {materials.map((material: string, idx: number) => {
                return (
                  <div data-catagorydepth="1" key={idx}>
                    <button
                      type="button"
                      className="btn"
                      style={{
                        color:
                          serachFilter.material == material ? "#048eff" : "",
                      }}
                      onClick={() => setFilterField("material", material)}
                    >
                      {material}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="filter-block">
            <div className="filter-btn">
              <span className="filter-btn__wrap">핏</span>
            </div>
            <div className="filter-cont">
              {fits.map((fit: string, idx: number) => {
                return (
                  <div data-catagorydepth="1" key={idx}>
                    <button
                      type="button"
                      className="btn"
                      style={{
                        color: serachFilter.fit == fit ? "#048eff" : "",
                      }}
                      onClick={() => setFilterField("fit", fit)}
                    >
                      {fit}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* 가격 */}
        <div className="filter-block block-search ">
          <em className="filter-btn">가격</em>
          <div className="search price" id="searchPrice">
            <input
              type="text"
              id="minPrice"
              title="최소 가격 검색"
              className="n-input"
              value={formatNumber(serachFilter.priceAbove ?? 0, "")}
              onChange={(e) => setFilterField("priceAbove", e.target.value)}
            />
            <span className="simbol">~</span>
            <input
              type="text"
              id="maxPrice"
              title="최대 가격 검색"
              className="n-input"
              value={formatNumber(serachFilter.priceBelow ?? 0, "")}
              onChange={(e) => setFilterField("priceBelow", e.target.value)}
            />
            <button type="button" className="btn">
              <i className="ic-18-stencil-search icon">검색</i>
            </button>
          </div>
          <div className="filter-cont" id="priceFilter">
            {[
              [null, 5],
              [5, 10],
              [10, 20],
              [20, 30],
              [30, null],
            ].map((range, idx) => (
              <button
                key={idx}
                type="button"
                className="btn"
                style={{
                  color:
                    serachFilter.priceAbove == (range[0] ?? 0) * 10000 &&
                    serachFilter.priceBelow ==
                      (!range[1] ? undefined : range[1] * 10000)
                      ? "#048eff"
                      : "",
                }}
                data-position="price"
                onClick={() =>
                  setSearchFilter((prevState) => ({
                    ...prevState,
                    priceAbove: (range[0] ?? 0) * 10000,
                    priceBelow: !range[1] ? undefined : range[1] * 10000,
                  }))
                }
              >
                {!range[0]
                  ? `~ ${range[1]}만원`
                  : !range[1]
                  ? `${range[0]}만원 ~`
                  : `${range[0]}만원 ~ ${range[1]}만원`}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
