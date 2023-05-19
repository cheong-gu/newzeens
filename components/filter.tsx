import { FilterProps, MyComponentProps } from "@/app/components/filters";
import styled from "@emotion/styled";
import { FilterLi } from "./styles/Filter.styles";

const Filter = ({ el, className, ref, onClick }: FilterProps) => {
  return (
    <FilterLi className={className} ref={ref} onClick={onClick}>
      <a>{el}</a>
    </FilterLi>
  );
};

export default Filter;
