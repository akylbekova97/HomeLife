import { useState } from 'react'

import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text'
import { Checkbox } from 'shared/ui/Сheckbox/Checkbox'

import s from './FilterComponent.module.scss'

interface FilterDataTypes {
  id: string
  value: string
}

interface Props {
  title: string
  data?: FilterDataTypes[]
}

export function FilterComponent({ title, data }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={s.container}>
      <div
        className={s.title}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AppLink size="sm-16">{title}</AppLink>
        {isOpen ? <span>∧</span> : <span>∨</span>}
      </div>
      {isOpen && (
        <div className={s.content}>
          {title === 'Цена' ? (
            <div className={s.inputPrice}>
              <Input
                placeholder={'от'}
                type="number"
              />
              <Input
                placeholder={'до'}
                type="number"
              />
            </div>
          ) : (
            <>
              {data?.map((el, id) => (
                <div
                  className={s.text}
                  key={id}
                >
                  <Checkbox value={el.value} />
                  <Text size="sm-14">{el.value}</Text>
                </div>
              ))}
            </>
          )}
        </div>
      )}
      <hr />
    </div>
  )
}
