import Product from "../model/Product";
import { formatNumber } from "../util";

export interface ProductCardDto extends Product {
  reviewRate: number;
  discountRate?: number;
}

export default function ProductCard({ product }: { product: ProductCardDto }) {
  return (
    <li className="li_box">
      {product.discountRate && (
        <div className="icon_new">SALE {product.discountRate}%</div>
      )}

      <div className="li_inner">
        <div className="list_img">
          <a
            className="img-block"
            href="https://www.musinsa.com/app/goods/1848166"
            title="에센셜 쿨 코튼 2-PACK 티셔츠 블랙"
          >
            <img
              className="lazyload lazy"
              src={product.imageUrl}
              alt={product.name}
              style={{ display: "block" }}
            />
          </a>
        </div>
        <div className="article_info">
          <p className="item_title">{product.brandName}</p>
          <p className="list_info">{product.name}</p>
          <p className="price">
            {product.discountedPrice ? (
              <del>{formatNumber(product.originPrice, "원")}</del>
            ) : null}

            {formatNumber(product.discountedPrice ?? product.originPrice, "원")}
          </p>
          <p className="point">
            <span className="img-score">
              <span className="bar" style={{ width: "97%" }} />
            </span>
            <span className="count">{product.reviewRate}</span>
          </p>
        </div>
      </div>
    </li>
  );
}
