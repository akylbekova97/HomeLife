import type { Characteristics } from 'shared/types/ProductDescriptionTypes'
import { Text, Title } from 'shared/ui/Text'

import s from './Characteristic.module.scss'

interface Props {
  Characteristics: Characteristics[]
}

export function Characteristic({ Characteristics }: Props) {
  return (
    <div className={s.characteristics}>
      <Title
        className={s.title}
        size="md-20"
      >
        Основные характеристики
      </Title>
      {Characteristics.map((el, ind) => (
        <div
          className={s.felx}
          key={ind}
        >
          <Text size="sm-16">{el.title}</Text>
          <Text size="sm-16">{el.value}</Text>
        </div>
      ))}
    </div>
  )
}
