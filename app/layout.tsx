// Default.
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Custom.
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export const runtime = "edge";

export const metadata: Metadata = {
	title: "Sergiu Mereacre | Software Developer 🧑‍💻",
	description:
		"Discover the portfolio of Sergiu Mereacre, a software developer based in Ireland, featuring a collection of projects that showcase practical applications of modern technologies in software engineering.",
	keywords: [
		"sergiu",
		"mereacre",
		"software",
		"developer",
		"ireland",
		"portfolio",
		"projects",
		"technologies",
		"engineering",
	],
	openGraph: {
		title: "Sergiu Mereacre | Software Developer 🧑‍💻",
		description:
			"Discover the portfolio of Sergiu Mereacre, a software developer based in Ireland, featuring a collection of projects that showcase practical applications of modern technologies in software engineering.",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body className={inter.className}>
				<script
					defer
					src="https://static.cloudflareinsights.com/beacon.min.js"
					data-cf-beacon='{"token": "bfa63409f4ec48f987d5018b749dd4c6"}'
				/>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
