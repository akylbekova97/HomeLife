import clsx from 'clsx'

import s from './AppButton.module.scss'
export function AppButton({
	onClick,
	children,
	variant = 'border' | 'button',
	className,
	type,
	...props
}) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={clsx(s[variant], className)}
			{...props}
		>
			{children}
		</button>
	)
}
