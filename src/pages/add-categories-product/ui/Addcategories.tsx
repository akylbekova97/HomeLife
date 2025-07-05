import { AddComponents } from 'widgets/add-components-admin'

import s from './AddCategories.module.scss'

export function AddCategories() {
  const handleSubmit = (data: string[]) => {
    console.log(data)
  }

  return (
    <section className={s.container}>
      <AddComponents
        title="Добавить  категории товара 🎲"
        onSubmit={handleSubmit}
      />
    </section>
  )
}
