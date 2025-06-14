import type { About } from 'shared/types/ProductDescriptionTypes'
import { Space } from 'shared/ui/Space/Space'
import { Text, Title } from 'shared/ui/Text'

import s from './AboutProduct.module.scss'

interface Props {
  About: About
}

export function AboutProduct({ About }: Props) {
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
        <Text size="sm-16">{About.aboutText}</Text>
      </div>
    </>
  )
}
