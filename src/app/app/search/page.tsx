"use client";

import GalleryOption from "@/app/component/GalleryOption";
import ProductCard, { ProductCardDto } from "@/app/component/ProductCard";
import SearchFilter from "@/app/component/SearchFilter";
import { ResponseWrapper } from "@/app/model/dto/ResponseWrapper";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SearchResultPage() {
  const [products, setProducts] = useState<ProductCardDto[]>();
  useEffect(() => {
    axios.get(`/api/product`).then((res) => {
      const products = res.data as ResponseWrapper<ProductCardDto[]>;
      setProducts(products.data);
    });
  }, []);

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
          <em>&apos;티셔츠&apos;</em>에 대한 검색결과
        </h2>
        <SearchFilter />
        <nav className="n-search-nav"></nav>
        <div className="n-search-contents">
          <div className="boxed-list-wrapper">
            <GalleryOption />
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
