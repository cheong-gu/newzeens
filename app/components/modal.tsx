import styled from "@emotion/styled";
import React, { PropsWithChildren } from "react";

interface ModalDefaultType {
  clickModal: () => void;
}

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

const DialogBox = styled.dialog`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 50%;
  position: fixed;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
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
