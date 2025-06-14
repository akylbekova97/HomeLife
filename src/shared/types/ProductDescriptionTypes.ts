export interface Characteristics {
  title: string
  value: string
}

export interface About {
  aboutTitle: string
  aboutText: string
}

export interface DescriptionTypes {
  id: string
  img: string
  title: string
  productRating: number
  color?: string[]
  count: number
  price: string
  oldPrice?: string
  promotion?: string
  Characteristics: Characteristics[]
  About: About
}

export interface ProductDescriptionTypes {
  data: DescriptionTypes
}

export interface CharacteristicsTypes {
  Characteristics: Characteristics[]
  About: About
}
