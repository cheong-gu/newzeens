import styled from "@emotion/styled";
import Link from "next/link";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 600px) {
    margin-top: 44px;
    padding: 0px 20px;
  }

  @media (min-width: 840px) {
    padding: 0px 40px;
  }
`;

export const InfoContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
    gap: 24px;
  }
  @media (min-width: 840px) {
    align-items: center;
    justify-content: center;
    gap: 92px;

    margin-bottom: 42px;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 360px;
  border-bottom: 1px solid #dfe4f5;
  @media (min-width: 600px) {
    width: 176px;
    height: 176px;
    border: 1px solid #dfe4f5;
    border-radius: 10px;
  }
  @media (min-width: 840px) {
    width: 388px;
    height: 388px;
    border: 0px;
  }

  & img {
    width: 360px;
    height: 360px;
    @media (min-width: 600px) {
      width: 176px;
      height: 176px;
    }
    @media (min-width: 840px) {
      width: 388px;
      height: 388px;
    }
  }
`;

export const InfoBox = styled.div`
  width: 100%;
  margin-top: 32px;
  margin-bottom: 38px;
  padding: 0px 20px;
  @media (min-width: 600px) {
    margin: 0px;
    padding: 0px;
  }
`;

export const NewsletterName = styled.p`
  color: var(--gray-9039425-a, #39425a);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  @media (min-width: 840px) {
    font-size: 30px;
  }
`;

export const Publisher = styled.h3`
  margin-top: 8px;

  color: var(--gray-609-ba-4-bf, #a2abc7);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;

  @media (min-width: 840px) {
    margin-top: 12px;
  }
`;

export const KeywordBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;

  margin: 32px 0px;

  @media (min-width: 600px) {
    gap: 8px;
    margin: 20px 0px;
  }

  @media (min-width: 840px) {
    gap: 0px;
    margin-top: 24px;
    margin-bottom: 36px;
  }
`;

export const KeywordRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;

  @media (min-width: 600px) {
    flex-direction: row;
    gap: 12px;
  }

  @media (min-width: 840px) {
    gap: 40px;
  }
`;

export const Category = styled.div`
  color: var(--gray-9039425-a, #39425a);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  @media (min-width: 600px) {
    min-width: 60px;
    font-size: 16px;
  }
  @media (min-width: 840px) {
    line-height: 170%;
  }
`;

export const Explanation = styled.div`
  color: var(--gray-80565-d-71, #565d71);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  @media (min-width: 600px) {
    font-size: 16px;
  }
  @media (min-width: 840px) {
    line-height: 170%;
  }
`;

export const ChipBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  @media (min-width: 600px) {
    margin-bottom: 116px;
  }
  @media (min-width: 840px) {
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 36px;
  }
`;

export const ButtonBox = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  width: 100%;
  height: 60px;
  padding: 8px 20px;

  border-top: 1px solid #dfe4f5;
  background-color: #ffffff;

  @media (min-width: 600px) {
    position: absolute;
    border: 0px;
    padding: 0px;
    bottom: 32px;
    height: 52px;
    gap: 16px;
  }

  @media (min-width: 840px) {
    position: relative;
    height: inherit;
    bottom: 0;
  }
`;

export const SolidLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const OutlinedLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 104px;
  width: 100%;

  @media (min-width: 600px) {
    max-width: 176px;
  }
  @media (min-width: 840px) {
    max-width: inherit;
  }
`;

export const Divider = styled.div`
  width: calc(100% - 40px);
  height: 1px;
  background-color: #dfe4f5;

  @media (min-width: 600px) {
    width: 100%;
  }
`;
