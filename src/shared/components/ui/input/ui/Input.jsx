import { clsx } from 'clsx'

import s from './Input.module.scss'

export const Input = ({
	isError,
	className,
	rightIcon,
	onRightClick,
	...props
}) => (
	<div className={clsx(s.wrapper)}>
		<input
			className={clsx(
				s.input,
				rightIcon && s.hasRightIcon,
				isError && s.error,
				className,
			)}
			{...props}
		/>

		{rightIcon && (
			<span className={s.iconRight} onClick={onRightClick}>
				{rightIcon}
			</span>
		)}
	</div>
)
