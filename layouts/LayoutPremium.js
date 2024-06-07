import { useEffect, useState } from "react";

import Meta from "./Meta";
import NavBarPlan from "./NavBar/NavBarPlan";
import FooterMobile from "../layouts/Footer/FooterMobile";
import FooterMobileNew from "./Footer/FooterMobileNew";
import Footer from "../layouts/Footer/Footer";
import FooterNew from "../layouts/Footer/FooterNew";

export default function Layout({ children, title, dark, navbar }) {


  

  // useEffect(() => {
  //   window.intercomSettings = {
  //     api_base: "https://api-iam.intercom.io",
  //     app_id: "mem01ifg",
  //     alignment: "right",
  //     name: "Chat Web",
  //   };
  //   if (window.Intercom) {
  //     window.Intercom("update", {
  //       api_base: "https://api-iam.intercom.io",
  //       app_id: "mem01ifg",
  //       name: "Chat Web",
  //     });
  //   }
  // }, [window.Intercom]);



  return (
    <>
      <Meta title={title} />

      <NavBarPlan dark={dark} />
      <main>{children}</main>
      
      <div className="hidden lg:inline 2xl:inline">
        {/* <Footer /> */}
        <FooterNew />
      </div>
      <div className="inline lg:hidden 2xl:hidden">
        <FooterMobileNew />
      </div>
    </>
  );
}
