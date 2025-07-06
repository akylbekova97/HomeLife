import clsx from 'clsx'

import s from './Color.module.scss'

interface Props {
  color?: string[]
  className?: string
}

export function Color({ color, className }: Props) {
  return (
    <div className={clsx(s.color, className)}>
      {color?.map((el, ind) => (
        <div
          key={ind}
          style={{ background: `rgb${el}` }}
        />
      ))}
    </div>
  )
}
