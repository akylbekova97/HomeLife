import { Rating } from "react-simple-star-rating";

import { AppButton } from "../../../../shared/components/ui/button";
import { Title, Text } from "../../../../shared/components/ui/Text";
import s from "./ProductCard.module.scss";

export function ProductCatd({
  img,
  title,
  price,
  oldPrice,
  promotion,
  productRating,
}) {
  return (
    <div className={s.container}>
      <img src={img} alt={title} />

      <div className={s.content}>
        <Rating
          initialValue={productRating || 0}
          readonly
          allowFraction
          size={20}
        />

        <Title size="sm-14" className={s.title}>
          {title}
        </Title>

        <div className={s.price}>
          <div>
            {oldPrice && (
              <Text size="sm-14" className={s.oldPrice}>
                {oldPrice} сом
              </Text>
            )}
            <Title size="sm-18">{price} сом</Title>
          </div>
          {promotion && <div className={s.promotion}>{promotion}</div>}
        </div>

        <AppButton variant="button" className={s.btn}>
          Купить
        </AppButton>
      </div>
    </div>
  );
}
