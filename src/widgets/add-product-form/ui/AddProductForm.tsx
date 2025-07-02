import { type FormEvent, useState } from 'react'

import {
  AboutBlock,
  CharacteristicsBlock,
  ColorPicker,
  ImageUpload,
  PriceBlock,
} from 'entities/add-product-components'
import { CustomSelect } from 'entities/admin-inputs'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Input } from 'shared/ui/Input/Input'
import { Title } from 'shared/ui/Text'

import type { AddProductData } from '../types/types'

import s from './AddProductForm.module.scss'

interface Props {
  onSubmit?: (formData: AddProductData) => void
}

const brands = ['Okami', 'Deerma', 'Bosch', 'Xiaomi', 'Tefal']
const categories = [
  'Микроволновые печи',
  'Холодильники и Морозильные камеры',
  'Блендеры',
  'Соковыжималки',
  'Пылесосы и аксессуары',
  'Пароочистители',
  'Фены Расчески и Стайлеры',
  'Газовые и электрические плиты',
  'Телевизоры и аксессуары',
]

export function AddProductForm({ onSubmit }: Props) {
  const [promotion, setPromotion] = useState(false)

  const [formData, setFormData] = useState<AddProductData>({
    img: '',
    title: '',
    price: '',
    oldPrice: '',
    productRating: '',
    color: [],
    Characteristics: [],
    About: {
      aboutTitle: '',
      aboutText: '',
    },
    brand: null,
    category: null,
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onSubmit?.(formData)

    setFormData({
      img: '',
      title: '',
      price: '',
      oldPrice: '',
      productRating: '',
      color: [],
      Characteristics: [],
      About: {
        aboutTitle: '',
        aboutText: '',
      },
      brand: null,
      category: null,
    })

    setPromotion(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={s.container}
    >
      <Title size="md-28">Добавить товар📦 </Title>
      <Input
        value={formData.title}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, title: e.target.value }))
        }
        placeholder="Название товара"
      />

      <CustomSelect
        label="Бренд товара"
        data={brands}
        value={formData.brand}
        onChange={(selectedBrand) =>
          setFormData((prev) => ({ ...prev, brand: selectedBrand }))
        }
      />

      <CustomSelect
        label="Категории"
        data={categories}
        value={formData.category}
        onChange={(selectedCategory) =>
          setFormData((prev) => ({ ...prev, category: selectedCategory }))
        }
      />

      <PriceBlock
        price={formData.price}
        oldPrice={formData.oldPrice}
        promotion={promotion}
        onPriceChange={(val) =>
          setFormData((prev) => ({ ...prev, price: val }))
        }
        onOldPriceChange={(val) =>
          setFormData((prev) => ({ ...prev, oldPrice: val }))
        }
        onTogglePromotion={() => setPromotion((prev) => !prev)}
      />

      <Input
        value={formData.productRating}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            productRating: Number(e.target.value),
          }))
        }
        type="number"
        placeholder="Рейтинг товара"
      />

      <ColorPicker
        colors={formData.color}
        onChange={(newColors) =>
          setFormData((prev) => ({ ...prev, color: newColors }))
        }
      />

      <CharacteristicsBlock
        characteristics={formData.Characteristics}
        onChange={(updated) =>
          setFormData((prev) => ({ ...prev, Characteristics: updated }))
        }
      />

      <AboutBlock
        aboutTitle={formData.About.aboutTitle}
        aboutText={formData.About.aboutText}
        onChange={(updated) =>
          setFormData((prev) => ({ ...prev, About: updated }))
        }
      />

      <ImageUpload
        img={formData.img}
        onChange={(base64) => setFormData((prev) => ({ ...prev, img: base64 }))}
      />

      <AppButton
        type="submit"
        variant="button"
      >
        Готово
      </AppButton>
    </form>
  )
}
