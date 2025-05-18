import { AppButton } from '../../../../shared/components/ui/button'
import { Title , Text} from '../../../../shared/components/ui/Text'
import s from './ProductCard.module.scss'

export function ProductCatd({ img, title, price, oldPrice, promotion }) {
	return (
		<div className={s.container}>
			<img src={img} alt={title} />

			<div className={s.content}>
				<Title size='sm-14' className={s.title}>
					{title}
				</Title>

				<div className={s.price}>
					<div>
						{oldPrice && (
							<Text size='sm-14' className={s.oldPrice}>
								{oldPrice} сом
							</Text>
						)}
						<Title size='sm-18'>{price} сом</Title>
					</div>
					{promotion && (
						<div className={s.promotion}>{promotion}</div>
					)}
				</div>

				<AppButton variant='button' className={s.btn}>
					Купить
				</AppButton>
			</div>
		</div>
	)
}
