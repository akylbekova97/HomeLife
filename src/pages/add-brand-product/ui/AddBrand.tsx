import { AddComponents } from 'widgets/add-components-admin'

import s from './AddBrand.module.scss'

export function AddBrand() {
  const handleSubmit = (brands: string[]) => {
    console.log(brands)
  }

  return (
    <section className={s.container}>
      <AddComponents
        title={'Добавить бренд товара 🔎'}
        onSubmit={handleSubmit}
      />
    </section>
  )
}
