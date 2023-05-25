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
      `SELECT memberId, nickNm, userPoint, userRank FROM TMember WHERE memberId = '${body.memberId}' && userPwd = '${body.password}'`
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
