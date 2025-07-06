export const ROUTES = {
  // Client routes
  Base: '/',
  Home: '/',
  Catalog: '/catalog',
  CatalogItem: '/catalog/:id',
  Basket: '/basket',
  Order: '/order',
  SingIn: '/sing-in',
  SingUp: '/sing-up',

  // Admin routes
  Admin: '/admin',
  AddProduct: 'add-product',
  AddBrand: 'add-brand',
  AddCategories: 'add-categories',
  AllProducts: 'all-products',
  Promotions: 'promotions',
} as const

export type routes = (typeof ROUTES)[keyof typeof ROUTES]
