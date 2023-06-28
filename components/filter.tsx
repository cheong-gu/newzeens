import { FilterProps } from "@/app/components/filters";
import { FilterLi } from "./styles/filter.styles";
import { forwardRef } from "react";

const Filter = forwardRef(
  (
    { id, el, className, onClick }: FilterProps,
    ref: React.ForwardedRef<HTMLLIElement>
  ) => {
    return (
      <FilterLi
        id={el === "전체" ? "all" : "out"}
        className={className}
        ref={ref}
        onClick={onClick}
      >
        <a>{el}</a>
      </FilterLi>
    );
  }
);

Filter.displayName = "Filter";

export default Filter;
