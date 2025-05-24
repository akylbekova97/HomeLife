import { ProductCatd } from "../../ProductCatd";
import s from "./ProductList.module.scss";

export function ProductList({ data }) {
  return (
    <div className={s.container}>
      {data.map((el) => (
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
