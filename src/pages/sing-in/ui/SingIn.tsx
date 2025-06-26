import { useState } from 'react'

import { SingInForm } from 'widgets/sing-in-form'

import { LoginModal } from 'shared/ui/LoginModal/LoginModal'
import { Modal } from 'shared/ui/Modal/Modal'

export function SingIn() {
  const [isOpen, setIsOpen] = useState(true)
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)

  const handleSubmit = async (data: { email: string; password: string }) => {
    try {
      //   await authUser(data).unwrap()
      console.log(data)
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
      {isFormOpen ? <LoginModal /> : <SingInForm onSubmit={handleSubmit} />}
    </Modal>
  )
}
