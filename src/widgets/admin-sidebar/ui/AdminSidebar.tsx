import { Sidebar } from 'entities/sidebar'

import addProductIcon from 'shared/assets/icons/addProductIcon.svg'
import applicationIcon from 'shared/assets/icons/aplicatinonsIcon.svg'
import promotionIcon from 'shared/assets/icons/promotionIcon.svg'
import { Title } from 'shared/ui/Text'

import s from './AdminSidebar.module.scss'

export function AdminSidebar() {
  return (
    <div className={s.container}>
      <Title size="md-20">Админ панель</Title>
      <hr />

      <Sidebar
        to="/admin/add-product"
        label="Добавить товар"
        icon={addProductIcon}
      />

      <Sidebar
        to="/admin/add-promotion"
        label="Добавить акции"
        icon={promotionIcon}
      />

      <Sidebar
        to="/admin/aplications"
        label="Заявки"
        icon={applicationIcon}
      />

      <Sidebar
        to="/admin/products"
        label="Все товары"
        icon={addProductIcon}
      />

      <Sidebar
        to="/admin/promotions"
        label="Все акции"
        icon={addProductIcon}
      />
    </div>
  )
}
