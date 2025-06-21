export interface BasketDataTypes {
  id: string
  img: string
  title: string
  price: string
  oldPrice?: string
  promotion?: string
}

export interface BasketTypes {
  data: BasketDataTypes[]
}
