import type { CharacteristicsTypes } from 'shared/types/ProductDescriptionTypes'
import { Text } from 'shared/ui/Text'

import s from './Characteristic.module.scss'

export function Characteristic({ Characteristics }: CharacteristicsTypes) {
  return (
    <>
      {Characteristics.map((el, ind) => (
        <div
          className={s.felx}
          key={ind}
        >
          <Text size="sm-14">{el.title}</Text>
          <Text size="sm-14">{el.value}</Text>
        </div>
      ))}
    </>
  )
}
