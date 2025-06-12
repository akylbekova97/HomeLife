import { Text, Title } from 'shared/ui/Text'

import s from './Price.module.scss'

interface Props {
  oldPrice?: string
  price: string
  promotion?: string
  className?: string
}

export function Price({ oldPrice, price, promotion, className }: Props) {
  return (
    // подключи свои стили ↓
    <div className={className}>
      <div className={s.flex}>
        {oldPrice && (
          <Text
            size="sm-14"
            className={s.oldPrice}
          >
            {oldPrice} сом
          </Text>
        )}
        <Title
          className={s.p}
          size="sm-18"
        >
          {price} сом
        </Title>
      </div>
      {promotion && <div className={s.promotion}>{promotion}</div>}
    </div>
  )
}
