import "./globals.css";
import "@/node_modules/react-modal-video/scss/modal-video.scss";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/index";

export const metadata = {
  title: "DevDesign",
  description: "Transformando ideas en experiencias digitales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/svg+xml"
        href="https://res.cloudinary.com/dncmrwppr/image/upload/v1707502577/Elem18_zt5o2v.png"
      />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
