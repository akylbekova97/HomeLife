import { useEffect } from 'react'
import s from './Modal.module.scss'

export function Modal({ isOpen, onClose, children }) {
	useEffect(() => {
		//закрывает модалку нажатем кнопку Esc
		const handleEsc = (e) => {
			if (e.key === 'Escape') {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEsc)
			//отл прокрутки страницы модалки
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.removeEventListener('keydown', handleEsc)
			document.body.style.overflow = ''
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	//клик по фону закрывает модалку
	const handleClickOutside = (e) => {
		if (e.target.classList.contains(s.backdrop)) {
			onClose()
		}
	}

	return (
		<div className={s.backdrop} onClick={handleClickOutside}>
			<div className={s.modal}>
				<button className={s.closeBtn} onClick={onClose}>
					✕
				</button>

				<div className={s.content}>{children}</div>
			</div>
		</div>
	)
}
