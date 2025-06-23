import { useState } from 'react'

import { ConfirmOrder } from 'features/confirm-order'
import type { FormData } from 'features/confirm-order/ui/ConfirmOrder'

import { Modal } from 'shared/ui/Modal/Modal'
import { Space } from 'shared/ui/Space/Space'
import { Title } from 'shared/ui/Text'

import s from './Order.module.scss'

export function Order() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const submitHandler = (formData: FormData) => {
    console.log('Submitted:', formData)
    setIsModalOpen(true)
  }

  return (
    <section className={s.container}>
      <Title size="md-28">Заполните форму</Title>
      <Space h={30} />

      <ConfirmOrder onSubmit={submitHandler} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Title size="sm-18">Ваш заказ успешно оформлен! ✅</Title>
      </Modal>
    </section>
  )
}
