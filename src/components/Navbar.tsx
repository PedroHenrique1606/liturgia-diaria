import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ui/mode-toggle";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react"; // ícone do botão de hambúrguer

const components = [
    {
        title: "Liturgia Diária",
        href: "/liturgia",
        description:
            "Leituras e reflexões do Evangelho para cada dia. Acompanhe a Palavra de Deus com profundidade.",
    },
    {
        title: "Orações",
        href: "/oracoes",
        description:
            "Reze com orações tradicionais, novenas, terços e devoções populares da Igreja Católica.",
    },
    {
        title: "Calendário Litúrgico",
        href: "/calendario-liturgico",
        description:
            "Veja o tempo litúrgico atual, festas, solenidades e memórias do calendário católico.",
    },
    {
        title: "Santo Terço",
        href: "/santo-terco",
        description: "Medite e reze os mistérios do Santo Terço.",
    },
];

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full border-b bg-background">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="text-lg font-semibold">
                    <a href="/" className="hover:underline">Liturgia</a>
                </div>

                <div className="hidden md:flex flex-1 justify-center">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Saiba mais</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className={`bg-[url(./assets/pope-leone.png)] backdrop-brightness-90 relative flex h-full w-full select-none flex-col justify-end overflow-hidden rounded-md bg-cover bg-center no-underline outline-none`}
                                                    href="/pontifex"
                                                >
                                                    <div className="absolute inset-0 bg-black/25 z-0" />
                                                    <div className="mb-2 mt-4 px-6 text-lg font-medium text-white z-10">
                                                        Papa Leão XIV
                                                    </div>
                                                    <p className="px-6 pb-6 text-sm leading-tight text-white z-10">
                                                        Conheça mais
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href="/confissao" title="Confissão">
                                            Prepare-se para uma boa confissão.
                                        </ListItem>
                                        <ListItem href="/docs/installation" title="Orações Eucarísticas">
                                            How to install dependencies and structure your app.
                                        </ListItem>
                                        <ListItem href="/docs/primitives/typography" title="Typography">
                                            Styles for headings, paragraphs, lists...etc
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Reze</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* <NavigationMenuItem>
                                <a href="/acenda-vela">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Acenda uma vela
                                    </NavigationMenuLink>
                                </a>
                            </NavigationMenuItem> */}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="hidden md:flex">
                    <ModeToggle />
                </div>

                <div className="md:hidden flex items-center gap-4">
                    <ModeToggle />
                    <button onClick={() => setOpen(!open)}>
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden fixed top-16 left-0 w-full bg-background border-t shadow-lg z-50">
                    <ul className="flex flex-col divide-y">
                        {components.map((item) => (
                            <li key={item.title}>
                                <a
                                    href={item.href}
                                    className="block px-6 py-4 text-base font-medium hover:bg-accent"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.title}
                                    <p className="text-sm text-muted-foreground">
                                        {item.description}
                                    </p>
                                </a>
                            </li>
                        ))}
                        <li>
                            {/* <a
                                href="/docs"
                                className="block px-6 py-4 text-base font-medium hover:bg-accent"
                                onClick={() => setOpen(false)}
                            >
                                Acenda uma vela
                            </a> */}
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
