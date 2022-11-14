import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";

export interface LayoutProps  { 
  children: React.ReactNode
}

export default function Layout({ children }:LayoutProps ) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
