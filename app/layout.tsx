import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import TanStackQueryProvider from "@/providers/TanStackQueryProvider";
import { Toaster } from "@/components/ui/toaster";
import { metadataValues } from "@/constants";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://summaai.vercel.app"),
  ...metadataValues,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          <TanStackQueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </TanStackQueryProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
