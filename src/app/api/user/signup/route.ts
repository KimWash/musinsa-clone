import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import { ResponseWrapper } from "@/app/model/dto/ResponseWrapper";
const queryPromise = require("../../../common/config/db/db");

export interface SignUpDto {
  memberId: string;
  nickNm: string;
  password: string;
}



export async function POST(req: Request) {
  // Todo: Validation: Id is not dup
  // Todo: Validation: name fits condition
  // Todo: Create user

  const body: SignUpDto = await req.json();
  try {
    if (!body) {
      return new Response(
        JSON.stringify(ResponseWrapper.Error(Error("INVALID_PARAMETER"))),
        {
          status: 400,
        }
      );
    }

    // 실제로는 못씀. Transaction에 대한 처리가 따로 필요함.
    await queryPromise(
      `INSERT INTO TMember (memberId, nickNm, userPwd, userPoint, userRank) VALUES ('${body.memberId}', '${body.nickNm}', '${body.password}', 0, 0)`
    );

    const result = await queryPromise(
      `SELECT memberId, nickNm, userPoint, userRank FROM TMember WHERE memberId = '${body.memberId}'`
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
