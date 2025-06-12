import { Rating as StarRating } from 'react-simple-star-rating'

interface RatingProps {
  rating?: number
  onClick?: (rate: number) => void
  size?: number
  readonly?: boolean
}

export const Rating = ({
  rating = 0,
  onClick,
  size = 20,
  readonly = true,
}: RatingProps) => {
  return (
    <StarRating
      onClick={onClick}
      initialValue={rating}
      readonly={readonly}
      allowFraction
      size={size}
      transition
    />
  )
}
