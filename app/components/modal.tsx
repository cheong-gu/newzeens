import React, { PropsWithChildren } from "react";
import { ModalContainer, DialogBox, Backdrop } from "./styles/Modal.styles";

interface ModalDefaultType {
  backDrop: () => void;
}

export const Modal = ({
  backDrop,
  children,
}: PropsWithChildren<ModalDefaultType>) => {
  {
    return (
      <ModalContainer>
        <DialogBox>{children}</DialogBox>
        <Backdrop
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            console.log("test");
            if (backDrop) {
              backDrop();
            }
          }}
        />
      </ModalContainer>
    );
  }
};
