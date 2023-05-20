import Image from "next/image";
import { collapseText, formatNumber } from "../util";
import RankingItemDto from "../model/dto/RankingItemDto";

export default function RankingItem({ item }: { item: RankingItemDto }) {
  return (
    <li className="ranking_item hover_box">
      <p className="n-label label-default txt_num_rank">{item.rank}위</p>
      {item.discountedPrice ? (
        <span className="mu-icon mu-icon-coupon main_top_coupon" />
      ) : null}
      <div className="ranking_item_img">
        <a href={`/app/goods/${item.id}?loc=goods_rank`}>
          <img src={item.imageUrl} alt={item.name} />
          <span className="vertical_standard" />
        </a>
      </div>
      <div className="ranking_item_intro">
        <p className="txt_tit_brand">{item.brandName}</p>
        <p>
          <a href={`/app/goods/${item.id}?loc=goods_rank`}>
            {collapseText(item.name, 17)}
          </a>
        </p>
        <p className="box_price">
          {item.discountedPrice ? (
            <span className="txt_origin_price">
              {formatNumber(item.originPrice, "원")}
            </span>
          ) : null}
          {
            <span className="txt_price">
              {formatNumber(item.discountedPrice ?? item.originPrice, "원")}
            </span>
          }
        </p>
      </div>
    </li>
  );
}
