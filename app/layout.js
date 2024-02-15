import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const childrenHeight = `calc(100vh - 4rem)`;
  return (
    <html lang="en" className="h-[100vh]">
      <body className={inter.className}>
        <div className="h-16">
          <Header />
        </div>
        <div style={{ height: childrenHeight }}>{children}</div>
      </body>
    </html>
  );
}
