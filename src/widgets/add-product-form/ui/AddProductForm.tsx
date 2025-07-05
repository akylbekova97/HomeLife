import React, { type FormEvent, useState } from 'react'

import {
  AboutBlock,
  CharacteristicsBlock,
  ColorPicker,
  ImageUpload,
  PriceBlock,
} from 'entities/add-product-components'
import { CustomSelect } from 'entities/admin-components'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Input } from 'shared/ui/Input/Input'

import type { AddProductData, ErrorType } from '../types/types'

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

  const [error, setError] = useState<ErrorType>({
    img: false,
    title: false,
    price: false,
    productRating: false,
    color: false,
    Characteristics: false,
    About: false,
    brand: false,
    category: false,
  })

  const handleChange = (name: keyof AddProductData) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [name]: e.target.value }))
      resetErrors()
    }
  }

  const handleSimpleChange = <K extends keyof AddProductData>(
    key: K,
    value: AddProductData[K],
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
    resetErrors()
  }

  const resetErrors = () => {
    setError({
      img: false,
      title: false,
      price: false,
      productRating: false,
      color: false,
      Characteristics: false,
      About: false,
      brand: false,
      category: false,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formData.title.trim() === '') {
      setError((prev) => ({ ...prev, title: true }))
      return
    } else if (formData.brand === null) {
      setError((prev) => ({ ...prev, brand: true }))
      return
    } else if (formData.category === null) {
      setError((prev) => ({ ...prev, category: true }))
      return
    } else if (formData.price.length === 0) {
      setError((prev) => ({ ...prev, price: true }))
      return
    } else if (!formData.productRating) {
      setError((prev) => ({ ...prev, productRating: true }))
      return
    } else if (formData.color.length === 0) {
      setError((prev) => ({ ...prev, color: true }))
      return
    } else if (
      formData.Characteristics.length === 0 ||
      formData.Characteristics[0].title.trim() === '' ||
      formData.Characteristics[0].value.trim() === ''
    ) {
      setError((prev) => ({ ...prev, Characteristics: true }))
      return
    } else if (
      formData.About.aboutText.trim() === '' ||
      formData.About.aboutTitle.trim() === ''
    ) {
      setError((prev) => ({ ...prev, About: true }))
      return
    } else if (!formData.img) {
      setError((prev) => ({ ...prev, img: true }))
      return
    } else {
      onSubmit?.(formData)
    }

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

    resetErrors()

    setPromotion(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={s.container}
    >
      <h1>Добавить товар📦 </h1>
      <Input
        isError={error.title}
        value={formData.title}
        onChange={handleChange('title')}
        placeholder="Название товара"
      />

      <CustomSelect
        isError={error.brand}
        label="Бренд товара"
        data={brands}
        value={formData.brand}
        onChange={(e) => handleSimpleChange('brand', e)}
      />

      <CustomSelect
        isError={error.category}
        label="Категории"
        data={categories}
        value={formData.category}
        onChange={(e) => handleSimpleChange('category', e)}
      />

      <PriceBlock
        isError={error.price}
        price={formData.price}
        oldPrice={formData.oldPrice}
        promotion={promotion}
        onPriceChange={(val) => handleSimpleChange('price', val)}
        onOldPriceChange={(val) => handleSimpleChange('oldPrice', val)}
        onTogglePromotion={() => setPromotion((prev) => !prev)}
      />

      <Input
        isError={error.productRating}
        value={formData.productRating}
        onChange={handleChange('productRating')}
        type="number"
        placeholder="Рейтинг товара"
      />

      <ColorPicker
        colors={formData.color}
        onChange={(e) => handleSimpleChange('color', e)}
        isError={error.color}
      />

      <CharacteristicsBlock
        isError={error.Characteristics}
        characteristics={formData.Characteristics}
        onChange={(e) => handleSimpleChange('Characteristics', e)}
      />

      <AboutBlock
        isError={error.About}
        aboutTitle={formData.About.aboutTitle}
        aboutText={formData.About.aboutText}
        onChange={(e) => handleSimpleChange('About', e)}
      />

      <ImageUpload
        isError={error.img}
        img={formData.img}
        onChange={(e) => handleSimpleChange('img', e)}
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
