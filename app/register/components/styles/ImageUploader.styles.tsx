import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const ImageName = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #39425a;
  margin-left: 8px;
`;

export const UploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 161px;
  height: 40px;
  border: 1px solid #39425a;
  border-radius: 6px;

  font-weight: 500;
  font-size: 16px;
  color: #39425a;
`;
