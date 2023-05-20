export default function HeaderMemeber() {
  return (
    <div className="header-member">
      <button
        type="button"
        aria-label="로그인 페이지로 이동"
        data-for="loginBox"
        className="header-member__login"
      >
        로그인
      </button>
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
                <em className="header-member-direct__state-on">
                  바로접속 ON
                </em>
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
        <a
          href="https://www.musinsa.com/app/mypage"
          aria-label="마이페이지로 이동"
          className="header-member__link"
        >
          마이페이지
        </a>
      </div>
      <div className="header-member__block">
        <a
          href="https://www.musinsa.com/app/mypage/viewed_goods"
          aria-label="최근본상품 페이지로 이동"
          className="header-member__link"
        >
          최근 본 상품
        </a>
      </div>
      <div className="header-member__block">
        <a
          href="https://www.musinsa.com/app/mypage/favorite_goods"
          aria-label="좋아요 페이지로 이동"
          className="header-member__link header-member__link--like"
        >
          좋아요
        </a>
      </div>
      <div className="header-member__block">
        <a
          href="https://www.musinsa.com/app/cart"
          aria-label="장바구니 페이지로 이동"
          className="header-member__link"
        >
          장바구니
        </a>
      </div>
      <div className="header-member__block">
        <a
          href="https://www.musinsa.com/app/mypage/order_list_opt"
          aria-label="주문배송조회 페이지로 이동"
          className="header-member__link"
        >
          주문배송조회
        </a>
      </div>
      <div className="header-member__block">
        <a
          href="https://www.musinsa.com/app/cs"
          aria-label="고객센터 페이지로 이동"
          className="header-member__link"
        >
          고객센터
        </a>
      </div>

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
