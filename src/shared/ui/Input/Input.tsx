import { clsx } from 'clsx'

import { type ChangeEvent, memo } from 'react'

import s from './Input.module.scss'

interface Props {
  className?: string
  placeholder?: string
  type?: string
  rightIcon?: boolean | string
  onRightClick?: () => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string
  checked?: boolean
}

export const InputComponent = ({
  className,
  rightIcon,
  placeholder,
  type,
  value,
  onRightClick,
  onChange,
}: Props) => (
  <>
    {/* <div className={clsx(s.wrapper)}> */}
    <input
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      className={clsx(s.input, rightIcon && s.hasRightIcon, className)}
    />

    {rightIcon && (
      <span
        className={s.iconRight}
        onClick={onRightClick}
      >
        {typeof rightIcon === 'string' ? (
          <img
            src={rightIcon}
            alt="icon"
          />
        ) : (
          rightIcon
        )}
      </span>
    )}
  </>
)

// import { memo, type ChangeEvent } from 'react'
// import { clsx } from 'clsx'

// import s from './Input.module.scss'

// interface Props {
//   isError?: boolean
//   className?: string
//   placeholder?: string
//   type?: string
//   rightIcon?: boolean | string
//   onRightClick?: () => void
//   onChange?: (e: ChangeEvent<HTMLInputElement>) => void
//   value?: string
//   checked?: boolean
//   defaultValue?: string
// }

// const InputComponent = ({
//   isError,
//   className,
//   rightIcon,
//   placeholder,
//   type = 'text',
//   value,
//   checked,
//   defaultValue,
//   onRightClick,
//   onChange,
// }: Props) => {
//   return (
//     < >
//       <input
//         value={value}
//         defaultValue={defaultValue}
//         placeholder={placeholder}
//         type={type}
//         checked={type === 'checkbox' ? checked : undefined}
//         onChange={onChange}
//         className={clsx(
//           s.input,
//           rightIcon && s.hasRightIcon,
//           isError && s.error,
//           className,
//         )}
//       />

//       {rightIcon && (
//         <span
//           className={s.iconRight}
//           onClick={onRightClick}
//         >
//           {typeof rightIcon === 'string' ? (
//             <img src={rightIcon} alt="icon" />
//           ) : (
//             rightIcon
//           )}
//         </span>
//       )}
//     </>
//   )
// }

export const Input = memo(InputComponent)
