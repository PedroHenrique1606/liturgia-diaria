import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './context/theme-provider.tsx'
import { Root } from './Root.tsx'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Root />
  </ThemeProvider>
)