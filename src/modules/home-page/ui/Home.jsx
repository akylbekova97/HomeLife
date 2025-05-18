import { ProductList } from "../../Product-components/ProductList";
import { Space } from "../../../shared/components/ui/Space/Space";
import { Title } from "../../../shared/components/ui/Text";
import { ProductOfTheDay } from "../../product-of-the-day";
import { Data, PromotionData } from "../api";

import s from "./Home.module.scss";

export function Home() {
  return (
    <>
      <ProductOfTheDay />
      <Space h={100} />

      <div className={s.ProductList}>
        <Title size="xl-36">Новинки</Title>
        <Space h={30} />
        <ProductList data={Data} />
      </div>
      <Space h={90} />

      <div className={s.ProductList}>
        <Title size="xl-36">Популярные</Title>
        <Space h={30} />
        <ProductList data={Data} />
      </div>
      <Space h={90} />

      <div className={s.ProductList}>
        <Title size="xl-36">Акции</Title>
        <Space h={30} />
        <ProductList data={PromotionData} />
      </div>
      <Space h={90} />
    </>
  );
}
