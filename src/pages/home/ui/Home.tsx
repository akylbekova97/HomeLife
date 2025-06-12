import { useEffect } from 'react'

import { ProductDay } from 'widgets/product-day'

import { useFetch } from 'shared/hooks/useFetch'

export function Home() {
  // пример запроса  (jsonplaceholder)
  const { data, error, isLoading, request } = useFetch<[]>()

  useEffect(() => {
    request('/users')
    // request('/product/all')
  }, [])
  console.log(data, error, isLoading)

  return (
    <div>
      <ProductDay />
    </div>
  )
}
