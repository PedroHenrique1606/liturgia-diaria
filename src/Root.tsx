// Root.tsx
import { Toaster } from "sonner"
import { useTheme } from "@/context/theme-provider"
import { Navbar } from "@/components/Navbar"
import App from "./App"

export function Root() {
    const { resolvedTheme } = useTheme()

    return (
        <>
            <Toaster
                position="top-center"
                theme={
                    resolvedTheme === "dark" || resolvedTheme === "light" || resolvedTheme === "system"
                        ? resolvedTheme
                        : "light"
                }
            />
            <Navbar />
            <App />
        </>
    )
}
