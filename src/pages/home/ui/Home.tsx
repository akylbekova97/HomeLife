import { useEffect } from 'react'

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
      <h1>Home</h1>
    </div>
  )
}
