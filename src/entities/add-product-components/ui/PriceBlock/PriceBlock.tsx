import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text'

import s from './PriceBlock.module.scss'

interface Props {
  price: string
  oldPrice?: string
  promotion: boolean
  onPriceChange: (value: string) => void
  onOldPriceChange: (value: string) => void
  onTogglePromotion: () => void
}

export function PriceBlock({
  price,
  oldPrice,
  promotion,
  onPriceChange,
  onOldPriceChange,
  onTogglePromotion,
}: Props) {
  return (
    <div className={s.container}>
      {!promotion ? (
        <>
          <Input
            value={price}
            onChange={(e) => onPriceChange(e.target.value)}
            type="number"
            placeholder="Цена товара"
          />
          <i onClick={onTogglePromotion}>добавить акцию</i>
        </>
      ) : (
        <div className={s.inputs}>
          <Text>Акция на товар</Text>
          <Input
            placeholder="старая цена"
            type="number"
            value={oldPrice}
            onChange={(e) => onOldPriceChange(e.target.value)}
          />
          <Input
            value={price}
            onChange={(e) => onPriceChange(e.target.value)}
            placeholder="новая цена"
            type="number"
          />
        </div>
      )}
    </div>
  )
}
