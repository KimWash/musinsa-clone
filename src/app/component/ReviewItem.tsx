import { Review } from "../model/dto/ReviewItemDto";
import { collapseText, getTimeElapsedText } from "../util";

export default function ReviewItem({ item }: { item: Review }) {
  return (
    <li className="main_review_list hover_box">
      <div className="main_review_img">
        <a href={`/app/goods/${item.productId}`}>
          <img src={item.productImageUrl} title="" alt={item.productName} />
          <span className="vertical_standard" />
        </a>
      </div>
      <div className="main_review_intro">
        <p className="txt_tit">{item.productName}</p>
        <span className="txt_option">{item.productSize} 구매</span>
        <div className="main_review_txt">
          <a href={`/app/reviews/views/${item.id}`}>
            {collapseText(item.content, 30)}
            <div className="main_review_photo">
              <img src={item.imageUrl} alt="" />
            </div>
          </a>
        </div>
        <p className="main_review_data">
          <span className="img-score score_50" />
          <span>{getTimeElapsedText(item.regDt)}</span>
          <span>{item.authorName}</span>
        </p>
      </div>
    </li>
  );
}
