import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Messenger",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, dolore adipisci voluptatem, qui debitis corrupti pariatur incidunt quos mollitia laboriosam ad vel ullam itaque hic, suscipit repudiandae voluptate est! Voluptate.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
