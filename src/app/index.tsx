import { createRoot } from 'react-dom/client'

import '../shared/style/global.scss'

import { CombinedProvider } from './lib/CombinedProviders'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element must be in document!')
}

createRoot(root).render(<CombinedProvider />)
