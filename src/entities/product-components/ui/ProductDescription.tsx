import type { ProductDescriptionTypes } from 'shared/types/ProductDescriptionTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Color } from 'shared/ui/Color/Color'
import { Counter } from 'shared/ui/Counter/Counter'
import { Price } from 'shared/ui/Price/Price'
import { Rating } from 'shared/ui/Rating/Rating'
import { Space } from 'shared/ui/Space/Space'
import { Text, Title } from 'shared/ui/Text'

import s from './Productdescription.module.scss'

export function ProductDescription({ data }: ProductDescriptionTypes) {
  const { id, title, productRating, color, count, price, oldPrice, promotion } =
    data

  return (
    <div className={s.content}>
      <Title
        className={s.title}
        size="md-20"
      >
        {title}
      </Title>

      <Rating rating={productRating} />

      <Space h={15} />

      <Title size="sm-16">Цвет</Title>
      <Color color={color} />

      <Price
        className={s.price}
        price={price}
        oldPrice={oldPrice}
        promotion={promotion}
      />

      <Counter count={count} />

      <Text
        className={s.id}
        size="sm-14"
      >
        Код товара: {`${id}`}
      </Text>

      <AppButton
        className={s.btn}
        variant={'button'}
      >
        Добавить в корзину
      </AppButton>
    </div>
  )
}
