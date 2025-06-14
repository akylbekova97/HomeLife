import { Characteristic } from 'entities/product-components'
import { AboutProduct } from 'entities/product-components'

import type { CharacteristicsTypes } from 'shared/types/ProductDescriptionTypes'

export function Characteristics({
  Characteristics,
  About,
}: CharacteristicsTypes) {
  return (
    <>
      <Characteristic Characteristics={Characteristics} />
      <AboutProduct About={About} />
    </>
  )
}
