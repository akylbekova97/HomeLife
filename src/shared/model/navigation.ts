export const ROUTES = {
  // Client routes
  Base: '/',
  Home: '/',
  Catalog: '/catalog',
  CatalogItem: 'catalog/:id',
  Basket: 'basket',
  Order: 'order',

  // Admin routes
  // Admin: '/admin',
} as const

export type routes = (typeof ROUTES)[keyof typeof ROUTES]
