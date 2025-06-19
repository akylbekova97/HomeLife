import { CatalogFilter } from 'widgets/catalog-filter'
import { ProductList } from 'widgets/product-list'

import { BaseData, DataBrand, DataPower, DataType } from '../api'

import s from './Catalog.module.scss'

export function Catalog() {
  return (
    <section className={s.container}>
      <CatalogFilter
        DataBrand={DataBrand}
        DataType={DataType}
        DataPower={DataPower}
      />
      <div className={s.products}>
        <ProductList data={BaseData} />
      </div>
    </section>
  )
}
