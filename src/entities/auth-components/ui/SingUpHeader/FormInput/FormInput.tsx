import { type ChangeEvent, memo } from 'react'

import { Input } from '../../../../../shared/ui/Input/Input'
import { Text } from '../../../../../shared/ui/Text'

interface Props {
  error?: string | null
  placeholder?: string
  value?: string
  type?: string
  checked?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const FormInputComponent = ({
  type,
  error,
  placeholder,
  value,
  onChange,
}: Props) => {
  return (
    <div>
      {error && <Text color="red">{error}</Text>}

      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

export const FormInput = memo(FormInputComponent)
