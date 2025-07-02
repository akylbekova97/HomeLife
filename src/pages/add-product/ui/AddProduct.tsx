import { AddProductForm } from 'widgets/add-product-form'
import type { AddProductData } from 'widgets/add-product-form/types/types'

import { Space } from 'shared/ui/Space/Space'

import s from './AddProduct.module.scss'

export function AddProduct() {
  const handleSubmit = (formData: AddProductData) => {
    console.log(formData)
  }

  return (
    <section className={s.container}>
      <AddProductForm onSubmit={handleSubmit} />
      <Space h={120} />
    </section>
  )
}
