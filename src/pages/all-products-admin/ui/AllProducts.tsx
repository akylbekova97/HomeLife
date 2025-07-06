import { Data } from 'pages/home/api'

import { AllProductList } from 'widgets/all-product-list'

import { Space } from 'shared/ui/Space/Space'
import { Title } from 'shared/ui/Text'

import s from './AllProducts.module.scss'

export function AllProducts() {
  return (
    <section className={s.container}>
      <Title>Все товары 📌</Title>
      <Space h={30} />
      <AllProductList data={Data} />
      <Space h={120} />
    </section>
  )
}
