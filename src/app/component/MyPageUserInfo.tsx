"use client";

import { useEffect, useState } from "react";
import style from "../mypage/MyPage.module.css";
import { Member } from "../model/dto/Member";
import { formatNumber } from "../util";
import Link from "next/link";

export default function MyPageUserInfo() {
  const [user, setUser] = useState<Member>();
  useEffect(() => {
    const userJson = localStorage.getItem("user");
    if (userJson) setUser(JSON.parse(userJson));
  }, []);
  return (
    <div className={style.commonMyPage}>
      <section className="common-mypage__sc-5trtbg-0 kXGNQj">
        <h1 className={style.title}>
          <Link href="/mypage">My Page</Link>
        </h1>
        <div style={{ textAlign: "right" }}>
          <a href="/login" className={style.logoutText}>
            로그아웃
          </a>
        </div>
        <div style={{ display: "inline-block" }}>
          <div className={style.profile} />
          <div className={style.userInfoContainer}>
            <div className="common-mypage__sc-1loaj4c-1 ebnvat">
              <strong className={style.nickNm}>{user?.nickNm}</strong>
            </div>
            <div className="common-mypage__sc-1loaj4c-2 xMHPc">
              <em className={style.level}>LV.{user?.userRank}</em>
              <span className={style.regDt}>
                가입일 : {new Date(user?.regDt ?? new Date()).toDateString()}
              </span>
            </div>
          </div>
          <div className={style.userStatContainer}>
            <a
              href="https://www.musinsa.com/billing/point"
              className={style.userStatItem}
            >
              <svg
                width={38}
                height={38}
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6667 15.0667L16.4667 23.8555L19.0001 17.2639L21.5334 23.8555L25.3334 15.0667"
                  stroke="white"
                />
                <path d="M11.3999 18.8333H26.5999" stroke="white" />
                <path
                  d="M5.06665 19.9843C5.65768 27.0734 11.6594 32.6444 18.9761 32.6444C26.6845 32.6444 32.9333 26.461 32.9333 18.8333C32.9333 11.2057 26.6845 5.02222 18.9761 5.02222C11.6594 5.02222 5.65768 10.5932 5.06665 17.6824"
                  stroke="white"
                />
              </svg>
              <em>적립금 &gt;</em>
              <strong>{formatNumber(user?.userPoint ?? 0, "")}</strong>
            </a>

            <a
              href="https://www.musinsa.com/goods/mypage/review/write-review"
              className={style.userStatItem}
            >
              <svg
                width={38}
                height={38}
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.6666 31.3889H17.7333M6.33325 24.4617L24.6781 6.27777L31.6666 13.205L13.3218 31.3889H6.33325V24.4617Z"
                  stroke="white"
                />
              </svg>
              <em>후기작성 &gt;</em>
              <strong>{user?.reviewCount ?? 0}</strong>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
