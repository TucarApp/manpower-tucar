import { useEffect, useState } from "react";
import Meta from "./Meta";
import NavBar from "./NavBar/NavBar";
import FooterMobile from "../layouts/Footer/FooterMobile";
import Footer from "../layouts/Footer/Footer";

export default function Layout404({ children, title, dark, navbar }) {
  return (
    <>
      <Meta title={title} />
      <NavBar />
      <main>{children}</main>
      {/* <div className="hidden lg:inline 2xl:inline">
        <Footer />
      </div>
      <div className="inline lg:hidden 2xl:hidden">
        <FooterMobile />
      </div> */}
    </>
  );
}
