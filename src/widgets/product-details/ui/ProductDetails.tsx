import { ProductDescription } from 'entities/product-components'

import type { ProductDescriptionTypes } from 'shared/types/ProductDescriptionTypes'

import s from './ProductDetails.module.scss'

export function ProductDetails({ data }: ProductDescriptionTypes) {
  const { img, title } = data

  return (
    <div className={s.container}>
      <img
        className={s.img}
        src={img}
        alt={`${title}`}
      />

      <ProductDescription data={data} />
    </div>
  )
}
