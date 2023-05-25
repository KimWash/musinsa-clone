import RankingItemDto from "@/app/model/dto/RankingItemDto";
import { ResponseWrapper } from "@/app/model/dto/ResponseWrapper";
import { Review } from "@/app/model/dto/ReviewItemDto";
import { handleError } from "@/app/util";
const queryPromise = require("../../common/config/db/db");

/**
 * 리뷰 다건 조회. 메인페이지 조회용.
 */
export async function GET() {
  try {
    const result = await queryPromise(
      `	SELECT TOrder.orderId, reviewId, TOrder.productId, productNm, name as sizeNm, TReview.imageUrl, content, rate, regDt, TProduct.imageUrl as productImageUrl, TMember.nickNm FROM TReview 
      INNER JOIN TOrder
      ON TReview.orderId = TOrder.orderId
      INNER JOIN TProduct
      ON TOrder.productId = TProduct.productId
      INNER JOIN TSize
      ON TOrder.sizeId = TSize.sizeId
      INNER JOIN TMember
      ON TMember.memberIdx = TOrder.memberId
       `
    );
    const dto = result.map(
      (item: any, idx: number) =>
        ({
         id: item.reviewId,
         productId: item.productId,
         productName: item.productNm,
         productImageUrl: item.productImageUrl,
         content: item.content,
         imageUrl: item.imageUrl,
         rate: item.rate,
         regDt: item.regDt,
         authorName: item.nickNm
        } as Review)
    );
    return new Response(JSON.stringify(ResponseWrapper.Success(dto)));
  } catch (e) {
    return handleError(e);
  }
}
