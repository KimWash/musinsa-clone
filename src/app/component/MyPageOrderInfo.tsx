"use client";

import { useEffect, useState } from "react";
import style from "../mypage/MyPage.module.css";
import Order from "../model/dto/Order";
import OrderInfoRow from "./OrderInfoRow";
import axios from "axios";
import { ResponseWrapper } from "../model/dto/ResponseWrapper";

export default function MyPageOrderInfo() {
  const [orders, setOrders] = useState<Order[]>();
  useEffect(() => {
    axios.get(`/api/order`).then((res) => {
      const result = res.data as ResponseWrapper<Order[]>;
      setOrders(result.data);
    });
  }, []);

  return (
    <section className={style.myPage}>
      <h1 className="hidden">마이페이지</h1>
      {/* 주문내역 조회 */}
      <section className="n-section-block first list-block">
        <header className="n-section-title">
          <h2 className="tit">주문내역 조회</h2>

          <a href="/app/mypage/order_list_opt" className="n-link">
            전체
          </a>
        </header>
        <table className="n-table table-col">
          <colgroup>
            <col style={{ width: "*" }} />
            <col style={{ width: "14.2%" }} />
            <col style={{ width: "14.2%" }} />
            <col style={{ width: "14.2%" }} />
            <col style={{ width: "10.2%" }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">상품정보</th>
              <th scope="col">주문일자</th>
              <th scope="col">주문번호</th>
              <th scope="col">주문금액(수량)</th>
              <th scope="col">주문 상태</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order: Order) => <OrderInfoRow order={order} />)}
          </tbody>
        </table>
      </section>
      {/* //주문내역 조회 */}
    </section>
  );
}
