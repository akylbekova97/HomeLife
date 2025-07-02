import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './ColorPicker.module.scss'

interface Props {
  colors: string[]
  onChange: (colors: string[]) => void
}

export function ColorPicker({ colors, onChange }: Props) {
  const handleColorChange = (index: number, value: string) => {
    const updated = [...colors]
    updated[index] = value
    onChange(updated)
  }

  return (
    <div className={s.container}>
      <AppButton
        variant="border"
        type="button"
        onClick={() => onChange([...colors, '#f9f9f9'])}
      >
        {colors.length === 0 ? 'Добавить цвета товара' : '+ Добавить ещё'}
      </AppButton>

      {colors.map((color, index) => (
        <input
          key={index}
          type="color"
          value={color}
          onChange={(e) => handleColorChange(index, e.target.value)}
        />
      ))}
    </div>
  )
}
