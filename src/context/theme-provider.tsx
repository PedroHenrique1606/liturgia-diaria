import {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
} from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
    resolvedTheme: "light" | "dark"
}

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
    resolvedTheme: "light",
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem(storageKey) as Theme) || defaultTheme
    })

    const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light")

    const applyTheme = useCallback(
        (theme: Theme) => {
            const root = window.document.documentElement
            root.classList.remove("light", "dark")

            let effectiveTheme: "light" | "dark"

            if (theme === "system") {
                effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light"
            } else {
                effectiveTheme = theme
            }

            root.classList.add(effectiveTheme)
            setResolvedTheme(effectiveTheme)
        },
        []
    )

    useEffect(() => {
        applyTheme(theme)

        if (theme === "system") {
            const media = window.matchMedia("(prefers-color-scheme: dark)")
            const listener = () => applyTheme("system")
            media.addEventListener("change", listener)
            return () => media.removeEventListener("change", listener)
        }
    }, [theme, applyTheme])

    const value = {
        theme,
        setTheme: (newTheme: Theme) => {
            localStorage.setItem(storageKey, newTheme)
            setTheme(newTheme)
        },
        resolvedTheme,
    }

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}
