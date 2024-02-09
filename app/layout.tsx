import "./globals.css";
import "@/node_modules/react-modal-video/scss/modal-video.scss";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/index";

export const metadata = {
  title: "DevDesign",
  description: "Transformando ideas en experiencias digitales",
  icons: {
    icon: "../images/icons/Elem18.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
