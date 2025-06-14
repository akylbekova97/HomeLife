import { AddComment } from 'features/add-comment'
import { Comment } from 'features/comment'

import { Space } from 'shared/ui/Space/Space'

import s from './Reviews.module.scss'

interface PropsTypes {
  id: string
  author: string
  date: string
  commetText: string
  rating: number
}

interface Props {
  data: PropsTypes[]
}

export function Reviews({ data }: Props) {
  return (
    <>
      <AddComment />

      <div className={s.container}>
        {data?.map((el) => (
          <Comment
            key={el.id}
            data={el}
          />
        ))}
      </div>

      <Space h={60} />
    </>
  )
}
