import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/context/theme-provider"

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="hover:cursor-pointer">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem className="hover:cursor-pointer" onClick={() => setTheme("light")}>
                    Claro
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:cursor-pointer" onClick={() => setTheme("dark")}>
                    Escuro
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:cursor-pointer" onClick={() => setTheme("system")}>
                    Sistema
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
