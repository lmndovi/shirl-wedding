import Header from "./components/Header";
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
    <html
      lang="en"
      className="text-[#313638] scrollbar-thin scrollbar-thumb-green-[#529864] scrollbar-track-[#529864]"
    >
      <body className={ebGaramond.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
