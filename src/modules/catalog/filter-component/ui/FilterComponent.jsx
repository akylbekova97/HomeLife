import { Checkbox } from "../../../../shared/components/checkbox";
import { Text, Title } from "../../../../shared/components/ui/Text";
import { useContext, useState } from "react";
import s from "./FilterComponent.module.scss";
import { Input } from "../../../../shared/components/ui/input/ui/Input";
export function FilterComponent({
  title,
  data,
  isSlaider = false,
  onBrandChange,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const changeMinPriceHandler = (e) => {
    setMinPrice(e.target.value);
    onBrandChange({ min: e.target.value, max: maxPrice });
  };
  const changeMaxPriceHandler = (e) => {
    setMaxPrice(e.target.value);
    onBrandChange({ min: minPrice, max: e.target.value });
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
                  <Checkbox onChange={changeMaxPriceHandler} value={el.value} />
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
