import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Text } from 'shared/ui/Text'

import s from './Sidebar.module.scss'

interface Props {
  label: string
  icon: string
  to: string
}

export function Sidebar({ label, icon, to }: Props) {
  return (
    <AppLink
      to={to}
      className={s.content}
    >
      <Text>{label}</Text>

      <img
        src={icon}
        alt={label}
      />
    </AppLink>
  )
}
