"use client";

import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Member } from "../model/dto/Member";
import { ResponseWrapper } from "../model/dto/ResponseWrapper";

export default function Login() {
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      memberId: { value: string };
      password: { value: string };
    };
    const body = {
      memberId: target.memberId.value,
      password: target.password.value,
    };

    try {
      const result = (await axios.post(`/api/user/login`, body))
        .data as ResponseWrapper<Member>;
      alert(`로그인에 성공했습니다. 안녕하세요, ${result.data.nickNm} 님!`);
      localStorage.setItem("user", JSON.stringify(result.data));

      router.replace("/app");
    } catch (e) {
      alert("로그인에 실패했습니다.");
    }
  };

  const router = useRouter();
  return (
    <>
      <link
        rel="stylesheet"
        href="https://static.msscdn.net/ui/build/m/css/common.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://static.msscdn.net/ui/build/m/css/login.css"
      ></link>
      <div className="login" role="main">
        <div id="headerCommonLayout">
          <header
            data-system="CCommonAppbar"
            className="common-layout__sc-1q47zu5-0 bUzayd"
          >
            <div className="common-layout__sc-1q47zu5-1 gKMDnM">
              <div className="common-layout__sc-1q47zu5-2 common-layout__sc-1q47zu5-3 kQxvgb"></div>
              <div className="common-layout__sc-wllrag-0 gZwINX">
                <h2
                  style={{
                    fontSize: 14,
                    textAlign: "center",
                    margin: "40px auto",
                  }}
                >
                  로그인
                </h2>
              </div>
            </div>
          </header>
        </div>
        {/* content */}
        <section className="content content--no-interval">
          <div className="login-member">
            <form
              name="loginform"
              className="login-form"
              onSubmit={handleSubmit}
            >
              <div className="login-member__form">
                <div className="login-input">
                  <div className="login-input__wrap">
                    <input
                      type="text"
                      name="memberId"
                      className="login-input__input"
                      title="아이디 입력"
                      placeholder="아이디"
                    />
                  </div>
                </div>
                <div className="login-input">
                  <div className="login-input__wrap">
                    <input
                      type="password"
                      name="password"
                      className="login-input__input"
                      title="비밀번호 입력"
                      placeholder="비밀번호"
                    />
                  </div>
                </div>
              </div>
              <div className="login-button login-button--static">
                <button
                  type="submit"
                  className="login-button__item login-button__item--black"
                >
                  로그인
                </button>
              </div>
              <div className="login-member__util">
                <div className="login-checkbox login-member__util__login-auto">
                  <input
                    type="checkbox"
                    id="autologin"
                    name="autologin"
                    defaultValue={1}
                    className="blind login-member__util__login-auto__checkbox"
                  />
                  <label
                    htmlFor="autologin"
                    id="labelAutoLogin"
                    className="login-checkbox__label login-member__util__login-auto__label"
                    data-tooltip="login-member__util__login-auto__tooltip"
                  >
                    자동 로그인
                  </label>
                  <div
                    id="tooltipAutoLogin"
                    className="login-member__util__login-auto__tooltip"
                  >
                    개인 정보 보호를 위해 본인 기기에서만 이용해주세요.
                  </div>
                </div>
                <ul className="login-member__util__list">
                  <li className="login-member__util__item">
                    <a
                      id="id-search"
                      href="#"
                      className="gtm-catch-click"
                      data-gtm-cd-23="login_navi"
                      data-gtm-cd-19="button"
                      data-gtm-cd-20="/login"
                      data-gtm-cd-21={1}
                      data-gtm-category="login_navi"
                      data-gtm-action="client.click"
                      data-gtm-label="아이디찾기"
                      data-amp-event-type="click"
                      data-amp-event-name="click_button"
                      data-amp-properties=' { "from": "screen_login", "to": "screen_find_id", "section_name": "login_navi", "section_index": 1, "url": "https://www.musinsa.com/member/find/id?referer=https://www.musinsa.com/app/", "button_name": "forgot_account" } '
                      data-amp-dirty="true"
                    >
                      아이디 찾기
                    </a>
                  </li>
                  <li className="login-member__util__item">
                    <a
                      id="pw-search"
                      href="#"
                      className="gtm-catch-click"
                      data-gtm-cd-23="login_navi"
                      data-gtm-cd-19="button"
                      data-gtm-cd-20="/login"
                      data-gtm-cd-21={1}
                      data-gtm-category="login_navi"
                      data-gtm-action="client.click"
                      data-gtm-label="비밀번호찾기"
                      data-amp-event-type="click"
                      data-amp-event-name="click_button"
                      data-amp-properties=' { "from": "screen_login", "to": "screen_find_password", "section_name": "login_navi", "url": "https://www.musinsa.com/member/find/password?referer=https://www.musinsa.com/app/", "button_name": "forgot_password", "section_index": 1 } '
                      data-amp-dirty="true"
                    >
                      비밀번호 찾기
                    </a>
                  </li>
                </ul>
              </div>
            </form>
            <div
              className="login-button login-button--static login-social"
              id="login-social"
            ></div>
          </div>
          {/* //login-member */}
          <div
            className="login-nonmember buy"
            id="nonMemberOrder"
            data-tab="nonMemberOrder"
            style={{ display: "none" }}
          >
            <div className="login-nonmember">
              <div className="login-nonmember__discount-information">
                <p className="login-nonmember__discount-information__title">
                  잠깐!
                  <br />
                  가입만 해도 더 할인 받을 수 있어요
                </p>
                <p className="login-nonmember__discount-information__coupon">
                  <span className="login-nonmember__discount-information__coupon__text">
                    15%
                  </span>
                </p>
                <p className="login-nonmember__discount-information__text">
                  신규회원 15% 웰컴 쿠폰
                </p>
              </div>
              {/* button */}
            </div>
            {/* //login-nonmember */}
            <div className="login-button login-button--static gtm-catch-click">
              <button
                type="button"
                className="login-button__item login-button__item--black"
                id="btnNonMemberOrder"
                data-gtm-cd-23="non_member"
                data-gtm-cd-19="button"
                data-gtm-cd-20="/login"
                data-gtm-cd-21={2}
                data-gtm-category="non_member"
                data-gtm-action="client.click"
                data-gtm-label="비회원구매하기"
              >
                비회원 구매하기
              </button>
            </div>
            {/* //button */}
          </div>
          {/* //login-nonmember */}
          <div
            className="login-nonmember buy-search"
            id="nonMemberInquiry"
            data-tab="nonMemberOrder"
            style={{ display: "none" }}
          >
            <div className="login-nonmember__form">
              <form
                className="formBox"
                name="orderviewform"
                action="https://www.musinsa.com/app/mypage/guest_order_list_opt"
                method="post"
                target="_self"
              >
                <div className="login-input">
                  <label htmlFor="order_name" className="login-input__label">
                    주문자명
                  </label>
                  <div className="login-input__wrap">
                    <input
                      type="text"
                      id="order_name"
                      name="order_name"
                      className="login-input__input"
                    />
                    <button
                      type="button"
                      className="login-input__button-clear"
                      style={{ display: "none" }}
                      tabIndex={-1}
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="login-input__button-clear__svg"
                      >
                        <title>입력한 내용 삭제</title>
                        <circle cx={10} cy={10} r={10} fill="#B3B3B3" />
                        <path
                          d="M5.52786 5.52742L14.4722 14.4718M14.4722 5.52734L5.52783 14.4717"
                          stroke="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="login-input">
                  <label htmlFor="order_no" className="login-input__label">
                    주문번호
                  </label>
                  <div className="login-input__wrap">
                    <input
                      type="number"
                      id="order_no"
                      name="order_no"
                      className="login-input__input"
                    />
                    <button
                      type="button"
                      className="login-input__button-clear"
                      style={{ display: "none" }}
                      tabIndex={-1}
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="login-input__button-clear__svg"
                      >
                        <title>입력한 내용 삭제</title>
                        <circle cx={10} cy={10} r={10} fill="#B3B3B3" />
                        <path
                          d="M5.52786 5.52742L14.4722 14.4718M14.4722 5.52734L5.52783 14.4717"
                          stroke="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* button */}
                <div className="login-button login-button--static">
                  <button
                    type="submit"
                    className="login-button__item login-button__item--black gtm-catch-click"
                    id="btnNonMemberOrderSelect"
                    data-gtm-cd-23="non_member"
                    data-gtm-cd-19="button"
                    data-gtm-cd-20="/login"
                    data-gtm-cd-21={2}
                    data-gtm-category="non_member"
                    data-gtm-action="client.click"
                    data-gtm-label="비회원주문조회"
                    disabled
                  >
                    주문 내역 조회하기
                  </button>
                </div>
                {/* //button */}
              </form>
            </div>
          </div>
          <div className="login-bottom-text login-bottom-text--login-member">
            <span className="login-bottom-text__text">
              가입만 해도 즉시 <span>15%</span> 할인{" "}
            </span>
            <Link
              href="/signup"
              type="button"
              id="popup-pc-button"
              className="login-bottom-text__link "
            >
              회원가입
            </Link>
          </div>
        </section>
        {/* //content */}
        <section className="login-layer-popup--pc" data-popup="customPopup">
          <button
            className="login-layer-popup--pc__close"
            data-popup-close="customPopup"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 22 22"
              className=""
            >
              <title>레이어 닫기</title>
              <path
                className="svg-color"
                fillRule="evenodd"
                d="M17.646 3.646l.708.708L11.707 11l6.647 6.646-.708.708L11 11.707l-6.646 6.647-.708-.708L10.293 11 3.646 4.354l.708-.708L11 10.293l6.646-6.647z"
              />
            </svg>
          </button>
          <div className="login-popup-join--pc">
            <a
              href="#"
              className="login-button__item login-button__item--black gtm-catch-click"
              id="member-join-pc"
              data-gtm-cd-23="login_navi"
              data-gtm-cd-19="button"
              data-gtm-cd-20="/login"
              data-gtm-cd-21={1}
              data-gtm-category="login_navi"
              data-gtm-action="client.click"
              data-gtm-label="회원가입"
            >
              무신사 아이디로 가입하기{" "}
            </a>
          </div>
        </section>
        <section className="login-bottom-sheet" data-popup="loginPopupJoin">
          <h2 className="blind">회원가입 선택</h2>
          <div className="login-popup-join">
            <a
              href="#"
              className="login-button__item login-button__item--black gtm-catch-click"
              id="member-join-mw"
              data-gtm-cd-23="login_navi"
              data-gtm-cd-19="button"
              data-gtm-cd-20="/login"
              data-gtm-cd-21={1}
              data-gtm-category="login_navi"
              data-gtm-action="client.click"
              data-gtm-label="회원가입"
            >
              무신사 아이디로 가입하기{" "}
            </a>
          </div>
        </section>
        <div className="popup-dim" />
        {/* ANCHOR Common Layout Start */}
        <div id="commonLayoutFooter" />
      </div>
    </>
  );
}
