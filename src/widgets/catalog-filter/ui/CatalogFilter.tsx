import { FilterComponent } from 'entities/filter-component'

import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './CatalogFilter.module.scss'

interface Data {
  id: string
  value: string
}

interface Props {
  DataBrand: Data[]
  DataType: Data[]
  DataPower: Data[]
}

export function CatalogFilter({ DataBrand, DataType, DataPower }: Props) {
  return (
    <div className={s.filter}>
      <FilterComponent
        title={'Бренд'}
        data={DataBrand}
      />
      <FilterComponent title={'Цена'} />
      <FilterComponent
        title={'Тип'}
        data={DataType}
      />
      <FilterComponent
        title={'Потребляемая мощность'}
        data={DataPower}
      />
      <AppButton variant="button">Подобрать</AppButton>
      <AppButton variant="border">Сбросить</AppButton>
    </div>
  )
}
