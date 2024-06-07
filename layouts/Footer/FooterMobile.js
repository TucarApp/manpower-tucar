import React from "react";
import classnames from "classnames";

import Acordeon from "./Acordeon";
import Link from "next/link";
import Image from "next/image";
import YouTubeIcon from "@mui/icons-material/YouTube";

import Edificios from "../../images/Edificios";
import LogoTucar from "../../images/LogoTucar";
import Facebook from "../../images/icons/Facebook";
import Instagram from "../../images/icons/Instagram";
import Linkedin from "../../images/icons/Linkedin";

function Footer() {

  const url = 'https://tucar.app'

  return (
    <div
      className={classnames(
        "pt-[120px] border-[#bbb] bg-[#EDFCFF] text-[#333]",
        "w-[100%] max-w-[2048px] mx-auto 2xl:border-x"
      )}
    >
      <Edificios />
      {/* <img src="city_mobile.png" className="w-full  md:hidden" />
      <img src='city_tablet.png' className="w-full hidden md:inline"/> */}

      <div className="pt-[45px] px-[20px] flex justify-end items-center gap-[25px]">
        <SocialMediaLink
          href="https://www.facebook.com/Tucar-582656572417146"
          icon={<Facebook width={18} height={18} fill="#0057b8" />}
        />
        <SocialMediaLink
          href="https://www.instagram.com/tucar.app/"
          icon={<Instagram width={18} height={18} fill="#0057b8" />}
        />
        <SocialMediaLink
          href="https://www.linkedin.com/company/tucar?originalSubdomain=cl"
          icon={<Linkedin width={18} height={18} fill="#0057b8" />}
        />
        <SocialMediaLink
          href="https://www.youtube.com/channel/UCeqPeui-tiVmH2dIpYeCejQ"
          icon={<YouTubeIcon sx={{ fontSize: "25px", color: "#0057b8" }} />}
        />
      </div>

      <div className="flex-col text-start mx-[20px] mt-[30px] mb-[30px] md:mt-0 h-auto">
        <LogoTucar width={120} />
      </div>

      <FooterLink href="/por-que-tucar" label="¿Por qué Tucar?" />
      <FooterLink href="/como-funciona" label="¿Cómo funciona?" />
      <Acordeon />
      <FooterLink href="/nosotros" label="Nosotros" />
      <FooterLink href="/blog" label="Blog" />
    </div>
  );
}

function SocialMediaLink({ href, icon }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
}

function FooterLink({ href, label }) {
  return (
    <div className="mx-[20px] mt-[20px]">
      <Link href={href}>
        <a className="font-Poppins font-medium text-[14px]">{label}</a>
      </Link>
    </div>
  );
}

export default Footer;
