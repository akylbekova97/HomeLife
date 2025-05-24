import { BaseData } from "../api";
import s from "./Catalog.module.scss";
import { ProductCart } from "../../Product-components/ProductCatd";
import { Filter } from "../filter";
import { FilterContext } from "../../../context/FilterContext";
import { useContext } from "react";
export function Catalog() {
  const { filters } = useContext(FilterContext);

  const powerRanges = {
    "до 500": (power) => power <= 500,
    "от 500 до 1000": (power) => power > 500 && power <= 1000,
    "от 1000 до 2000": (power) => power > 1000 && power <= 2000,
    "от 2000 более": (power) => power > 2000,
  };

  const filteredData = BaseData.filter((el) => {
    return (
      (Array.isArray(filters.brand) && filters.brand.length
        ? filters.brand.includes(el.brand)
        : true) &&
      (!filters.price.min || el.price >= filters.price.min) &&
      (!filters.price.max || el.price <= filters.price.max) &&
      (Array.isArray(filters.type) && filters.type.length
        ? filters.type.includes(el.type)
        : true) &&
      ((Array.isArray(filters.power) && !filters.power.length) ||
        filters.power.some((range) => powerRanges[range]?.(el.power)))
    );
  });

  return (
    <div className={s.catalogGrid}>
      <Filter />
      {filteredData.map((el) => (
        <ProductCatd
          key={el.id}
          img={el.img}
          title={el.title}
          oldPrice={el.oldPrice}
          price={el.price}
          promotion={el.promotion}
          productRating={el.productRating}
        />
      ))}
    </div>
  );
}
