import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './context/theme-provider'
import App from './App'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App />
  </ThemeProvider>
)
