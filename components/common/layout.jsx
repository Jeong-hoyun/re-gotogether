import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar/>
      {children}
      <Footer />
    </>
  );
}