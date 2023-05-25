import RankingItemDto from "@/app/model/dto/RankingItemDto";
import { ResponseWrapper } from "@/app/model/dto/ResponseWrapper";
import { handleError } from "@/app/util";
const queryPromise = require("../../common/config/db/db");

/**
 * 상품 다건 조회. 랭킹 조회 등에 사용된다.
 */
export async function GET() {
  try {
    const result = await queryPromise(
      `	SELECT 
      TProduct.*, TBrand.brandNm, SUM(TOrder.qty) as prod_rank
     FROM TProduct 
     INNER JOIN TBrand 
     ON TBrand.brandId = TProduct.brandId
     LEFT JOIN TOrder
     ON TProduct.productId = TOrder.productId
      GROUP BY TProduct.productId
      order by prod_rank desc;
       `
    );
    const dto = result.map(
      (item: any, idx: number) =>
        ({
          id: item.productId,
          name: item.productNm,
          imageUrl: item.imageUrl,
          brandName: item.brandNm,
          originPrice: item.originPrice,
          discountedPrice: item.discountedPrice,
          rank: idx+1,
        } as RankingItemDto)
    );
    return new Response(JSON.stringify(ResponseWrapper.Success(dto)));
  } catch (e) {
    return handleError(e);
  }
}
