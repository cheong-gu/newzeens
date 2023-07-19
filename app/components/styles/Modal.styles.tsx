import { mediaQuery } from "@/app/breakpoints";
import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  margin: 0 auto;
  z-index: 10000;
`;

export const DialogBox = styled.dialog`
  ${mediaQuery.sm} {
    position: fixed;
    top: 0;
    display: flex;

    box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
    background-color: white;
    z-index: 10000;

    animation-name: dropdown;
    animation-duration: 0.5s;
    animation-delay: 0s;
    animation-fill-mode: forwards;
  }
`;

export const Backdrop = styled.div`
  ${mediaQuery.sm} {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
