import { useState } from 'react'

import s from './Counter.module.scss'

interface Props {
  count: number
}

export function Counter({ count }: Props) {
  const [value, setValue] = useState<number>(count)

  const incrementFunc = () => setValue((prev) => (prev ?? 0) + 1)

  const decrementFunc = () =>
    setValue((prev) => (prev && prev > 1 ? prev - 1 : prev))

  return (
    <div className={s.counter}>
      <span onClick={decrementFunc}>-</span>
      <p>{value}</p>
      <span onClick={incrementFunc}>+</span>
    </div>
  )
}
