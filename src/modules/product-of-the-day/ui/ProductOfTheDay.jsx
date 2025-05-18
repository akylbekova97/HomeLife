import { BannerImg } from '../../../shared/assets/imgs/BannerImg.jsx'
import { ProductCatd } from '../../Product-components/ProductCard/index.js'
import { AppLink } from '../../../shared/components/ui/AppLink'
import { Title } from '../../../shared/components/ui/Text'
import s from './ProductOfTheDay.module.scss'

export function ProductOfTheDay() {
	return (
		<div className={s.container}>
			<div className={s.link}>
				<AppLink size='md-16'>Телевизоры</AppLink>
				<AppLink size='md-16'>Бытовая техника</AppLink>
				<AppLink size='md-16'>Встраиваемая бытовая техника</AppLink>
				<AppLink size='md-16'>Мелкая бытовая техника</AppLink>
			</div>

			<div className={s.img}>
				<BannerImg />
			</div>

			<div className={s.product}>
				<Title size='md-20'>Товар дня</Title>
				<ProductCatd
					id='2'
					img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FWF2judaujT30K9sMf-tZFhMWpgP6xCemw&s'
					title='Пылесос Tefal Super'
					price='17990'
					oldPrice='19990'
					promotion='-10%'
				/>
			</div>
		</div>
	)
}
