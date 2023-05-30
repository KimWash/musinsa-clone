"use client";

import GalleryOption from "@/app/component/GalleryOption";
import ProductCard, { ProductCardDto } from "@/app/component/ProductCard";
import SearchFilter, { SearchFilterDto } from "@/app/component/SearchFilter";
import { ResponseWrapper } from "@/app/model/dto/ResponseWrapper";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchResultPage() {
  const [products, setProducts] = useState<ProductCardDto[]>();

  const [serachFilter, setSearchFilter] = useState<SearchFilterDto>({});
  function setFilterField(
    fieldName: keyof SearchFilterDto,
    value: SearchFilterDto[keyof SearchFilterDto]
  ) {
    const valueToSet = serachFilter[fieldName] == value ? undefined : value;
    console.log(valueToSet);
    setSearchFilter((prevState) => ({ ...prevState, [fieldName]: valueToSet }));
  }

  const query = useSearchParams();

  useEffect(() => {
    if (query.has("keyword") && query.get("keyword") != '')
      setFilterField("keyword", query.get("keyword") ?? "");
  }, [query]);

  useEffect(() => {
    var payloadString = Object.entries(serachFilter)
      .map((e) => e.join("="))
      .join("&");

    axios.get(`/api/product/filter?${payloadString}`).then((res) => {
      const products = res.data as ResponseWrapper<ProductCardDto[]>;
      setProducts(products.data);
    });
  }, [serachFilter]);

  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="//static.msscdn.net/skin/musinsa/css/search.min.css?202305191611"
      ></link>
      <link
        rel="stylesheet"
        type="text/css"
        href="//static.msscdn.net/ui/build/pc/css/search.css"
      ></link>
      <section className="right_contents n-contents-area">
        <h2 className="n-search-result">
          <em>
            &apos;{query.has("keyword") ? query.get("keyword") : ""}&apos;
          </em>
          에 대한 검색결과
        </h2>
        <SearchFilter
          onChange={setFilterField}
          onStateChange={setSearchFilter}
          filter={serachFilter}
        />
        <nav className="n-search-nav"></nav>
        <div className="n-search-contents">
          <div className="boxed-list-wrapper">
            <GalleryOption
              onChange={setFilterField}
              filter={serachFilter}
              totalElements={products?.length ?? 0}
            />
            <div className="list-box box">
              <div className="snap-article-list boxed-article-list article-list center list goods_small_media8">
                {products &&
                  products.map((item, idx) => (
                    <ProductCard product={item} key={idx} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
