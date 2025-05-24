import { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    brand: [],
    price: { min: "", max: "" },
    type: [],
    power: [],
  });

  const updateFilter = (filterName, value) => {
    console.log(filters);

    setFilters((prev) => {
      const currentValue = prev[filterName];

      // если это массив (чекбоксы: brand, type, power)
      if (Array.isArray(currentValue)) {
        const alreadySelected = currentValue.includes(value);
        return {
          ...prev,
          [filterName]: alreadySelected
            ? currentValue.filter((v) => v !== value) // убрать значение
            : [...currentValue, value], // добавить значение
        };
      }

      // если одиночное значение (price)
      if (filterName === "price") {
        return {
          ...prev,
          price: {
            ...prev.price,
            ...value,
          },
        };
      }
    });
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
