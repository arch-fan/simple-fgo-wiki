import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { LinksFunction } from "react-router";
import { AppSidebar } from "~/components/app-sidebar";
import { ModeToggle } from "~/components/mode-toggle";
import { ThemeProvider } from "~/components/theme-provider";
import { Separator } from "~/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import styles from "./tailwind.css?url";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: styles },
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<ThemeProvider defaultTheme="dark" storageKey="__web_theme">
					<SidebarProvider>
						<AppSidebar />
						<div className="flex flex-col flex-1 p-2 gap-2 bg-zinc-50 text-zinc-950 dark:text-zinc-50 dark:bg-zinc-950">
							<header className="flex gap-1 sticky h-9 [&_svg]:size-[1.125rem] [&>*]:h-full [&>*]:aspect-square [&>*]:w-auto">
								<SidebarTrigger />
								<ModeToggle className="ml-auto" />
							</header>
							<Separator />
							<main className="flex flex-col flex-1">{children}</main>
						</div>
					</SidebarProvider>
				</ThemeProvider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
