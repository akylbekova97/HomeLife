import { HomeLink } from 'entities/home-link/ui/HomeLink'
import { ProductCard } from 'entities/product-card/ui/ProductCard'

import banner from 'shared/assets/imgs/homeBaner.svg'

import s from './ProductDay.module.scss'

export function ProductDay() {
  return (
    <div className={s.container}>
      <HomeLink />

      <div className={s.img}>
        <img
          src={banner}
          alt="home banner"
        />
      </div>

      <ProductCard
        data={{
          id: '1',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FWF2judaujT30K9sMf-tZFhMWpgP6xCemw&s',
          title: 'Пылесос Tefal Super',
          price: '17990',
          oldPrice: '19990',
          promotion: '-10%',
          productRating: 5,
        }}
      />
    </div>
  )
}
