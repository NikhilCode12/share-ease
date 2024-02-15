import { Rubik } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "ShareEase: Share any file with ease and security",
  description:
    "ShareEase is a file sharing service that makes it easy to share files with anyone, anywhere, at any time. ShareEase is secure, fast, and easy to use.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={rubik.className}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
