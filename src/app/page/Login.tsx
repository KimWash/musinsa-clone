export default function Login() {
  return (
    <div className="container login" role="main">
      <div id="headerCommonLayout">
        <header
          data-system="CCommonAppbar"
          className="common-layout__sc-1q47zu5-0 bUzayd"
        >
          <h1>무신사 스토어</h1>
          <div className="common-layout__sc-1q47zu5-1 gKMDnM">
            <div className="common-layout__sc-1q47zu5-2 common-layout__sc-1q47zu5-3 kQxvgb">
              <button
                className="common-layout__sc-1w1f44c-0-button gVGIpR gtm-catch-click"
                data-gtm-cd-23="header"
                data-gtm-cd-19="button"
                data-gtm-cd-21={101}
                data-gtm-category="header"
                data-gtm-action="click"
                data-gtm-label="back"
              >
                <span className="common-layout__sc-1w1f44c-1 dtzdwt">
                  이전 페이지로 이동
                </span>
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                >
                  <path d="M19 5L9 14.9994L19 25" stroke="black" />
                </svg>
              </button>
            </div>
            <div className="common-layout__sc-wllrag-0 gZwINX">
              <h2 className="common-layout__sc-wllrag-1 hljzoW">로그인</h2>
            </div>
            <div className="common-layout__sc-1q47zu5-2 common-layout__sc-1q47zu5-4 kQxvgb gIPPpw" />
          </div>
        </header>
      </div>
      {/* content */}
      <section className="content content--no-interval">
        {/* tab */}
        <nav className="MCommonTabUnderline">
          <a
            href="javascript:void(0);"
            id="login-tab"
            className="MCommonTabUnderline__button MCommonTabUnderline__button--active"
          >
            가입 회원{" "}
          </a>
          <a
            href="javascript:void(0);"
            id="buy-tab"
            className="MCommonTabUnderline__button"
            style={{ display: "none" }}
          >
            비회원 구매하기
          </a>
          <a
            href="javascript:void(0);"
            id="buy-search-tab"
            className="MCommonTabUnderline__button"
            style={{}}
          >
            비회원 주문 조회
          </a>
        </nav>
        {/* //tab */}
        {/* login-member */}
        <div className="login-member">
          <form
            name="loginform"
            className="login-form"
            action="/auth/login"
            method="post"
          >
            <div className="login-member__form">
              <input
                type="hidden"
                id="cipherKey"
                name="cipherKey"
                defaultValue="9f0cb9fc5ed8d615a41ceee267cf207e"
              />
              <input
                type="hidden"
                id="cipherVersion"
                name="cipherVersion"
                defaultValue="V1"
              />
              <input
                type="hidden"
                id="csrfToken"
                name="csrfToken"
                defaultValue="9f0cb9fc5ed8d615a41ceee267cf207e755ea58a"
              />
              <input
                type="hidden"
                id="eventPage"
                name="eventPage"
                defaultValue=""
              />
              <input
                type="hidden"
                id="eventCode"
                name="eventCode"
                defaultValue=""
              />
              <input
                type="hidden"
                id="refererFromLoginPage"
                name="referer"
                defaultValue="https://www.musinsa.com/app/"
              />
              <input
                type="hidden"
                id="encryptMemberId"
                name="encryptMemberId"
              />
              <input
                type="hidden"
                id="encryptPassword"
                name="encryptPassword"
              />
              <input
                type="hidden"
                id="isCheckGoogleRecaptcha"
                name="isCheckGoogleRecaptcha"
                defaultValue="false"
              />
              <div className="login-input">
                <div className="login-input__wrap">
                  <input
                    type="text"
                    name="id"
                    className="login-input__input"
                    title="아이디 입력"
                    placeholder="아이디"
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
                <div className="login-input__wrap">
                  <input
                    type="password"
                    name="pw"
                    className="login-input__input"
                    title="비밀번호 입력"
                    placeholder="비밀번호"
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
                  <button
                    type="button"
                    className="login-input__button-eye"
                    aria-label="비밀번호 보이기"
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
          >
            <a
              href="javascript:void(0)"
              className="login-button__item login-button__item--kakao"
              id="login-with-kakao"
            >
              <svg
                width={30}
                height={30}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="login-button__item__logo"
              >
                <title>kakao 로고</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 7C10.029 7 6 10.129 6 13.989C6 16.389 7.559 18.505 9.932 19.764L8.933 23.431C8.845 23.754 9.213 24.013 9.497 23.826L13.874 20.921C14.243 20.958 14.618 20.978 15 20.978C19.971 20.978 24 17.849 24 13.989C24 10.129 19.971 7 15 7Z"
                  fill="black"
                />
              </svg>
              카카오 로그인
            </a>
            <a
              href="javascript:void(0)"
              id="login-with-apple"
              className="login-button__item login-button__item--apple"
            >
              <svg
                width={29}
                height={30}
                viewBox="0 0 29 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="login-button__item__logo"
              >
                <title>apple 로고</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.6734 6.53179C17.0545 7.30483 16.0153 7.88462 15.1863 7.88462C15.0929 7.88462 14.9995 7.87254 14.9411 7.86046C14.9294 7.81214 14.9061 7.6672 14.9061 7.52225C14.9061 6.53179 15.3848 5.56548 15.9102 4.94946C16.5758 4.14018 17.685 3.53624 18.6074 3.5C18.6308 3.60871 18.6425 3.74158 18.6425 3.87444C18.6425 4.85283 18.2338 5.83121 17.6734 6.53179ZM13.6127 22.1399C13.1966 22.3248 12.8023 22.5 12.2673 22.5C11.123 22.5 10.329 21.4129 9.41827 20.0842C8.35574 18.514 7.4917 16.0861 7.4917 13.7912C7.4917 10.095 9.81526 8.13827 12.1038 8.13827C12.7718 8.13827 13.3821 8.39164 13.9248 8.61693C14.3592 8.79728 14.7503 8.95963 15.0929 8.95963C15.3901 8.95963 15.7604 8.80823 16.1921 8.63177C16.795 8.38531 17.5175 8.08996 18.3272 8.08996C18.841 8.08996 20.7208 8.13827 21.9585 9.97425C21.9514 9.97996 21.9363 9.99029 21.9142 10.0053C21.6097 10.2133 19.9852 11.3227 19.9852 13.5979C19.9852 16.4123 22.3555 17.4148 22.4372 17.439C22.4351 17.4444 22.4303 17.4599 22.4226 17.4845C22.3447 17.7339 21.9733 18.9232 21.1762 20.1325C20.3939 21.2921 19.5649 22.4758 18.3272 22.4758C17.7172 22.4758 17.3285 22.2978 16.9272 22.1139C16.4989 21.9177 16.0562 21.7149 15.3148 21.7149C14.5693 21.7149 14.0774 21.9334 13.6127 22.1399Z"
                  fill="black"
                />
              </svg>
              Apple 로그인
            </a>
          </div>
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
          <button
            type="button"
            id="popup-pc-button"
            className="login-bottom-text__link login-bottom-text__link__layer-popup--pc layer-popup-customPopup"
            data-popup-open="customPopup"
            data-dim="true"
          >
            회원가입
          </button>
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
          <a
            href="#"
            className="login-button__item login-button__item--kakao"
            id="join-with-kakao-pc"
          >
            <svg
              width={30}
              height={30}
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="login-button__item__logo"
            >
              <title>kakao 로고</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 7C10.029 7 6 10.129 6 13.989C6 16.389 7.559 18.505 9.932 19.764L8.933 23.431C8.845 23.754 9.213 24.013 9.497 23.826L13.874 20.921C14.243 20.958 14.618 20.978 15 20.978C19.971 20.978 24 17.849 24 13.989C24 10.129 19.971 7 15 7Z"
                fill="black"
              />
            </svg>{" "}
            카카오로 가입하기
          </a>
          <a
            href="#"
            className="login-button__item login-button__item--apple"
            id="join-with-apple-pc"
          >
            <svg
              width={29}
              height={30}
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="login-button__item__logo"
            >
              <title>kakao 로고</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6734 6.53179C17.0545 7.30483 16.0153 7.88462 15.1863 7.88462C15.0929 7.88462 14.9995 7.87254 14.9411 7.86046C14.9294 7.81214 14.9061 7.6672 14.9061 7.52225C14.9061 6.53179 15.3848 5.56548 15.9102 4.94946C16.5758 4.14018 17.685 3.53624 18.6074 3.5C18.6308 3.60871 18.6425 3.74158 18.6425 3.87444C18.6425 4.85283 18.2338 5.83121 17.6734 6.53179ZM13.6127 22.1399C13.1966 22.3248 12.8023 22.5 12.2673 22.5C11.123 22.5 10.329 21.4129 9.41827 20.0842C8.35574 18.514 7.4917 16.0861 7.4917 13.7912C7.4917 10.095 9.81526 8.13827 12.1038 8.13827C12.7718 8.13827 13.3821 8.39164 13.9248 8.61693C14.3592 8.79728 14.7503 8.95963 15.0929 8.95963C15.3901 8.95963 15.7604 8.80823 16.1921 8.63177C16.795 8.38531 17.5175 8.08996 18.3272 8.08996C18.841 8.08996 20.7208 8.13827 21.9585 9.97425C21.9514 9.97996 21.9363 9.99029 21.9142 10.0053C21.6097 10.2133 19.9852 11.3227 19.9852 13.5979C19.9852 16.4123 22.3555 17.4148 22.4372 17.439C22.4351 17.4444 22.4303 17.4599 22.4226 17.4845C22.3447 17.7339 21.9733 18.9232 21.1762 20.1325C20.3939 21.2921 19.5649 22.4758 18.3272 22.4758C17.7172 22.4758 17.3285 22.2978 16.9272 22.1139C16.4989 21.9177 16.0562 21.7149 15.3148 21.7149C14.5693 21.7149 14.0774 21.9334 13.6127 22.1399Z"
                fill="black"
              />
            </svg>{" "}
            Apple로 계속하기
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
          <a
            href="#"
            className="login-button__item login-button__item--kakao"
            id="join-with-kakao-mw"
          >
            <svg
              width={30}
              height={30}
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="login-button__item__logo"
            >
              <title>kakao 로고</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 7C10.029 7 6 10.129 6 13.989C6 16.389 7.559 18.505 9.932 19.764L8.933 23.431C8.845 23.754 9.213 24.013 9.497 23.826L13.874 20.921C14.243 20.958 14.618 20.978 15 20.978C19.971 20.978 24 17.849 24 13.989C24 10.129 19.971 7 15 7Z"
                fill="black"
              />
            </svg>{" "}
            카카오로 가입하기
          </a>
          <a
            href="#"
            className="login-button__item login-button__item--apple"
            id="join-with-apple-mw"
          >
            <svg
              width={29}
              height={30}
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="login-button__item__logo"
            >
              <title>kakao 로고</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6734 6.53179C17.0545 7.30483 16.0153 7.88462 15.1863 7.88462C15.0929 7.88462 14.9995 7.87254 14.9411 7.86046C14.9294 7.81214 14.9061 7.6672 14.9061 7.52225C14.9061 6.53179 15.3848 5.56548 15.9102 4.94946C16.5758 4.14018 17.685 3.53624 18.6074 3.5C18.6308 3.60871 18.6425 3.74158 18.6425 3.87444C18.6425 4.85283 18.2338 5.83121 17.6734 6.53179ZM13.6127 22.1399C13.1966 22.3248 12.8023 22.5 12.2673 22.5C11.123 22.5 10.329 21.4129 9.41827 20.0842C8.35574 18.514 7.4917 16.0861 7.4917 13.7912C7.4917 10.095 9.81526 8.13827 12.1038 8.13827C12.7718 8.13827 13.3821 8.39164 13.9248 8.61693C14.3592 8.79728 14.7503 8.95963 15.0929 8.95963C15.3901 8.95963 15.7604 8.80823 16.1921 8.63177C16.795 8.38531 17.5175 8.08996 18.3272 8.08996C18.841 8.08996 20.7208 8.13827 21.9585 9.97425C21.9514 9.97996 21.9363 9.99029 21.9142 10.0053C21.6097 10.2133 19.9852 11.3227 19.9852 13.5979C19.9852 16.4123 22.3555 17.4148 22.4372 17.439C22.4351 17.4444 22.4303 17.4599 22.4226 17.4845C22.3447 17.7339 21.9733 18.9232 21.1762 20.1325C20.3939 21.2921 19.5649 22.4758 18.3272 22.4758C17.7172 22.4758 17.3285 22.2978 16.9272 22.1139C16.4989 21.9177 16.0562 21.7149 15.3148 21.7149C14.5693 21.7149 14.0774 21.9334 13.6127 22.1399Z"
                fill="black"
              />
            </svg>{" "}
            Apple로 계속하기
          </a>
        </div>
      </section>
      <div className="popup-dim" />
      {/* ANCHOR Common Layout Start */}
      <div id="commonLayoutFooter" />
    </div>
  );
}
