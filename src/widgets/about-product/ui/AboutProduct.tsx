import type { About } from 'shared/types/ProductDescriptionTypes'
import { Space } from 'shared/ui/Space/Space'
import { Text, Title } from 'shared/ui/Text'

import s from './AboutProduct.module.scss'

export function AboutProduct({ About }: About) {
  return (
    <>
      <Space h={60} />

      <Title size="md-28">О товаре</Title>
      <Space h={30} />
      <div className={s.about}>
        <Title
          size="md-20"
          className={s.text}
        >
          {About.aboutTitle}
        </Title>
        <Text size="sm-14">{About.aboutText}</Text>
      </div>

      <Space h={60} />
    </>
  )
}
