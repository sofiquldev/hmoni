import { Jost } from "next/font/google";
import "./globals.scss";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "H Moni",
  description: "UI/IX Desinger",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
