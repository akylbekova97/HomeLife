import WhatsApp from 'shared/assets/icons/WhatsApp.svg'
import Telegram from 'shared/assets/icons/telegram.svg'
import { AppLink } from 'shared/ui/AppLink/AppLink'

import s from './Contacts.module.scss'

export function Contacts() {
  return (
    <div className={s.container}>
      <AppLink
        to="#"
        size="sm-16"
      >
        <img
          src={WhatsApp}
          alt="WhatsApp"
        />
        0500743440 <br />
        0770161681
      </AppLink>

      <AppLink
        to="#"
        size="sm-16"
      >
        <img
          src={Telegram}
          alt="Telegram"
        />
        0771743440
      </AppLink>

      <AppLink
        to="#"
        size="sm-16"
      >
        Abdivaliev.2017@gmail.com
      </AppLink>
    </div>
  )
}
