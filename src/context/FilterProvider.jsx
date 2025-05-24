import { useState } from "react";
import { FilterContext } from "./FilterContext";

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    brand: [],
    price: { min: "", max: "" },
    type: [],
    power: [],
  });

  const updateFilter = (filterName, value) => {
    setFilters((prev) => {
      const currentValue = prev[filterName];

      if (filterName === "price") {
        return {
          ...prev,
          price: {
            ...prev.price,
            ...value,
          },
        };
      }

      if (Array.isArray(currentValue)) {
        const alreadySelected = currentValue.includes(value);
        return {
          ...prev,
          [filterName]: alreadySelected
            ? currentValue.filter((v) => v !== value)
            : [...currentValue, value],
        };
      }

      return prev;
    });
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
