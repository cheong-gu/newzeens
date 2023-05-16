import styled from "@emotion/styled";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  margin-top: 12px;
`;

export const ListInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 80px;
  padding: 16px 20px;
  margin-right: 8px;
  border-radius: 6px;
  background-color: #f0f3fd;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ListButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 57px;
  height: 80px;
  border-radius: 6px;

  background-color: #7c839a;
`;

export const Image = styled.img`
  margin: 0px 16px;
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #22293c;
`;

export const Caption = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #a2abc7;
  vertical-align: middle;
  margin-left: 4px;
`;

export const Summary = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #565d71;
`;
