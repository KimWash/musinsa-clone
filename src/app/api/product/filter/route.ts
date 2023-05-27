const queryPromise = require("../../../common/config/db/db");
import { ProductCardDto } from "@/app/component/ProductCard";
import { ResponseWrapper } from "@/app/model/dto/ResponseWrapper";
import querystring from "querystring";

export async function GET(req: Request) {
  let params = querystring.parse(req.url.split("?")[1]);
  Object.keys(params).forEach((key: string) => {
    if (params[key] == "") params[key] = undefined;
  });
  let orderQuery;
  switch (params.orderBy) {
    case "priceAsc": {
      orderQuery = `ORDER BY IFNULL(discountedPrice, originPrice) ASC`;
      break;
    }
    case "priceDesc": {
      orderQuery = `ORDER BY IFNULL(discountedPrice, originPrice) DESC`;
      break;
    }
    case "discountRate": {
      orderQuery = `ORDER BY discountRate DESC`;
      break;
    }
    case "review": {
      orderQuery = `ORDER BY reviewCount DESC`;
      break;
    }
    case "sales": {
      orderQuery = `ORDER BY orderCount DESC`;
      break;
    }
    default: {
      orderQuery = "";
    }
  }
  const query = `
  
  SELECT * FROM 
(SELECT TProduct.*, 
  TCategory.categoryNm as categoryNm,
   TBrand.brandNm as brandNm,
    AVG(TReview.rate) as reviewRate,
    COUNT(TReview.reviewId) as reviewCount,
    COUNT(TOrder.orderId) as orderCount,
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
  ('${params.keyword ?? "NULL"}' = 'NULL' OR brandNm LIKE '%${
    params.keyword ?? "NULL"
  }%' OR productNm LIKE '%${params.keyword ?? "NULL"}%')
  AND ('${params.category ?? "NULL"}' = 'NULL' OR categoryNm LIKE '%${
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
  AND ('${
    params.onlyDiscounted == "true" ? true : false
  }' = 'false' OR discountedPrice IS NOT NULL) 
  AND ('${
    params.containSoldout == "true" ? true : false
  }' = 'true' OR isSoldOut = 0)
${orderQuery}
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
