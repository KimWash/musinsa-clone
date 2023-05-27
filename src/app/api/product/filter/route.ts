const queryPromise = require("../../../common/config/db/db");
import { ProductCardDto } from "@/app/component/ProductCard";
import { ResponseWrapper } from "@/app/model/dto/ResponseWrapper";
import { NextRequest } from "next/server";
import querystring from "querystring";

export async function GET(req: Request) {
  const params = querystring.parse(req.url.split("?")[1]);
  Object.keys(params).forEach((key: string) => {
    if (params[key] == "") params[key] = undefined;
  });
  const query = `
  
  SELECT * FROM 
(SELECT TProduct.*, 
  TCategory.categoryNm as categoryNm,
   TBrand.brandNm as brandNm,
    AVG(TReview.rate) as reviewRate,
     IFNULL(100 * (originPrice - discountedPrice) / originPrice, 0) as discountRate
      FROM TProduct
LEFT JOIN TOrder
ON TProduct.productId = TOrder.productId
LEFT JOIN TReview 
ON TReview.orderId = TOrder.orderId
INNER JOIN TCategory
ON TProduct.categoryId = TCategory.categoryId
INNER JOIN TBrand
ON TProduct.brandId = TBrand.brandId
GROUP BY TProduct.productId) as Product

WHERE
  ('${params.category ?? "NULL"}' = 'NULL' OR categoryNm LIKE '%${
    params.category ?? "NULL"
  }%')
	AND ('${params.material ?? "NULL"}' = 'NULL' OR material LIKE '%${
    params.material ?? "NULL"
  }%')
	AND ('${params.fit ?? "NULL"}' = 'NULL' OR fit LIKE '%${params.fit ?? "NULL"}%')
	AND (('${
    params.priceAbove ?? "NULL"
  }' = 'NULL') OR (IFNULL(discountedPrice, originPrice) >= ${
    params.priceAbove ?? "NULL"
  } AND IFNULL(discountedPrice, originPrice) <= ${params.priceBelow ?? "NULL"}))
  `;
  console.log(query);
  const result = await queryPromise(query);
  return new Response(
    JSON.stringify(
      ResponseWrapper.Success(
        result.map(
          (item: any) =>
            ({
              ...item,
              id: item.productId,
              name: item.productNm,
              brandName: item.brandNm,
            } as ProductCardDto)
        )
      )
    )
  );
}
