export interface ProductTypes {
  id: string
  img: string
  title: string
  price: string
  oldPrice?: string
  promotion?: string
  productRating: number
}

export interface ProductList {
  title?: string
  data: ProductTypes[]
}
