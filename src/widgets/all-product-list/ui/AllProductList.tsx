import { AdminProductCard } from 'entities/admin-product-card'

import type { ProductList } from 'shared/types/ProductTypes'

import s from './AllPoductList.module.scss'

export function AllProductList({ data }: ProductList) {
  return (
    <div className={s.container}>
      {data.map((el) => (
        <AdminProductCard
          key={el.id}
          id={el.id}
          img={el.img}
          title={el.title}
          price={el.price}
          oldPrice={el.oldPrice}
          productRating={el.productRating}
        />
      ))}
    </div>
  )
}
