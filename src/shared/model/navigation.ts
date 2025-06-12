export const ROUTES = {
  // Cient routes
  Base: '/',
  Home: '/',

  // Admin routes
  // Admin: '/admin',
} as const

export type routes = (typeof ROUTES)[keyof typeof ROUTES]
