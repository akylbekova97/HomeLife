import { useEffect } from 'react'

import { ProductDay } from 'widgets/product-day'
import { ProductList } from 'widgets/product-list/ui/ProductList'

import { useFetch } from 'shared/hooks/useFetch'
import { Space } from 'shared/ui/Space/Space'

import { Data, PromotionData } from '../api'

import s from './Home.module.scss'

export function Home() {
  // пример запроса  (jsonplaceholder)
  const { data, error, isLoading, request } = useFetch<[]>()

  useEffect(() => {
    request('/users')
    // request('/product/all')
  }, [])
  console.log(data, error, isLoading)

  return (
    <>
      <ProductDay />

      <section className={s.products}>
        <ProductList
          title="Новинки"
          data={Data}
        />

        <Space h={60} />

        <ProductList
          title="Популярные"
          data={Data}
        />

        <Space h={60} />

        <ProductList
          title="Акции"
          data={PromotionData}
        />

        <Space h={70} />
      </section>
    </>
  )
}
