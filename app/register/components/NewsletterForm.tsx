"use client";

import React, { useCallback, useState } from "react";
import {
  StyledButtonWrapper,
  StyledButton,
  InputRowWrapper,
  InputColumnWrapper,
  Divider,
} from "./styles/NewsletterForm.styles";
import TextInput from "./Form/TextInput";
import TextArea from "./Form/TextArea";
import ImageUploader from "./Form/ImageUploader";
import { NewsletterFormType } from "../newsletter.type";

const INITIAL_FORM_DATA = {
  newsletterName: "",
  publisher: "",
  introduction: "",
  subscriptionFee: "",
  deliveryPeriod: "",
  field: "",
  keywords: [],
  previousIssueLink: "",
  subscribeLink: "",
  mainImage: null,
};

const INITIAL_KEYWORD_DATA = {
  keyword2: "",
  keyword3: "",
  keyword4: "",
};

const INPUT_DATA = {
  newsletterName: { label: "뉴스레터명", name: "newsletterName" },
  publisher: { label: "발행인", name: "publisher" },
  introduction: { label: "소개글", name: "introduction" },
  subscriptionFee: { label: "구독비", name: "subscriptionFee" },
  deliveryPeriod: { label: "발송 주기", name: "deliveryPeriod" },
  field: { label: "키워드1", subLabel: "분야", name: "field" },
  keywords: [
    { label: "키워드2", subLabel: "직무", name: "keyword2" },
    { label: "키워드3", subLabel: "목적", name: "keyword3" },
    { label: "키워드4", subLabel: "고유성", name: "keyword4" },
  ],
  previousIssueLink: { label: "지난호 보기 링크", name: "previousIssueLink" },
  subscribeLink: { label: "구독하기 링크", name: "subscribeLink" },
} as const;

const {
  newsletterName,
  publisher,
  introduction,
  subscriptionFee,
  deliveryPeriod,
  field,
  keywords,
  previousIssueLink,
  subscribeLink,
} = INPUT_DATA;

const NewsletterForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [keywordFormData, setKeywordFormData] = useState(INITIAL_KEYWORD_DATA);
  const [imageName, setImageName] = useState("");

  const resetData = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setKeywordFormData(INITIAL_KEYWORD_DATA);
    setImageName("");
  }, []);

  const handleFormDataChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.currentTarget;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleKeywordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.currentTarget;
      setKeywordFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files !== null) {
      const file = event.currentTarget.files[0];
      const name = event.currentTarget.name;
      const reader = new FileReader();

      reader.onload = () => {
        setFormData((prev) => ({
          ...prev,
          [name]: reader.result,
        }));
        setImageName(file.name);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      if (
        formData.mainImage !== null &&
        formData.newsletterName &&
        formData.introduction &&
        formData.publisher &&
        formData.field
      ) {
        const body: NewsletterFormType = {
          ...formData,
          mainImage: formData.mainImage,
          keywords: [
            keywordFormData.keyword2,
            keywordFormData.keyword3,
            keywordFormData.keyword4,
          ],
        };
        console.log(body);
      } else {
        alert("필수 입력 항목을 모두 입력해주세요.");
      }
    },
    [formData, keywordFormData]
  );

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        required
        size="md"
        label={newsletterName.label}
        name={newsletterName.name}
        value={formData[newsletterName.name]}
        onChange={handleFormDataChange}
      />
      <TextInput
        required
        size="md"
        label={publisher.label}
        name={publisher.name}
        value={formData[publisher.name]}
        onChange={handleFormDataChange}
      />
      <TextInput
        required
        size="lg"
        label={introduction.label}
        name={introduction.name}
        value={formData[introduction.name]}
        onChange={handleFormDataChange}
      />
      <Divider />
      <InputRowWrapper>
        <InputColumnWrapper>
          <TextInput
            size="sm"
            label={subscriptionFee.label}
            name={subscriptionFee.name}
            value={formData[subscriptionFee.name]}
            onChange={handleFormDataChange}
          />
        </InputColumnWrapper>
        <InputColumnWrapper>
          <TextInput
            size="sm"
            label={deliveryPeriod.label}
            name={deliveryPeriod.name}
            value={formData[deliveryPeriod.name]}
            onChange={handleFormDataChange}
          />
        </InputColumnWrapper>
      </InputRowWrapper>
      <InputRowWrapper>
        <InputColumnWrapper>
          <TextInput
            size="sm"
            required
            label={field.label}
            subLabel={field.subLabel}
            name={field.name}
            value={formData[field.name]}
            onChange={handleFormDataChange}
          />
        </InputColumnWrapper>
        {keywords.map(({ name, label, subLabel }) => (
          <InputColumnWrapper key={name}>
            <TextInput
              size="sm"
              label={label}
              subLabel={subLabel}
              name={name}
              value={keywordFormData[name]}
              onChange={handleKeywordChange}
            />
          </InputColumnWrapper>
        ))}
      </InputRowWrapper>
      <Divider />
      <TextArea
        label={previousIssueLink.label}
        name={previousIssueLink.name}
        value={formData[previousIssueLink.name]}
        onChange={handleFormDataChange}
      />
      <TextArea
        label={subscribeLink.label}
        name={subscribeLink.name}
        value={formData[subscribeLink.name]}
        onChange={handleFormDataChange}
      />
      <Divider />
      <ImageUploader
        name={imageName}
        selectedImage={formData.mainImage}
        onChange={handleImageChange}
      />
      <StyledButtonWrapper>
        <StyledButton id="submit" type="submit">
          등록하기
        </StyledButton>
      </StyledButtonWrapper>
    </form>
  );
};

export default NewsletterForm;
