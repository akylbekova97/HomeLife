import type { ProductTypes } from 'shared/types/ProductTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Price } from 'shared/ui/Price/Price'
import { Rating } from 'shared/ui/Rating/Rating'
import { Title } from 'shared/ui/Text/ui/Title/Title'

import s from './ProductCard.module.scss'

interface ProductCardTypes {
  data: ProductTypes
}

export function ProductCard({ data }: ProductCardTypes) {
  const { img, title, price, oldPrice, promotion, productRating } = data

  return (
    <div className={s.container}>
      <img
        src={img}
        alt={title}
      />

      <div className={s.content}>
        <Rating rating={productRating} />

        <Title
          size="sm-16"
          className={s.title}
        >
          {title}
        </Title>

        <Price
          className={s.price}
          price={price}
          oldPrice={oldPrice}
          promotion={promotion}
        />

        <AppButton
          variant="button"
          className={s.btn}
        >
          Купить
        </AppButton>
      </div>
    </div>
  )
}
