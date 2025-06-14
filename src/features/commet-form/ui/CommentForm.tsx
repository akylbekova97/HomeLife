import { useState } from 'react'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Rating } from 'shared/ui/Rating/Rating'
import { Text } from 'shared/ui/Text'

import s from './CommentForm.module.scss'

interface Props {
  onSubmit?: (data: data) => void
  setIsOpen?: (value: boolean) => void
}

interface data {
  rating: number
  reviewText: string
}

export function CommentForm({ onSubmit, setIsOpen }: Props) {
  const [formData, setFormData] = useState<data>({
    rating: 0,
    reviewText: '',
  })

  const [error, setEror] = useState<string | null>(null)

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formData.rating === 0) {
      setEror('Поставьте оценку перед отправкой')
      return
    } else if (!formData.reviewText.trim()) {
      setEror('Комментарий не должен быть пустым')
      return
    } else {
      onSubmit?.(formData)
    }

    setFormData({
      rating: 0,
      reviewText: '',
    })
    setIsOpen?.(false)
    setEror(null)
  }

  return (
    <form
      className={s.form}
      onSubmit={submitHandler}
    >
      {error && (
        <Text
          color="red"
          className={s.error}
        >
          {error}
        </Text>
      )}

      <Rating
        rating={formData.rating}
        onClick={(value) => setFormData((prev) => ({ ...prev, rating: value }))}
        size={25}
        readonly={false}
      />

      <textarea
        className={s.textarea}
        placeholder="Напишите ваш отзыв..."
        value={formData.reviewText}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, reviewText: e.target.value }))
        }
      />

      <div>
        <AppButton
          type="submit"
          variant="button"
        >
          Разместить отзыв
        </AppButton>
      </div>
    </form>
  )
}
