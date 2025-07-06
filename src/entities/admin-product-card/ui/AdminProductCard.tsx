import { Color } from 'shared/ui/Color/Color'
import { Price } from 'shared/ui/Price/Price'
import { Rating } from 'shared/ui/Rating/Rating'
import { Title } from 'shared/ui/Text'

import s from './AdminProductCard.module.scss'

const color = ['(80, 140, 2)', '(820, 10, 902)', '(100, 40, 2)']

interface Props {
  id: string
  img: string
  title: string
  price: string
  oldPrice?: string
  productRating: number
}

export function AdminProductCard({
  img,
  title,
  price,
  oldPrice,
  productRating,
}: Props) {
  return (
    <div className={s.container}>
      <img
        src={img}
        alt={'product image'}
      />
      <Title
        className={s.title}
        size="sm-14"
      >
        {title}
      </Title>

      <Price
        className={s.price}
        price={price}
        oldPrice={oldPrice}
      />

      <Rating rating={productRating} />

      <Color
        className={s.colors}
        color={color}
      />

      {oldPrice ? 'Есть' : 'Нет'}
    </div>
  )
}
