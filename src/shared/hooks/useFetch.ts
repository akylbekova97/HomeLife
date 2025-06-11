import { useState } from 'react'

import { baseApi } from 'shared/lib/baseApi'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export function useFetch<T = unknown>() {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const request = async (
    url: string,
    method: Method = 'GET',
    body?: unknown,
  ) => {
    setIsLoading(true)
    setError(null)
    try {
      const result = await baseApi<T>({
        url,
        method,
        ...(body ? { body: JSON.stringify(body) } : {}),
      })
      setData(result)
    } catch (err: unknown) {
      if (typeof err === 'string') {
        setError(err)
      } else if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Неизвестная ошибка')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return { data, error, isLoading, request }
}
