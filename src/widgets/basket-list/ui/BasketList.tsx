import { BasketCard } from 'entities/basket-card'

import type { BasketTypes } from 'shared/types/BasketTypes'

import s from './BasketList.module.scss'

export function BasketList({ data }: BasketTypes) {
  return (
    <section className={s.container}>
      {data.map((el) => (
        <BasketCard
          key={el.id}
          data={el}
        />
      ))}
    </section>
  )
}
