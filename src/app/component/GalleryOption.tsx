import { SearchFilterDto } from "./SearchFilter";

export default function GalleryOption({
  filter,
  onChange,
  totalElements,
}: {
  filter: SearchFilterDto;
  onChange: (
    fieldName: keyof SearchFilterDto,
    value: SearchFilterDto[keyof SearchFilterDto]
  ) => void;
  totalElements: number;
}) {
  const sortOptions = [
    { key: "priceAsc", text: "낮은 가격순" },
    { key: "priceDesc", text: "높은 가격순" },
    { key: "discountRate", text: "할인율순" },
    { key: "review", text: "후기순" },
    { key: "sales", text: "누적 판매순" },
  ];

  return (
    <>
      <div className="sorter-box box">
        {sortOptions.map((option: { key: string; text: string }) => (
          <a key={option.key}>
            <span
              className={`division ${
                filter.orderBy == option.key ? "active" : ""
              }`}
              onClick={() => onChange("orderBy", option.key)}
            >
              {option.text}
            </span>
          </a>
        ))}
      </div>
      <div className="thumbType_box box">
        <span className="counter check_box_area">
          <label>
            <input
              type="checkbox"
              id="btn_sale"
              data-value="SALE"
              checked={filter.onlyDiscounted}
              onChange={(e) => onChange("onlyDiscounted", e.target.checked)}
            />
            세일 상품
          </label>
        </span>
        <span className="counter check_box_area">
          <label>
            <input
              type="checkbox"
              id="btn_soldout"
              name="chk_soldout"
              checked={filter.containSoldout}
              onChange={(e) => onChange("containSoldout", e.target.checked)}
            />
            품절 포함
          </label>
        </span>
        <span className="counter box_num_goods">
          <label className="is_goods">상품 수 : {totalElements}개</label>
        </span>
      </div>
    </>
  );
}
