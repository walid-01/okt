import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Okt Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
