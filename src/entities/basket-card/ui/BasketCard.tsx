import type { BasketDataTypes } from 'shared/types/BasketTypes'
import { Counter } from 'shared/ui/Counter/Counter'
import { Price } from 'shared/ui/Price/Price'
import { Title } from 'shared/ui/Text'

import s from './BasketCard.module.scss'

interface Props {
  data: BasketDataTypes
}

export function BasketCard({ data }: Props) {
  const { title, img, price, oldPrice } = data

  return (
    <>
      <b>⨉</b>

      <div className={s.container}>
        <img
          src={img}
          alt={title}
        />
        <div className={s.content}>
          <Title size="sm-16">{title}</Title>

          <Counter count={1} />

          <Price
            className={s.price}
            price={price}
            oldPrice={oldPrice}
          />
        </div>
        <b>⨉</b>
      </div>
    </>
  )
}
