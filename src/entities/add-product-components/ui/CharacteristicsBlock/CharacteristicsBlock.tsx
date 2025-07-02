import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Input } from 'shared/ui/Input/Input'

import s from './CharacteristicsBlock.module.scss'

interface Characteristic {
  title: string
  value: string
}

interface Props {
  characteristics: Characteristic[]
  onChange: (updated: Characteristic[]) => void
}

export function CharacteristicsBlock({ characteristics, onChange }: Props) {
  const updateItem = (index: number, key: 'title' | 'value', value: string) => {
    const updated = [...characteristics]
    updated[index][key] = value
    onChange(updated)
  }

  return (
    <div className={s.container}>
      {characteristics.map((el, index) => (
        <div
          className={s.inputs}
          key={index}
        >
          <Input
            placeholder="Ключ"
            value={el.title}
            onChange={(e) => updateItem(index, 'title', e.target.value)}
          />
          <Input
            placeholder="Значение"
            value={el.value}
            onChange={(e) => updateItem(index, 'value', e.target.value)}
          />
        </div>
      ))}

      <AppButton
        variant="border"
        type="button"
        onClick={() => onChange([...characteristics, { title: '', value: '' }])}
      >
        {characteristics.length === 0
          ? 'Добавить характеристику'
          : '+ Добавить ещё'}
      </AppButton>
    </div>
  )
}
