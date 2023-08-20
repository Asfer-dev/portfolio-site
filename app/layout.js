import Header from "@/components/Header";
import "./globals.css";
import Socialicons from "@/components/Socialicons";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Asfer Ali",
  description: "My Personal Web Development Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://asferali-portfolio.s3.eu-north-1.amazonaws.com/favicon-32x32.png"
        />
      </head>
      <body className="font-primary2 bg-white">
        <Header />
        <Socialicons />
        {children}
        <Footer />
      </body>
    </html>
  );
}
