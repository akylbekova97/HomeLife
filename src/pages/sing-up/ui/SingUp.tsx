import { useState } from 'react'

import { SingUpForm } from 'widgets/sing-up-form'
import type { SignUpDatatypes } from 'widgets/sing-up-form/types'

import { LoginModal } from 'shared/ui/LoginModal/LoginModal'
import { Modal } from 'shared/ui/Modal/Modal'

export function SingUp() {
  const [isOpen, setIsOpen] = useState(true)
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)

  const handleSubmit = (formData: SignUpDatatypes) => {
    try {
      //   await SingUp(formData).unwrap()
      console.log(formData)
      setIsFormOpen(true)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      {isFormOpen ? <LoginModal /> : <SingUpForm onSubmit={handleSubmit} />}
    </Modal>
  )
}
