import { clsx } from 'clsx'

import s from './Input.module.scss'

interface Props {
  isError?: boolean
  className?: string
  rightIcon?: boolean | string
  onRightClick?: () => void
}

export const Input = ({
  isError,
  className,
  rightIcon,
  onRightClick,
  ...props
}: Props) => (
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
      <span
        className={s.iconRight}
        onClick={onRightClick}
      >
        {typeof rightIcon === 'string' ? <img src={rightIcon} /> : rightIcon}
      </span>
    )}
  </div>
)
