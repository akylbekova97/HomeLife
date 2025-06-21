import { ProductCard } from 'entities/product-card/ui/ProductCard'

import type { ProductList } from 'shared/types/ProductTypes'
import { Title } from 'shared/ui/Text'

import s from './ProductList.module.scss'

export function ProductList({ title, data }: ProductList) {
  return (
    <section className={s.container}>
      <Title
        className={s.title}
        size="lg-30"
      >
        {title}
      </Title>
      <div className={s.content}>
        {data.map((el) => (
          <ProductCard
            key={el.id}
            data={el}
          />
        ))}
      </div>
    </section>
  )
}
