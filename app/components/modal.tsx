import styled from "@emotion/styled";
import React, { PropsWithChildren } from "react";
import { mediaQuery } from "../breakpoints";

interface ModalDefaultType {
  clickModal: () => void;
}

const ModalContainer = styled.div`
  ${mediaQuery.sm} {
    max-width: 600px;
    z-index: 10000;
  }
`;

const DialogBox = styled.dialog`
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

    @keyframes dropdown {
      from {
        top: -50%;
      }
      to {
        top: 0%;
      }
    }
  }
`;

const Backdrop = styled.div`
  ${mediaQuery.sm} {
    width: 100vw;
    height: 100vw;
    position: fixed;
    bottom: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const Modal = ({
  clickModal,
  children,
}: PropsWithChildren<ModalDefaultType>) => {
  {
    return (
      <ModalContainer>
        <DialogBox>{children}</DialogBox>
        <Backdrop
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();

            if (clickModal) {
              clickModal();
            }
          }}
        />
      </ModalContainer>
    );
  }
};
