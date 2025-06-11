import { BASE_URL } from 'shared/model/baseUrl'

interface Props extends RequestInit {
  url: string
}

export async function baseApi<T>({ url, ...options }: Props): Promise<T> {
  const response = await fetch(BASE_URL + url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`Ошибка запроса ${response.status}`)
  }

  return response.json() as Promise<T>
}
