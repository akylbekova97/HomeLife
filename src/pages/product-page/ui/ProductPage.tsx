import { Data } from 'pages/home/api'

import { AboutProduct } from 'widgets/about-product'
import { Characteristics } from 'widgets/characteristic'
import { ProductDetails } from 'widgets/product-details'
import { ProductList } from 'widgets/product-list'
import { Reviews } from 'widgets/reviews'

import { Space } from 'shared/ui/Space/Space'
import { Title } from 'shared/ui/Text'

import { CommentData, ProductIdData } from '../api'

import s from './ProductPage.module.scss'

export function ProductPage() {
  // const { id } = useParams()
  // const { data } = useGetProductByIdQuery({ id: id || '' })

  return (
    <section className={s.container}>
      <Title
        className={s.title}
        size="md-28"
      >
        Просмотр товара
      </Title>

      <Space h={30} />

      <ProductDetails data={ProductIdData} />

      <Space h={60} />

      <Characteristics Characteristics={ProductIdData.Characteristics} />

      <AboutProduct About={ProductIdData.About} />

      <Reviews data={CommentData} />

      <ProductList
        title="Похожие товары"
        data={Data}
      />

      <Space h={60} />
    </section>
  )
}
