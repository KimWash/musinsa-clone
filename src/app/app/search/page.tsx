export default function SearchResultPage() {
  const relatedKeywords = [
    "반팔티셔츠",
    "남자 오버핏 반팔 티셔츠",
    "긴팔티셔츠",
    "피케티셔츠",
    "반팔",
    "여성반팔티셔츠",
    "나이키",
    "이너티셔츠",
    "후드티",
    "그래픽티셔츠",
  ];

  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="//static.msscdn.net/skin/musinsa/css/search.min.css?202305191611"
      ></link>
      <link
        rel="stylesheet"
        type="text/css"
        href="//static.msscdn.net/ui/build/pc/css/search.css"
      ></link>
      <section className="right_contents n-contents-area">
        <h2 className="n-search-result">
          <em>&apos;티셔츠&apos;</em>에 대한 검색결과
        </h2>
        <div className="n-search-relative">
          <h3 className="tit">연관검색어</h3>
          <ul>
            {relatedKeywords.map((keyword) => (
              <li key={keyword + keyword.length}>
                <button type="button" className="relatedKeyword">
                  {keyword}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
