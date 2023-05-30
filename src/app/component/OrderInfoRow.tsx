import Order from "../model/dto/Order";
import { formatNumber, transformShippingState } from "../util";

export default function OrderInfoRow({ order }: { order: Order }) {
  return (
    <tr>
      <td>
        <div className="n-prd-row">
          <a href="/app/goods/2451936/0" className="img-block">
            <img
              src={order.imageUrl}
              alt="RETRIEVER FRIENDS SHORT SLEEVE [GREEN]"
            />
          </a>
          <ul className="info">
            <li className="brand">
              <a href="https://www.musinsa.com/brands/retrieverclub">
                {order.brandNm}
              </a>
            </li>
            <li className="name">
              <a href="/app/goods/2451936/0">{order.productNm}</a>
            </li>
            <li className="option">{order.size}</li>
          </ul>
        </div>
      </td>
      <td>{new Date(order.regDt).toDateString()}</td>
      <td>{order.orderId}</td>
      {/* test code */}
      <td>
        {formatNumber(order.orderPrice, "원")}
        <br />
        <span className="txt-default">{order.qty}개</span>
      </td>
      <td>
        <div className="btn-set tooltip">
          <span style={{ color: "#0078ff" }}>
            {transformShippingState(order.shippingState)}
          </span>
          <br />
          {order.shippingState >= 2 && (
            <button type="button" className="n-btn btn-sm btn-default">
              배송조회
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}
