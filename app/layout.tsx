import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "../ui/organisms/PageHeader";
import { SiteFooter } from "../ui/molecules/SiteFooter";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`}>
				<SiteHeader />
				{children}
			</body>

			<SiteFooter />
		</html>
	);
}
