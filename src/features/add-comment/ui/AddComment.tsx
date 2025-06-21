import { useState } from 'react'

import { CommentForm } from 'features/commet-form'

import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Title } from 'shared/ui/Text'

import s from './AddComment.module.scss'

export function AddComment() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleSubmit = async () => {
    {
      try {
        // await ... (formData).unwrap()
        setIsOpen((prev) => !prev)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
      <div className={s.flex}>
        <Title size="md-28">
          {isOpen ? 'Написать свой отзыв' : 'Отзывы покупателей '}
        </Title>

        <AppLink
          color={'blue'}
          to={'reviews'}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <b>⨉</b> : 'Написать отзыв'}
        </AppLink>
      </div>

      {isOpen && (
        <>
          <CommentForm
            onSubmit={handleSubmit}
            setIsOpen={setIsOpen}
          />
        </>
      )}
    </>
  )
}
