import { Review } from "../model/dto/ReviewItemDto";
import ReviewItem from "./ReviewItem";

export default function Reviews({ reviewItems }: { reviewItems: Review[] }) {
  console.log(reviewItems);
  return (
    <div className="right_container main_review_area">
      <div className="main_category_box">
        <h2 className="txt_tit_main">구매 후기</h2>
        <span className="txt_detail_link">
          <a href="/app/reviews/lists">전체</a>
        </span>
      </div>

      <div className="main_review_box main_contents_maxwidth">
        <ul className="main_contents_size main_review" id="style_estimate">
          {reviewItems.slice(0, reviewItems.length / 2).map((item) => (
            <ReviewItem key={item.id} item={item} />
          ))}
        </ul>

        <ul className="main_contents_size main_review" id="beauty_estimate">
          {reviewItems
            .slice(reviewItems.length / 2, reviewItems.length)
            .map((item) => (
              <ReviewItem key={item.id} item={item} />
            ))}
        </ul>
      </div>
    </div>
  );
}
