
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import StoreProvider from "@/lib/storeProvider";

const inter = Inter({ subsets: ["latin"] });

 export const metadata = {
  title: "Ibrahim sayed - Personal portfolio websie",
  description:
    "My portfolio website to showcase my projects , cv , contacts and about me ",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
    </StoreProvider>
  );
}
