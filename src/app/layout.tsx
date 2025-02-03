import type { Metadata } from "next";
import localFont from "@next/font/local";
import "./globals.css";

const aeonik = localFont({
  src: [
    {
      path: "../../public/fonts/Aeonik-Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Aeonik-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Aeonik-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-aeonik",
});

export const metadata: Metadata = {
  title: "Unbound",
  description: "",
  icons: {
    icon: "./unbound.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${aeonik.variable} font-sans`}>{children}</body>
    </html>
  );
}
