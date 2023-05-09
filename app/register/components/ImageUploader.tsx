import React from "react";
import { Label, Required } from "./styles/TextInput.styles";
import Image from "next/image";
import {
  Wrapper,
  ImageBox,
  ImageName,
  UploadButton,
} from "./styles/ImageUploader.styles";

interface ImageUploaderProps {
  name: string;
  selectedImage: string | ArrayBuffer | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploader = ({
  name,
  selectedImage,
  onChange,
}: ImageUploaderProps) => {
  return (
    <Wrapper role="presentation">
      <Label>
        메인 이미지
        <Required>*</Required>
      </Label>
      {selectedImage !== null && typeof selectedImage === "string" && (
        <ImageBox>
          <Image
            src={selectedImage}
            alt="main-image"
            width={28}
            height={28}
            style={{ borderRadius: 6 }}
          />
          <ImageName>{name}</ImageName>
        </ImageBox>
      )}
      <label htmlFor="select-image">
        <UploadButton id="upload" type="button" as="span">
          컴퓨터에서 불러오기
        </UploadButton>
      </label>
      <input
        style={{ display: "none" }}
        id="select-image"
        type="file"
        accept="image/*"
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default ImageUploader;
