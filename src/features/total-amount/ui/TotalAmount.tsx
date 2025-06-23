import { basketData } from 'pages/basket/api'

import { Title } from 'shared/ui/Text'

export function TotalAmount() {
  const totalPrice = basketData.reduce((acc, item) => {
    const price = parseInt(item.price, 10) || 0
    return acc + price
  }, 0)

  return <Title size="sm-18">Итого: {totalPrice.toLocaleString()} сом</Title>
}
