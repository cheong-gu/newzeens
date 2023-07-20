import styled from "@emotion/styled";
import Image from "next/image";
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
    padding: 0px 20px;
    margin-bottom: 44px;
  }

  @media (min-width: 840px) {
    padding: 0px 40px;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  padding-bottom: 96px;

  @media (min-width: 600px) {
    margin-top: 52px;
    padding-bottom: 56px;
  }
  @media (min-width: 840px) {
    margin-top: 88px;
    padding-bottom: 52px;
  }
`;

export const Title = styled.h1`
  color: var(--black-22293-c, #22293c);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 18px */
  @media (min-width: 600px) {
    font-size: 24px;
  }

  & strong {
    margin-right: 6px;

    color: var(--primary-2141-e-5, #2141e5);
    font-weight: 700;

    @media (min-width: 600px) {
      margin-right: 8px;
      font-size: 24px;
    }
  }
`;

export const SuggestionBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(152px, 152px));
  grid-template-rows: auto;
  grid-gap: 16px;

  width: 100%;
  margin-top: 24px;

  align-items: flex-start;
  justify-content: center;

  @media (min-width: 600px) {
    margin-top: 32px;
    grid-template-columns: repeat(3, minmax(176px, 176px));
    grid-gap: 16px;
  }

  @media (min-width: 840px) {
    margin-top: 52px;
    grid-template-columns: repeat(auto-fit, minmax(182px, 182px));
    grid-gap: 20px;
  }
`;

export const SuggestionCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
  @media (min-width: 840px) {
    gap: 24px;
  }
`;

export const CardImage = styled(Image)`
  width: 152px;
  height: 152px;
  border-radius: 10px;
  border: 0.6px solid var(--gray-40-c-7-cee-3, #c7cee3);

  @media (min-width: 600px) {
    width: 176px;
    height: 176px;
    border: 0px;
  }

  @media (min-width: 840px) {
    gap: 24px;
  }
`;

export const SuggestionTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
  margin-bottom: 8px;

  @media (min-width: 840px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
  }
`;

export const SuggestionTitle = styled.p`
  color: var(--gray-9039425-a, #39425a);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 15px */
  @media (min-width: 840px) {
    font-size: 18px;
  }
`;

export const SuggestionPublisher = styled.p`
  color: var(--gray-609-ba-4-bf, #a2abc7);
  text-align: right;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 13px */
  @media (min-width: 840px) {
    font-size: 14px;
  }
`;

export const SuggestionIntroduction = styled.p`
  height: 100px;

  color: var(--gray-80565-d-71, #565d71);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */

  @media (min-width: 600px) {
    height: 96px;
  }
  @media (min-width: 840px) {
    font-size: 16px;
    line-height: 150%;
  }
`;
