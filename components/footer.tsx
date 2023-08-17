import { FooterDiv } from "./styles/Footer.styles";

const Footer = () => {
  return (
    <FooterDiv>
      <div className="innerDiv">
        <div className="title">NEWZEENS</div>
        <div className="content">
          <span className="span1">
            개인정보취급방침 l 이용약관 l 이미지출처 Designed by Freepik,
            Unsplash
          </span>
          <span className="span2">© Mitralmb Team. All Right Reserved.</span>
        </div>
      </div>
    </FooterDiv>
  );
};

export default Footer;
