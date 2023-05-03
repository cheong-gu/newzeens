import styled from "@emotion/styled";

export default function Header() {
  const DivStyle = styled.div`
    padding: 0 20px;
    background-color: #22293b;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      height: 19px;
      color: #ffffff;
      font-size: 19px;
      font-weight: 650;
    }
  `;

  const BtnStyle = styled.button`
    border-radius: 8px;
    height: 38px;
    background-color: #39425a;
    p {
      margin: 12px 16px;
      color: #ffffff;
    }
  `;
  return (
    <DivStyle>
      <div className="title">NEWZEENS</div>
      <BtnStyle>
        <p>피드백 보내기</p>
      </BtnStyle>
    </DivStyle>
  );
}
