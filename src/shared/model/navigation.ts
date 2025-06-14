export const ROUTES = {
  // Client routes
  Base: '/',
  Home: '/',
  CatalogItem: 'catalog/:id',

  // Admin routes
  // Admin: '/admin',
} as const

export type routes = (typeof ROUTES)[keyof typeof ROUTES]
