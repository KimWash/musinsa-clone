export default function CategoryMenu() {
  return (
    <div className="left_area">
      <div className="tabBox box_menu_left">
        <ul className="snb snb-3">
          <li
            data-for="category"
            className="box-tab-btn tab-btn btn tab-box-category active"
          >
            품목
          </li>
          <li
            data-for="brandselect"
            className="box-tab-btn tab-btn btn tab-box-brand"
          >
            브랜드
          </li>
        </ul>
        <div
          id="accordion2"
          className="tab category active ui-accordion ui-widget ui-helper-reset"
          role="tablist"
        >
          <nav className="nav_menu">
            <div role="tablist" className="nav_category item_menu_btn active">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-accordion-header-active ui-state-active ui-corner-top ui-accordion-icons"
                role="tab"
                id="ui-id-1"
                aria-controls="ui-id-2"
                aria-selected="true"
                aria-expanded="true"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" />
                <a>
                  <strong className="title">인기</strong>
                  <span className="nav_kr">Best</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active"
                id="ui-id-2"
                aria-labelledby="ui-id-1"
                role="tabpanel"
                aria-hidden="false"
              >
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/003002">
                      데님 팬츠 <span> (14,565)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/007001">
                      캡/야구 모자 <span> (18,232)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/018002">
                      캔버스/단화 <span> (4,771)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/003007">
                      코튼 팬츠 <span> (10,516)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/001005">
                      맨투맨/스웨트셔츠 <span> (34,541)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/001002">
                      셔츠/블라우스 <span> (26,484)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/001003">
                      피케/카라 티셔츠 <span> (11,062)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/001001">
                      반소매 티셔츠 <span> (76,097)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/004002">
                      메신저/크로스 백 <span> (8,821)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/011007">
                      벨트 <span> (2,025)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/005004">
                      샌들 <span> (4,487)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/005018">
                      슬리퍼 <span> (4,766)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-3"
                aria-controls="ui-id-4"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">상의</strong>
                  <span className="nav_kr">Top</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-4"
                aria-labelledby="ui-id-3"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/001">
                    전체 <span> (224,953)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/001006">
                      니트/스웨터 <span> (23,503)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/001004">
                      후드 티셔츠 <span> (21,286)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/001005">
                      맨투맨/스웨트셔츠 <span> (34,541)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/001010">
                      긴소매 티셔츠 <span> (17,609)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/001002">
                      셔츠/블라우스 <span> (26,484)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/001003">
                      피케/카라 티셔츠 <span> (11,062)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/001001">
                      반소매 티셔츠 <span> (76,097)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/001011">
                      민소매 티셔츠 <span> (6,783)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/001013">
                      스포츠 상의 <span> (23,824)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/001008">
                      기타 상의 <span> (7,143)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-5"
                aria-controls="ui-id-6"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">아우터</strong>
                  <span className="nav_kr">Outer</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-6"
                aria-labelledby="ui-id-5"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/002">
                    전체 <span> (71,316)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002022">
                      후드 집업 <span> (4,452)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002001">
                      블루종/MA-1 <span> (2,995)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002002">
                      레더/라이더스 재킷 <span> (2,306)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002025">
                      무스탕/퍼 <span> (956)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002017">
                      트러커 재킷 <span> (2,596)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002003">
                      슈트/블레이저 재킷 <span> (6,531)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002020">
                      카디건 <span> (10,746)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002019">
                      아노락 재킷 <span> (2,560)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002023">
                      플리스/뽀글이 <span> (2,658)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002018">
                      트레이닝 재킷 <span> (2,324)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002004">
                      스타디움 재킷 <span> (1,134)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002008">
                      환절기 코트 <span> (1,716)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002007">
                      겨울 싱글 코트 <span> (1,485)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002024">
                      겨울 더블 코트 <span> (830)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002009">
                      겨울 기타 코트 <span> (1,072)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002013">
                      롱패딩/롱헤비 아우터 <span> (491)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002012">
                      숏패딩/숏헤비 아우터 <span> (4,718)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002016">
                      패딩 베스트 <span> (795)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002021">
                      베스트 <span> (5,484)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002014">
                      사파리/헌팅 재킷 <span> (1,151)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002006">
                      나일론/코치 재킷 <span> (7,243)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/002015">
                      기타 아우터 <span> (7,073)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-7"
                aria-controls="ui-id-8"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">바지</strong>
                  <span className="nav_kr">Pants</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-8"
                aria-labelledby="ui-id-7"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/003">
                    전체 <span> (92,241)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/003002">
                      데님 팬츠 <span> (14,565)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/003007">
                      코튼 팬츠 <span> (10,516)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/003008">
                      슈트 팬츠/슬랙스 <span> (8,999)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/003004">
                      트레이닝/조거 팬츠 <span> (22,932)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/003009">
                      숏 팬츠 <span> (21,074)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/003005">
                      레깅스 <span> (2,996)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/003010">
                      점프 슈트/오버올 <span> (1,157)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/003011">
                      스포츠 하의 <span> (12,170)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/003006">
                      기타 바지 <span> (9,953)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-9"
                aria-controls="ui-id-10"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">원피스</strong>
                  <span className="nav_kr">Onepiece</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-10"
                aria-labelledby="ui-id-9"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/020">
                    전체 <span> (13,150)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/020006">
                      미니 원피스 <span> (3,554)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/020007">
                      미디 원피스 <span> (5,205)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/020008">
                      맥시 원피스 <span> (4,391)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-11"
                aria-controls="ui-id-12"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">스커트</strong>
                  <span className="nav_kr">Skirt</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-12"
                aria-labelledby="ui-id-11"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/022">
                    전체 <span> (13,279)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/022001">
                      미니스커트 <span> (6,984)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/022002">
                      미디스커트 <span> (3,162)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/022003">
                      롱스커트 <span> (3,133)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-13"
                aria-controls="ui-id-14"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">스니커즈</strong>
                  <span className="nav_kr">Sneakers</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-14"
                aria-labelledby="ui-id-13"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/018">
                    전체 <span> (10,767)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/018002">
                      캔버스/단화 <span> (4,771)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/018003">
                      패션스니커즈화 <span> (2,515)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/018001">
                      스포츠 스니커즈 <span> (1,510)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/018004">
                      기타 스니커즈 <span> (1,971)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-15"
                aria-controls="ui-id-16"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">신발</strong>
                  <span className="nav_kr">Shoes</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-16"
                aria-labelledby="ui-id-15"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/005">
                    전체 <span> (25,784)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/005014">
                      구두 <span> (2,293)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/005015">
                      로퍼 <span> (2,639)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/005012">
                      힐/펌프스 <span> (3,213)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/005017">
                      플랫 슈즈 <span> (1,286)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/005019">
                      블로퍼 <span> (892)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/005004">
                      샌들 <span> (4,487)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/005018">
                      슬리퍼 <span> (4,766)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/005006">
                      기타 신발 <span> (1,406)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/005016">
                      모카신/보트 슈즈 <span> (194)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/005011">
                      부츠 <span> (4,417)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/005005">
                      신발 용품 <span> (191)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-17"
                aria-controls="ui-id-18"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">가방</strong>
                  <span className="nav_kr">Bag</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-18"
                aria-labelledby="ui-id-17"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/004">
                    전체 <span> (43,513)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/004001">
                      백팩 <span> (5,632)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/004002">
                      메신저/크로스 백 <span> (8,821)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/004003">
                      숄더백 <span> (9,506)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/004015">
                      토트백 <span> (5,403)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/004014">
                      에코백 <span> (2,331)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/004006">
                      보스턴/드럼/더플백 <span> (538)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/004007">
                      웨이스트 백 <span> (1,175)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/004013">
                      파우치 백 <span> (2,687)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/004008">
                      브리프케이스 <span> (490)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/004009">
                      캐리어 <span> (833)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/004012">
                      가방 소품 <span> (773)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/004016">
                      지갑/머니클립 <span> (4,685)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/004005">
                      클러치 백 <span> (639)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-19"
                aria-controls="ui-id-20"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">여성 가방</strong>
                  <span className="nav_kr">Women&apos;s bag</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-20"
                aria-labelledby="ui-id-19"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/054">
                    전체 <span> (20,407)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/054001">
                      크로스백 <span> (3,604)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/054002">
                      토트백 <span> (3,816)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/054003">
                      숄더백 <span> (8,286)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/054004">
                      클러치 백 <span> (273)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/054005">
                      파우치 백 <span> (731)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/054006">
                      백팩 <span> (866)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/054007">
                      웨이스트 백 <span> (122)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/054008">
                      지갑/머니클립 <span> (2,109)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/054009">
                      가방 소품 <span> (600)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-21"
                aria-controls="ui-id-22"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">스포츠/용품</strong>
                  <span className="nav_kr">Sports/Goods</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-22"
                aria-labelledby="ui-id-21"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/017">
                    전체 <span> (81,832)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/017016">
                      상의 <span> (23,825)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/017020">
                      하의 <span> (12,352)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/017018">
                      아우터 <span> (8,738)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/017017">
                      스커트 <span> (2,628)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/017019">
                      원피스 <span> (552)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/017021">
                      상하의세트 <span> (658)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/017022">
                      수영복/비치웨어 <span> (5,499)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/017023">
                      스포츠신발 <span> (2,957)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/017024">
                      기구/용품/장비 <span> (5,600)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/017025">
                      스포츠가방 <span> (4,568)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/017026">
                      스포츠잡화 <span> (4,686)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/017027">
                      스포츠모자 <span> (5,252)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/017028">
                      캠핑용품 <span> (4,638)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/017029">
                      낚시용품 <span> (647)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-23"
                aria-controls="ui-id-24"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">모자</strong>
                  <span className="nav_kr">Headwear</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-24"
                aria-labelledby="ui-id-23"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/007">
                    전체 <span> (32,317)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/007001">
                      캡/야구 모자 <span> (18,232)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/007002">
                      헌팅캡/베레모 <span> (898)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/007003">
                      페도라 <span> (398)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/007004">
                      버킷/사파리햇 <span> (6,034)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/007005">
                      비니 <span> (3,833)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/007007">
                      트루퍼 <span> (370)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/007006">
                      기타 모자 <span> (2,552)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-25"
                aria-controls="ui-id-26"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">양말/레그웨어</strong>
                  <span className="nav_kr">Socks/Legwear</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-26"
                aria-labelledby="ui-id-25"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/008">
                    전체 <span> (8,718)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/008001">
                      양말 <span> (8,469)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/008002">
                      스타킹 <span> (249)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-27"
                aria-controls="ui-id-28"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">속옷</strong>
                  <span className="nav_kr">Underwear</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-28"
                aria-labelledby="ui-id-27"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/026">
                    전체 <span> (10,613)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/026001">
                      여성 속옷 상의 <span> (1,176)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/026002">
                      여성 속옷 하의 <span> (1,336)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/026003">
                      여성 속옷 세트 <span> (1,160)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/026004">
                      남성 속옷 <span> (2,309)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/026005">
                      홈웨어 <span> (4,632)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-29"
                aria-controls="ui-id-30"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">선글라스/안경테</strong>
                  <span className="nav_kr">Eyewear</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-30"
                aria-labelledby="ui-id-29"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/009">
                    전체 <span> (15,577)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/009002">
                      안경 <span> (8,009)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/009001">
                      선글라스 <span> (7,308)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/009003">
                      안경 소품 <span> (260)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-31"
                aria-controls="ui-id-32"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">액세서리</strong>
                  <span className="nav_kr">Accessory</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-32"
                aria-labelledby="ui-id-31"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/011">
                    전체 <span> (11,297)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/011015">
                      마스크 <span> (937)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/011012">
                      키링/키케이스 <span> (1,549)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/011007">
                      벨트 <span> (2,025)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/011009">
                      넥타이 <span> (1,565)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/011010">
                      머플러 <span> (2,255)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/011014">
                      스카프/반다나 <span> (1,134)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/011011">
                      장갑 <span> (834)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/011006">
                      기타 액세서리 <span> (996)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-33"
                aria-controls="ui-id-34"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">시계</strong>
                  <span className="nav_kr">Watch</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-34"
                aria-labelledby="ui-id-33"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/006">
                    전체 <span> (7,746)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/006003">
                      디지털 <span> (754)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/006004">
                      쿼츠 아날로그 <span> (5,192)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/006005">
                      오토매틱 아날로그 <span> (307)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/006006">
                      시계 용품 <span> (1,172)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/006002">
                      기타 시계 <span> (321)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-35"
                aria-controls="ui-id-36"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">주얼리</strong>
                  <span className="nav_kr">Jewelry</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-36"
                aria-labelledby="ui-id-35"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/025">
                    전체 <span> (44,546)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/025001">
                      팔찌 <span> (8,761)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/025002">
                      반지 <span> (7,960)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/025003">
                      목걸이/펜던트 <span> (13,211)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/025004">
                      귀걸이 <span> (11,788)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/025005">
                      발찌 <span> (519)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/025006">
                      브로치/배지 <span> (359)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/025007">
                      헤어 액세서리 <span> (1,948)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-37"
                aria-controls="ui-id-38"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">뷰티</strong>
                  <span className="nav_kr">Beauty</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-38"
                aria-labelledby="ui-id-37"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/015">
                    전체 <span> (19,903)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/015002">
                      스킨케어 <span> (5,739)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/015009">
                      클렌징 <span> (1,253)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/015006">
                      베이스 메이크업 <span> (1,083)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/015016">
                      포인트 메이크업 <span> (1,790)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/015010">
                      바디케어 <span> (2,533)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/015011">
                      쉐이빙/제모 <span> (196)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/015001">
                      헤어케어 <span> (2,094)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/015007">
                      향수/탈취 <span> (1,619)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/015014">
                      뷰티 디바이스 <span> (862)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/015012">
                      다이어트/헬스 <span> (328)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/015013">
                      미용 소품 <span> (2,243)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/015015">
                      덴탈케어 <span> (447)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-39"
                aria-controls="ui-id-40"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">디지털/테크</strong>
                  <span className="nav_kr">Digital/Tech</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-40"
                aria-labelledby="ui-id-39"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/012">
                    전체 <span> (46,620)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/012018">
                      음향가전 <span> (2,056)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/012019">
                      휴대폰 <span> (40,397)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/012020">
                      스마트기기 <span> (263)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/012021">
                      태블릿 <span> (1,029)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/012022">
                      TV/영상가전 <span> (57)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/012023">
                      컴퓨터 <span> (578)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/012024">
                      카메라 <span> (953)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/012025">
                      생활가전 <span> (345)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/012026">
                      주방가전 <span> (358)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/012027">
                      계절가전 <span> (265)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/012028">
                      차량용 디지털 <span> (100)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/012029">
                      게임 <span> (133)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/012030">
                      기타 디지털/테크 <span> (87)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-41"
                aria-controls="ui-id-42"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">리빙</strong>
                  <span className="nav_kr">Life</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-42"
                aria-labelledby="ui-id-41"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/058">
                    전체 <span> (20,601)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/058001">
                      가구 <span> (2,391)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/058002">
                      조명 <span> (217)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/058003">
                      침구 <span> (2,456)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/058004">
                      홈패브릭 <span> (1,265)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/058005">
                      홈인테리어 <span> (4,540)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/058006">
                      주방용품 <span> (4,317)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/058007">
                      생활용품 <span> (1,429)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/058008">
                      욕실용품 <span> (465)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/058009">
                      사무용품 <span> (2,641)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/058010">
                      기타 라이프 <span> (880)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-43"
                aria-controls="ui-id-44"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">컬처</strong>
                  <span className="nav_kr">Culture</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-44"
                aria-labelledby="ui-id-43"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/014">
                    전체 <span> (5,068)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/014004">
                      티켓 <span> (4)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/014001">
                      도서/음반 <span> (259)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/014005">
                      취미 <span> (3,954)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/014003">
                      아트 <span> (830)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/014002">
                      기타 컬처 <span> (21)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div role="tablist" className="nav_category item_menu_btn">
              <div
                className="nav_menu_title ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"
                role="tab"
                id="ui-id-45"
                aria-controls="ui-id-46"
                aria-selected="false"
                aria-expanded="false"
              >
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
                <a>
                  <strong className="title">반려동물</strong>
                  <span className="nav_kr">Pet</span>
                </a>
              </div>
              <div
                className="item_sub_menu ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                id="ui-id-46"
                aria-labelledby="ui-id-45"
                role="tabpanel"
                aria-hidden="true"
              >
                <div className="item_sub_menu_all">
                  <a href="https://www.musinsa.com/categories/item/021">
                    전체 <span> (3,696)</span>
                  </a>
                </div>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/021004">
                      반려동물 의류 <span> (2,145)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/021005">
                      반려동물 잡화 <span> (186)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav_category_menu">
                  <li>
                    <a href="https://www.musinsa.com/categories/item/021002">
                      반려동물 용품 <span> (1,499)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.musinsa.com/categories/item/021006">
                      반려동물 푸드 <span> (11)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="section-tabbox-left">
        <div className="tabBox">
          <ul className="snb snb-multi">
            <li
              data-for="ranking"
              className="box-tab-btn tab-btn btn tab-box-ranking active"
            >
              <a href="javascript:void(0);">
                <span>랭킹</span>
              </a>
            </li>
            <li data-for="new" className="box-tab-btn tab-btn btn tab-box-new">
              <a href="javascript:void(0);">
                <span>업데이트</span>
              </a>
            </li>
            <li
              data-for="sale"
              className="box-tab-btn tab-btn btn tab-box-sale"
            >
              <a href="javascript:void(0);">
                <span>세일</span>
              </a>
            </li>
            <li
              data-for="exclusive"
              className="box-tab-btn tab-btn btn tab-box-exclusive"
            >
              <a href="javascript:void(0);">
                <span>단독</span>
              </a>
            </li>
          </ul>
          <div id="left_ranking_area" className="tab ranking active">
            <div className="box-page">
              <ul className="box-indicate">
                <li>
                  <a href="javascript:void(0);" className="link-text">
                    상품
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="link-text active">
                    브랜드
                  </a>
                </li>
              </ul>
              <div className="box-btn">
                <a
                  href="https://www.musinsa.com/ranking/brand"
                  className="link-text active"
                >
                  전체
                </a>
                <a id="left_ranking_prev" className="nav-btn btn btn-prev">
                  &lt;
                </a>
                <a id="left_ranking_next" className="nav-btn btn">
                  &gt;
                </a>
              </div>
            </div>
            <div className="box-swipe">
              <ul className="box-swipe-list">
                <li className="box-swipe-contents">
                  <ul className="box_item box-brand">
                    <li className="li_box">
                      <div className="li_inner">
                        <div className="list_img">
                          <a href="https://www.musinsa.com/brands/musinsastandard">
                            <span className="icon_event"> 1 </span>

                            <img
                              src="https://image.msscdn.net/mfile_s01/_brand/free_medium/musinsastandard.png?202342100"
                              alt="musinsastandard"
                            />
                            <span className="vertical_standard" />
                          </a>
                        </div>
                        <div className="article_info">
                          <p className="item_title">
                            <a href="https://www.musinsa.com/brands/musinsastandard">
                              무신사...
                            </a>
                            <span className="icon-rank rank-stay" />
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="li_box">
                      <div className="li_inner">
                        <div className="list_img">
                          <a href="https://www.musinsa.com/brands/adidas">
                            <span className="icon_event"> 2 </span>

                            <img
                              src="https://image.msscdn.net/mfile_s01/_brand/free_medium/adidas.png?202342100"
                              alt="adidas"
                            />
                            <span className="vertical_standard" />
                          </a>
                        </div>
                        <div className="article_info">
                          <p className="item_title">
                            <a href="https://www.musinsa.com/brands/adidas">
                              아디다...
                            </a>
                            <span className="icon-rank rank-stay" />
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="li_box">
                      <div className="li_inner">
                        <div className="list_img">
                          <a href="https://www.musinsa.com/brands/vans">
                            <span className="icon_event"> 3 </span>

                            <img
                              src="https://image.msscdn.net/mfile_s01/_brand/free_medium/vans.png?202342100"
                              alt="vans"
                            />
                            <span className="vertical_standard" />
                          </a>
                        </div>
                        <div className="article_info">
                          <p className="item_title">
                            <a href="https://www.musinsa.com/brands/vans">
                              반스
                            </a>
                            <span className="icon-rank rank-up" />
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="li_box">
                      <div className="li_inner">
                        <div className="list_img">
                          <a href="https://www.musinsa.com/brands/avan">
                            <span className="icon_best"> 4 </span>

                            <img
                              src="https://image.msscdn.net/mfile_s01/_brand/free_medium/avan.png?202342100"
                              alt="avan"
                            />
                            <span className="vertical_standard" />
                          </a>
                        </div>
                        <div className="article_info">
                          <p className="item_title">
                            <a href="https://www.musinsa.com/brands/avan">
                              어반드...
                            </a>
                            <span className="icon-rank rank-down" />
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="li_box">
                      <div className="li_inner">
                        <div className="list_img">
                          <a href="https://www.musinsa.com/brands/lafudgestore">
                            <span className="icon_best"> 5 </span>

                            <img
                              src="https://image.msscdn.net/mfile_s01/_brand/free_medium/lafudgestore.png?202342100"
                              alt="lafudgestore"
                            />
                            <span className="vertical_standard" />
                          </a>
                        </div>
                        <div className="article_info">
                          <p className="item_title">
                            <a href="https://www.musinsa.com/brands/lafudgestore">
                              라퍼지...
                            </a>
                            <span className="icon-rank rank-down" />
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="li_box">
                      <div className="li_inner">
                        <div className="list_img">
                          <a href="https://www.musinsa.com/brands/inspector">
                            <span className="icon_best"> 6 </span>

                            <img
                              src="https://image.msscdn.net/mfile_s01/_brand/free_medium/inspector.png?202342100"
                              alt="inspector"
                            />
                            <span className="vertical_standard" />
                          </a>
                        </div>
                        <div className="article_info">
                          <p className="item_title">
                            <a href="https://www.musinsa.com/brands/inspector">
                              인스펙...
                            </a>
                            <span className="icon-rank rank-up" />
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="li_box">
                      <div className="li_inner">
                        <div className="list_img">
                          <a href="https://www.musinsa.com/brands/codegraphy">
                            <span className="icon_best"> 7 </span>

                            <img
                              src="https://image.msscdn.net/mfile_s01/_brand/free_medium/codegraphy.png?202342100"
                              alt="codegraphy"
                            />
                            <span className="vertical_standard" />
                          </a>
                        </div>
                        <div className="article_info">
                          <p className="item_title">
                            <a href="https://www.musinsa.com/brands/codegraphy">
                              코드그...
                            </a>
                            <span className="icon-rank rank-stay" />
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="li_box">
                      <div className="li_inner">
                        <div className="list_img">
                          <a href="https://www.musinsa.com/brands/yale">
                            <span className="icon_best"> 8 </span>

                            <img
                              src="https://image.msscdn.net/mfile_s01/_brand/free_medium/yale.png?202342100"
                              alt="yale"
                            />
                            <span className="vertical_standard" />
                          </a>
                        </div>
                        <div className="article_info">
                          <p className="item_title">
                            <a href="https://www.musinsa.com/brands/yale">
                              예일
                            </a>
                            <span className="icon-rank rank-down" />
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="li_box">
                      <div className="li_inner">
                        <div className="list_img">
                          <a href="https://www.musinsa.com/brands/spao">
                            <span className="icon_best"> 9 </span>

                            <img
                              src="https://image.msscdn.net/mfile_s01/_brand/free_medium/spao.png?202342100"
                              alt="spao"
                            />
                            <span className="vertical_standard" />
                          </a>
                        </div>
                        <div className="article_info">
                          <p className="item_title">
                            <a href="https://www.musinsa.com/brands/spao">
                              스파오
                            </a>
                            <span className="icon-rank rank-up" />
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="box_cs_left">
            <h2 className="txt_tel_left font-mss">
              <i className="fa fa-phone" /> 1544-7199
            </h2>
            <p className="font_basic">오전9시~오후6시 운영 / 토,일,휴일 휴무</p>
            <div className="box_info_left font_basic">
              <p>
                - 전화 전
                <a href="https://www.musinsa.com/app/cs/faq">자주 묻는 질문</a>
                을 확인하세요.
              </p>
              <p>
                - <a href="https://www.musinsa.com/app/cs/counsel">1:1문의</a>를
                통해서도 상담이 가능합니다.
              </p>
              <p>- 상품 문의는 각 상품 Q&amp;A를 이용하세요.</p>
            </div>
          </div>
          <ul className="left_basic_btn box_bottom_left">
            <li>
              <a
                href="https://www.musinsa.com/app/reviews/lists"
                className="plain-btn btn"
              >
                회원후기
              </a>
            </li>
            <li>
              <a
                href="https://www.musinsa.com/member/benefit"
                className="plain-btn btn"
              >
                회원 혜택
              </a>
            </li>
            <li>
              <a
                href="https://www.musinsa.com/app/cs/notice_list"
                className="plain-btn btn"
              >
                공지사항
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
