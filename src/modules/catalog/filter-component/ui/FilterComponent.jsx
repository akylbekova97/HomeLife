import { Checkbox } from "../../../../shared/components/checkbox";
import { Text, Title } from "../../../../shared/components/ui/Text";
import { useState } from "react";
import s from "./FilterComponent.module.scss";
import { Input } from "../../../../shared/components/ui/input/ui/Input";
export function FilterComponent({
  filterName,
  title,
  data,
  isSlaider = false,
  onFilterChange,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const changeMinPriceHandler = (e) => {
    setMinPrice(e.target.value);
    onFilterChange(filterName, { min: e.target.value, max: maxPrice });
  };
  const changeMaxPriceHandler = (e) => {
    setMaxPrice(e.target.value);
    onFilterChange(filterName, { min: minPrice, max: e.target.value });
  };
  const checkboxHandler = (e) => {
    onFilterChange(filterName, e.target.value);
  };
  const openFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.filterBox}>
      <div className={s.title} onClick={openFilter}>
        <Title>{title}</Title>
        {isOpen ? <span>ᐱ</span> : <span>ᐯ</span>}
      </div>
      {isOpen && (
        <div className={s.bottomTitle}>
          {isSlaider ? (
            <div className={s.inputPrice}>
              <Text>от</Text>
              <input
                type="number"
                onChange={changeMinPriceHandler}
                value={minPrice}
              />
              <Text>до</Text>
              <input
                type="number"
                onChange={changeMaxPriceHandler}
                value={maxPrice}
              />
            </div>
          ) : (
            <>
              {data.map((el, id) => (
                <div className={s.input} key={id}>
                  <Checkbox onChange={checkboxHandler} value={el.value} />
                  <Text>{el.value}</Text>
                </div>
              ))}
            </>
          )}
        </div>
      )}
      <div className={s.line}></div>
    </div>
  );
}
