export interface AddProductData {
  img: string
  title: string
  price: string
  oldPrice?: string
  productRating: number | string
  color: string[]
  Characteristics: Array<{
    title: string
    value: string
  }>
  About: {
    aboutTitle: string
    aboutText: string
  }
  brand: string | null
  category: string | null
}
