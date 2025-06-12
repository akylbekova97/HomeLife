import { type MouseEvent, type ReactNode, useEffect } from 'react'

import s from './Modal.module.scss'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    // Функция для закрытия модалки при нажатии на Escape
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    // Добавляем слушатель клавиши Escape
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }

    // При размонтировании или закрытии модалки:
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  // Закрытие модалки по клику вне окна (по фону)
  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains(s.backdrop)) {
      onClose()
    }
  }

  return (
    <div
      className={s.backdrop}
      onClick={handleClickOutside}
    >
      <div className={s.modal}>
        <button
          className={s.closeBtn}
          onClick={onClose}
        >
          ✕
        </button>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  )
}
