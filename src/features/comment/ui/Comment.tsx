import { Rating } from 'shared/ui/Rating/Rating'
import { Text, Title } from 'shared/ui/Text'

import s from './Comment.module.scss'

interface PropsTypes {
  id: string
  author: string
  date: string
  commetText: string
  rating: number
}

interface Props {
  data: PropsTypes
}
export function Comment({ data }: Props) {
  const { author, date, rating, commetText } = data
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.text}>
          <Title size="sm-16">{author}</Title>
          <Text size="sm-12">{date}</Text>
        </div>
        <Rating rating={rating} />
      </div>

      <Text size="sm-14">{commetText}</Text>
    </div>
  )
}
