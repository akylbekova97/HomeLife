import { type FormEvent, useState } from 'react'

import { DataList } from 'entities/admin-components'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Input } from 'shared/ui/Input/Input'
import { Space } from 'shared/ui/Space/Space'

import s from './AddComponents.module.scss'

interface Props {
  title: string
  onSubmit: (data: string[]) => void
}

export function AddComponents({ onSubmit, title }: Props) {
  const [data, setData] = useState<string[]>([])
  const [brand, setBrand] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (brand.trim()) {
      setData([brand, ...data])
      onSubmit(data)
      setBrand('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={s.container}
    >
      <h1>{title}</h1>

      <div className={s.input}>
        <Input
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Введите..."
        />

        <AppButton
          type="submit"
          variant="button"
        >
          Готово
        </AppButton>
      </div>

      <DataList data={data} />

      <Space h={120} />
    </form>
  )
}
