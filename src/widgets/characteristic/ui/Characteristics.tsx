import { Characteristic } from 'entities/characteristic'

import type { CharacteristicsTypes } from 'shared/types/ProductDescriptionTypes'
import { Title } from 'shared/ui/Text'

import s from './Characteristics.module.scss'

export function Characteristics({ Characteristics }: CharacteristicsTypes) {
  return (
    <>
      <div className={s.characteristics}>
        <Title
          className={s.title}
          size="md-20"
        >
          Основные характеристики
        </Title>
        <Characteristic Characteristics={Characteristics} />
      </div>
    </>
  )
}
