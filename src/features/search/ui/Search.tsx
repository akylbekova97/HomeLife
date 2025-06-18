import icon from 'shared/assets/icons/seorchIcon.svg'
import { Input } from 'shared/ui/Input/Input'

import s from './Search.module.scss'

export function Search() {
  return (
    <form className={s.container}>
      <Input rightIcon={icon} />
    </form>
  )
}
