const queryPromise = require("../../common/config/db/db");
import { ProductCardDto } from "@/app/component/ProductCard";
import { ResponseWrapper } from "@/app/model/dto/ResponseWrapper";
import querystring from "querystring";

export async function GET() {
  try {
    const result = await queryPromise(`
    SELECT TBrand.brandNm, TProduct.productNm, TSize.name as size, TProduct.imageUrl, TOrder.regDt, TOrder.orderId, TOrder.orderPrice, TOrder.qty, TOrder.shippingState, TOrder.shippingInfo
  FROM TOrder
  INNER JOIN TProduct ON TOrder.productId = TProduct.productId
  INNER JOIN TBrand ON TProduct.brandId = TBrand.brandId
  INNER JOIN TSize ON TOrder.sizeId = TSize.sizeId;
    `);
    return new Response(JSON.stringify(ResponseWrapper.Success(result)));
  } catch (e) {
    console.log(e);
    if (e instanceof Error)
      return new Response(JSON.stringify(ResponseWrapper.Error(e)), {
        status: 500,
      });
    else
      return new Response(
        JSON.stringify(ResponseWrapper.Error(Error("UNKNOWN_ERROR"))),
        { status: 500 }
      );
  }
}
