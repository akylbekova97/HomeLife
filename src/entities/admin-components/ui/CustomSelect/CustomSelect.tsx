import clsx from 'clsx'

import { useState } from 'react'

import s from './CustomSelect.module.scss'

interface Props {
  data: string[]
  label: string
  value: string | null
  isError: boolean
  onChange: (value: string) => void
}

export function CustomSelect({ data, label, value, onChange, isError }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (el: string) => {
    onChange(el)
    setIsOpen(false)
  }

  return (
    <div className={clsx(s.container, isError && s.error)}>
      <div
        className={s.selectHeader}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {value || label}
        <span className={s.arrow}>{isOpen ? '∧' : '∨'}</span>
      </div>

      {isOpen && (
        <ul className={s.ul}>
          {data.map((el) => (
            <li
              key={el}
              className={`${s.selectOption} ${value === el ? 'active' : ''}`}
              onClick={() => handleSelect(el)}
            >
              {el}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
