"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { ResponseWrapper } from "../model/dto/ResponseWrapper";
import { Member } from "../model/dto/Member";

export default function Signup() {
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      memberId: { value: string };
      password: { value: string };
      nickNm: { value: string };
    };
    const body = {
      memberId: target.memberId.value,
      password: target.password.value,
      nickNm: target.nickNm.value,
    };

    try {
      const result = (await axios.post(`/api/user/signup`, body)).data as ResponseWrapper<Member>;
      alert("회원가입이 완료됐습니다.");
      router.replace("/app");
    } catch (e) {
      alert("회원가입에 실패했습니다.");
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
                  회원가입
                </h2>
              </div>
            </div>
          </header>
        </div>
        {/* content */}
        <section className="content content--top">
          <div id="joinContainer" className="login-join-membership">
            {/**/}
            <div className="login-join-membership__form">
              <form onSubmit={handleSubmit}>
                <div className="login-input">
                  <label
                    htmlFor="loginJoinMembershipId"
                    className="login-input__label"
                  >
                    아이디
                    <span className="login-input__label__essential">
                      필수 입력
                    </span>
                  </label>
                  <div className="login-input__wrap">
                    <input
                      type="text"
                      name="memberId"
                      id="loginJoinMembershipId"
                      placeholder="영문, 숫자 5-11자"
                      maxLength={11}
                      className="login-input__input"
                    />
                    <button
                      type="button"
                      className="login-input__button-clear"
                      style={{ display: "none" }}
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
                  <p
                    className="login-input__validation"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="login-input">
                  <label
                    htmlFor="loginJoinMembershipPassword1"
                    className="login-input__label"
                  >
                    비밀번호
                    <span className="login-input__label__essential">
                      필수 입력
                    </span>
                  </label>
                  <div className="login-input__wrap">
                    <input
                      name="password"
                      id="loginJoinMembershipPassword1"
                      placeholder="숫자, 영문, 특수문자 조합 최소 8자"
                      maxLength={30}
                      type="password"
                      className="login-input__input"
                    />
                    <button
                      type="button"
                      className="login-input__button-clear"
                      style={{ display: "none" }}
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
                  <p className="login-input__validation" />
                </div>
                <div className="login-input">
                  <div className="login-input__wrap">
                    <input
                      name="passwordCheck"
                      id="loginJoinMembershipPassword2"
                      title="비밀번호 재입력"
                      placeholder="비밀번호 재입력"
                      maxLength={30}
                      type="password"
                      className="login-input__input"
                    />
                    <button
                      type="button"
                      className="login-input__button-clear"
                      style={{ display: "none" }}
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
                  <p className="login-input__validation" />
                </div>
                <div className="login-input">
                  <label
                    htmlFor="loginJoinMembershipPassword1"
                    className="login-input__label"
                  >
                    닉네임
                    <span className="login-input__label__essential">
                      필수 입력
                    </span>
                  </label>
                  <div className="login-input__wrap">
                    <input
                      name="nickNm"
                      id="loginJoinMembershipPassword1"
                      placeholder="최대 20자"
                      maxLength={20}
                      type="text"
                      className="login-input__input"
                    />
                  </div>
                  <p className="login-input__validation" />
                </div>
                <button
                  type="submit"
                  className="login-button__item login-button__item--blue mt-4"
                >
                  가입하기
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
