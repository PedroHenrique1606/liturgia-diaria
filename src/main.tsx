import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import App from './App'
import { ThemeProvider } from './context/theme-provider'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Toaster theme='dark' position='top-center' />
    <App />
  </ThemeProvider>
)
