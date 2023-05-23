import { FilterProps, MyComponentProps } from "@/app/components/filters";
import styled from "@emotion/styled";
import { FilterLi } from "./styles/Filter.styles";
import { forwardRef } from "react";

const Filter = forwardRef(
  (
    { el, className, onClick }: FilterProps,
    ref: React.ForwardedRef<HTMLLIElement>
  ) => {
    return (
      <FilterLi className={className} ref={ref} onClick={onClick}>
        <a>{el}</a>
      </FilterLi>
    );
  }
);

export default Filter;
