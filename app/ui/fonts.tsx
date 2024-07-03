import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

export const inter = Inter({ subsets: ["latin", "greek-ext"] });

export const lusitana = Lusitana({ subsets: ["latin"], weight: ["400"] });

export const jetBrainsMono = JetBrains_Mono({
	weight: ["400"],
	subsets: ["latin"],
});
