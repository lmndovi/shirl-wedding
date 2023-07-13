import Header from "../components/Header";
import "./globals.css";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["cyrillic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ebGaramond.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
