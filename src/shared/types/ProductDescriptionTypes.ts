export interface Characteristics {
  title: string
  value: string
}

export interface About {
  About: {
    aboutTitle: string
    aboutText: string
  }
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
  About: {
    aboutTitle: string
    aboutText: string
  }
}

export interface ProductDescriptionTypes {
  data: DescriptionTypes
}

export interface CharacteristicsTypes {
  Characteristics: Characteristics[]
}
