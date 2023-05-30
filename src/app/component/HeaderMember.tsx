"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeaderMemeber() {
  const user = JSON.parse(localStorage.getItem("user") ?? "null");
  const router = useRouter();
  return (
    <div className="header-member">
      {user ? (
        `LV.${user.userRank} ${user.nickNm}`
      ) : (
        <Link href="/login">
          <button
            type="button"
            aria-label="로그인 페이지로 이동"
            data-for="loginBox"
            className="header-member__login"
          >
            로그인
          </button>
        </Link>
      )}
      <div className="header-member__block">
        <button
          type="button"
          aria-label="바로접속 고객혜택 보기"
          data-member="direct"
          className="header-member__link header-member__link--direct-on"
        >
          바로접속 ON
        </button>
        <div data-layer="direct" className="layer layer-header-member">
          <div className="header-member-direct">
            <dl className="header-member-direct__information">
              <dt>
                <em className="header-member-direct__state-on">바로접속 ON</em>
                고객혜택
              </dt>
              <dd>회원 등급별 추가 할인 및 적립 가능</dd>
              <dd>적립금 선할인 가능</dd>
              <dd>보유 적립금 사용 가능</dd>
            </dl>
            <button type="button" className="header-member-direct__button">
              자세히 보기
            </button>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={13}
            viewBox="0 0 24 13"
            className="layer-header-member__arrow"
          >
            <title />
            <g fill="none" fillRule="evenodd">
              <path
                fill="#DDD"
                d="M11.179 0L22.359 13 0 13"
                transform="translate(-134 -696) translate(40 696) translate(94.82)"
              />
              <path
                fill="#FFF"
                d="M11.181 1.534L1.337 13 21.03 13z"
                transform="translate(-134 -696) translate(40 696) translate(94.82)"
              />
            </g>
          </svg>
        </div>
      </div>

      <div className="header-member__block">
        <Link
          href="/mypage"
          aria-label="마이페이지로 이동"
          className="header-member__link"
        >
          마이페이지
        </Link>
      </div>
  
      <div className="header-member__block">
        <p
          onClick={() => {
            if (user) router.push("/mypage");
            else router.push("/login");
          }}
          className="header-member__link"
        >
          주문배송조회
        </p>
      </div>
      {user ? (
        <div className="header-member__block">
          <p
            onClick={() => {
              localStorage.clear();
              router.push("/login");
            }}
            className="header-member__link"
          >
            로그아웃
          </p>
        </div>
      ) : (
        ""
      )}

      <div className="header-member__block">
        <a
          href="https://www.musinsa.com/member/onboarding/firstbuy"
          aria-label="이벤트 페이지로 이동"
          className="header-member__link header-member__link--event"
        >
          회원 가입 EVENT. 신규 가입 후 바로 사용 가능한 15% 할인 쿠폰 / 무신사
          스탠다드 990원 구매 기회
        </a>
      </div>
    </div>
  );
}
