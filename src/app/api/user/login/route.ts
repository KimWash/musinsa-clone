import { ResponseWrapper } from "@/app/model/dto/ResponseWrapper";
const queryPromise = require("../../../common/config/db/db");

export interface LoginDto {
  memberId: string;
  password: string;
}

export async function POST(req: Request) {
  const body: LoginDto = await req.json();
  try {
    if (!body) {
      return new Response(
        JSON.stringify(ResponseWrapper.Error(Error("INVALID_PARAMETER"))),
        {
          status: 400,
        }
      );
    }

    const result = await queryPromise(
      `
       SELECT TMember.memberId, nickNm, userPoint, userRank, TMember.regDt, COUNT(TReview.reviewId) as reviewCount FROM TMember
      LEFT JOIN TOrder ON TMember.memberIdx = TOrder.memberId
      LEFT JOIN TReview ON TReview.orderId = TOrder.orderId
      WHERE TMember.memberId = '${body.memberId}' && userPwd = '${body.password}'
      GROUP BY TMember.memberIdx;
      `
    );
    return new Response(JSON.stringify(ResponseWrapper.Success(result[0])));
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
