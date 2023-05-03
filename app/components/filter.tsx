import styled from "@emotion/styled";

export default function Filter() {
  const Container = styled.div`
    margin: 25px 27px;
    .reset {
      text-decoration: underline;
    }

    border-bottom: solid #e6e6e6 1px;
  `;

  const RowStyle = styled.div`
    margin: 20px 0;
    display: flex;
    align-items: center;
    flex-direction: row;

    .title {
      width: 80px;
      font-weight: 650;
      font-size: 16px;
    }
    ul {
      display: flex;
      li {
        margin: 0 4px;
        font-size: 15px;
        background-color: #eef1fa;
        padding: 12px;
        border-radius: 10px;
        a {
        }
      }
    }
  `;
  return (
    <Container>
      <p className="reset">필터 초기화</p>
      <RowStyle>
        <div className="title">
          <p>분야</p>
        </div>
        <div>
          <ul>
            <li>
              <a>마케팅/트렌드</a>
            </li>
            <li>
              <a>IT/개발</a>
            </li>
            <li>
              <a>디자인/문화</a>
            </li>
            <li>
              <a>커리어/성장</a>
            </li>
            <li>
              <a>경제/주식/부동산</a>
            </li>
            <li>
              <a>라이프/취미/건강</a>
            </li>
            <li>
              <a>인문/사회</a>
            </li>
            <li>
              <a>시사/정치</a>
            </li>
          </ul>
        </div>
      </RowStyle>
      <RowStyle>
        <div className="title">
          <p>키워드</p>
        </div>
        <div>
          <ul>
            <li>
              <a>마케터</a>
            </li>
            <li>
              <a>IT 종사자</a>
            </li>
            <li>
              <a>디자이너</a>
            </li>
            <li>
              <a>누구나</a>
            </li>
            <li>
              <a>인사이트</a>
            </li>
            <li>
              <a>일잘러</a>
            </li>
            <li>
              <a>예술</a>
            </li>
            <li>
              <a>취미</a>
            </li>
            <li>
              <a>투자</a>
            </li>
          </ul>
        </div>
      </RowStyle>
      <RowStyle>
        <div className="title">
          <p>발송 주기</p>
        </div>
        <div>
          <ul>
            <li>
              <a>매일</a>
            </li>
            <li>
              <a>주 1회</a>
            </li>
            <li>
              <a>주 2회 이상</a>
            </li>
            <li>
              <a>월 1회</a>
            </li>
            <li>
              <a>주기 없음</a>
            </li>
          </ul>
        </div>
      </RowStyle>
      <RowStyle>
        <div className="title">
          <p>구독료</p>
        </div>
        <div>
          <ul>
            <li>
              <a>무료</a>
            </li>
            <li>
              <a>유료</a>
            </li>
          </ul>
        </div>
      </RowStyle>
    </Container>
  );
}
