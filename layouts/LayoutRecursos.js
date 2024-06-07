import { useEffect, useState } from "react";
import Meta from "./Meta";
import NavBarRecursos from "./NavBar/NavBarRecursos";
import FooterNew from "./Footer/FooterNew";
import FooterMobileNew from "./Footer/FooterMobileNew";

export default function Layout({ children, title, dark, navbar }) {
  return (
    <>
      <Meta title={title} />
      <NavBarRecursos dark={dark} />
      <main>{children}</main>
      <div className="hidden lg:inline 2xl:inline">
        <FooterNew />
      </div>
      <div className="inline lg:hidden 2xl:hidden">
        <FooterMobileNew />
      </div>
    </>
  );
}
