import clsx from 'clsx'

import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text'

import s from './AboutBlock.module.scss'

interface Props {
  isError: boolean
  aboutTitle: string
  aboutText: string
  onChange: (about: { aboutTitle: string; aboutText: string }) => void
}

export function AboutBlock({
  aboutTitle,
  aboutText,
  onChange,
  isError,
}: Props) {
  return (
    <div className={clsx(s.container, isError && s.error)}>
      <Text>О товаре:</Text>
      <Input
        value={aboutTitle}
        onChange={(e) => onChange({ aboutTitle: e.target.value, aboutText })}
        placeholder="Заголовок о товаре"
      />
      <textarea
        placeholder="Описание или информация о товаре"
        value={aboutText}
        onChange={(e) => onChange({ aboutTitle, aboutText: e.target.value })}
      />
    </div>
  )
}
