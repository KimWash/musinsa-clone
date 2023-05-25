export default function GalleryOption() {
  return (
    <>
      <div className="sorter-box box">
        <a href="#">
          <span className="division active">무신사 추천순</span>
        </a>
        <a href="#">
          <span className="division">신상품(재입고)순</span>
        </a>
        <a href="#">
          <span className="division">낮은 가격순</span>
        </a>
        <a href="#">
          <span className="division">높은 가격순</span>
        </a>
        <a href="#">
          <span className="division">할인율순</span>
        </a>
        <a href="#">
          <span className="division">후기순</span>
        </a>
        <a
          href="#layerSorting_sale"
          className="ui-layer-btn sorting"
          data-type="toggle"
        >
          <span className="division last">
            판매순
            <i className="ic-14-line-arrow-bottom" />
          </span>
          <div
            className="ui-layer layer-toggle fade-in sorting_view"
            id="layerSorting_sale"
          >
            <div className="layer-option sorting">
              <input type="radio" id="prdSort1" name="prdSort" />
              <label htmlFor="prdSort1">1일</label>
              <input type="radio" id="prdSort2" name="prdSort" />
              <label htmlFor="prdSort2">1주일</label>
              <input type="radio" id="prdSort3" name="prdSort" />
              <label htmlFor="prdSort3">1개월</label>
              <input type="radio" id="prdSort4" name="prdSort" />
              <label htmlFor="prdSort4">3개월</label>
              <input type="radio" id="prdSort5" name="prdSort" />
              <label htmlFor="prdSort5">1년</label>
            </div>
          </div>
        </a>
        {/* 상단 페이징 */}
        <div className="pagination">
          <div className="wrapper">
            <a
              href="#"
              className="fa fa-angle-double-left paging-btn btn first"
            >
              <label style={{ display: "none" }}>첫 페이지</label>
            </a>
            <a href="#" className="fa fa-angle-left paging-btn btn prev">
              <label style={{ display: "none" }}>이전</label>
            </a>
            <a href="#" className="paging-btn btn active">
              1
            </a>
            <a href="#" className="paging-btn btn">
              2
            </a>
            <a href="#" className="paging-btn btn">
              3
            </a>
            <a href="#" className="paging-btn btn">
              4
            </a>
            <a href="#" className="paging-btn btn">
              5
            </a>
            <a href="#" className="paging-btn btn">
              6
            </a>
            <a href="#" className="paging-btn btn">
              7
            </a>
            <a href="#" className="paging-btn btn">
              8
            </a>
            <a href="#" className="paging-btn btn">
              9
            </a>
            <a href="#" className="paging-btn btn">
              10
            </a>
            <a href="#" className="fa fa-angle-right paging-btn btn next">
              <label style={{ display: "none" }}>다음</label>
            </a>
            <a
              href="#"
              className="fa fa-angle-double-right paging-btn btn last"
            >
              <label style={{ display: "none" }}>마지막 페이지</label>
            </a>
          </div>
        </div>
      </div>
      <div className="thumbType_box box">
        <span className="image_view_select">
          <a
            href="#"
            className="view_select_small selected"
            title="작은 이미지"
          >
            작은 이미지
          </a>
          <a href="#" className="view_select_big" title="큰 이미지">
            큰 이미지
          </a>
        </span>

        <span className="counter check_box_area">
          <label>
            <input type="checkbox" id="btn_sale" data-value="SALE" />
            세일 상품
          </label>
        </span>
        <span className="counter check_box_area">
          <label>
            <input type="checkbox" id="btn_setup" name="chk_setup" />
            셋업 상품
          </label>
        </span>
        <span className="counter check_box_area">
          <label>
            <input type="checkbox" id="btn_soldout" name="chk_soldout" />
            품절 포함
          </label>
        </span>
        <span className="counter box_num_goods">
          <label className="is_goods">상품 수 : 100,330개</label>
        </span>

        <span className="pagingNumber">
          <span className="totalPagingNum">1115</span>
          페이지 중<span className="currentPagingNum">1</span>
          페이지
        </span>
      </div>
    </>
  );
}
