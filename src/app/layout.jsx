// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";

import "./globals.css";
// import "./snap.css";

export const metadata = {
  title: "Okt Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        {/* <Navbar /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
