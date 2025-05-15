import { ModeToggle } from "./ui/mode-toggle";

export function Navbar() {
    return (
        <header className="w-full border-b bg-background">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="text-lg font-semibold">
                    <p>
                        Liturgia
                    </p>
                </div>

                <ModeToggle />
            </div>
        </header>
    )
}
