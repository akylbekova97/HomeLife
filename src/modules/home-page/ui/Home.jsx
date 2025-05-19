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
      <Space h={80} />

      <div className={s.ProductList}>
        <Title className={s.title} size="xl-36">
          Новинки
        </Title>
        <ProductList data={Data} />
      </div>
      <Space h={60} />

      <div className={s.ProductList}>
        <Title className={s.title} size="xl-36">
          Популярные
        </Title>
        <ProductList data={Data} />
      </div>
      <Space h={60} />

      <div className={s.ProductList}>
        <Title className={s.title} size="xl-36">
          Акции
        </Title>
        <ProductList data={PromotionData} />
      </div>
      <Space h={70} />
    </>
  );
}
