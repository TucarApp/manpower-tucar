import React, { useState, useEffect } from "react";

import { MODE } from "../../consts/index";
import Link from "next/link";
import Image from "next/image";

import Edificios from "../../images/Edificios";
import LogoTucar from "../../images/LogoTucar";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer({ variant = MODE.light }) {
  const isDark = variant === MODE.dark;

  return (
    <>
      <footer
        className="pt-[120px] 
          w-[100%] max-w-[2048px] mx-auto"
      >
        <Edificios />
        {/* <img src="city.png" alt="edificos" className="w-full" /> */}
        <div className=" pb-[170px] tucar-container ">
          <div className="mt-[60px] flex justify-end">
            <div className="ml-[40px]">
              <a
                href="https://facebook.com/TucarChile"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon
                  sx={{ widht: "24px", height: "24px", color: "#0057b8" }}
                />
              </a>
            </div>

            <div className="ml-[40px]">
              <a
                href="https://instagram.com/tucar.app/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon
                  sx={{ widht: "24px", height: "24px", color: "#0057b8" }}
                />
              </a>
            </div>

            <div className="ml-[40px]">
              <a
                href="https://linkedin.com/company/tucar/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon
                  sx={{ widht: "24px", height: "24px", color: "#0057b8" }}
                />
              </a>
            </div>

            <div className="ml-[40px]">
              <a
                className="hover:cursor-pointer"
                href="https://www.youtube.com/channel/UCeqPeui-tiVmH2dIpYeCejQ"
                target="_blank"
              >
                <YouTubeIcon sx={{ fontSize: "30px", color: "#0057b8" }} />
              </a>
            </div>
          </div>
          <div className="mt-[60px] flex justify-between items-start">
            <LogoTucar color={isDark ? "white" : "color"} width={180} />
            <div className="flex justify-end font-Poppins gap-x-[50px] 2xl:gap-[100px]">
              <div className="flex flex-col ">
                <div className="font-medium text-[16px] mb-[15px] cursor-pointer">
                  <Link href="/por-que-tucar">
                    <h3 className="hover:text-[#6cc8dd] transition-all duration-300">
                      ¿Por qué Tucar?
                    </h3>
                  </Link>
                </div>
                <div className="font-medium text-[16px] mb-[15px] cursor-pointer">
                  <Link href="/como-funciona">
                    <h3 className="hover:text-[#6cc8dd] transition-all duration-300">
                      ¿Cómo funciona?
                    </h3>
                  </Link>
                </div>
                <div className="font-medium text-[16px] mb-[5px]">
                  <h3>Planes y precios</h3>
                </div>
                <div className="flex flex-col font-light">
                  <Link href="/precios">
                    <a className="mt-[10px] hover:text-[#6cc8dd] transition-all duration-300">
                      Precios
                    </a>
                  </Link>
                  <Link href="/plan-premium">
                    <a className="mt-[10px] hover:text-[#6cc8dd] transition-all duration-300">
                      Plan Eléctrico Premium
                    </a>
                  </Link>
                  <Link href="/plan-plus">
                    <a className="mt-[10px] hover:text-[#6cc8dd] transition-all duration-300">
                      Plan Eléctrico Plus
                    </a>
                  </Link>
                  <Link href="/plan-plus">
                    <a className="mt-[10px] hover:text-[#6cc8dd] transition-all duration-300">
                      Plan Plus
                    </a>
                  </Link>
                  {/* <a href="https://referidos.tucar.app">
                    <p className="mt-[10px] hover:text-[#6cc8dd] transition-all duration-300">
                      Referidos
                    </p>
                  </a> */}
                  <Link href="/beneficios">
                    <a className="mt-[10px] hover:text-[#6cc8dd] transition-all duration-300">
                      Beneficios
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="font-medium text-[16px] mb-[15px] cursor-pointer">
                  <Link href="/nosotros">
                    <h3 className="hover:text-[#6cc8dd] transition-all duration-300">
                      Nosotros
                    </h3>
                  </Link>
                </div>
                <div className="font-medium text-[16px] mb-[15px] cursor-pointer">
                  <a href="https://blog.tucar.app">
                    <h3 className="hover:text-[#6cc8dd] transition-all duration-300">
                      Blog
                    </h3>
                  </a>
                </div>
                <div className="font-medium text-[16px] mb-[5px]">
                  <h3>Recursos</h3>
                </div>
                <div className="flex flex-col font-light">
                  <Link href="/recursos/terminos-y-condiciones">
                    <a className="mt-[10px] hover:text-[#6cc8dd] transition-all duration-300">
                      Términos de Servicio
                    </a>
                  </Link>
                  <Link href="/recursos/preguntas-frecuentes">
                    <a className="mt-[10px] hover:text-[#6cc8dd] transition-all duration-300">
                      Preguntas frecuentes
                    </a>
                  </Link>
                  <Link href="/recursos/politica-de-privacidad">
                    <a className="mt-[10px] hover:text-[#6cc8dd] transition-all duration-300">
                      Política de privacidad
                    </a>
                  </Link>
                  <Link href="/recursos/ayuda">
                    <a className="mt-[10px] hover:text-[#6cc8dd] transition-all duration-300">
                      Contáctanos
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-medium text-[16px] mb-[5px]">
                  <h3>Contacto</h3>
                </div>
                <a
                  className="font-light mt-[10px] hover:text-[#6cc8dd] transition-all duration-300"
                  href="mailto:contacto@tucar.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  contacto@tucar.app
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function Icon({ component: Component, link, isDark }) {
  return (
    <div className="ml-[40px] first:ml-0">
      <a href={link} target="_blank" rel="noreferrer">
        <Component
          sx={{
            width: "24px",
            height: "24px",
            color: isDark ? "white" : "#0057b8",
          }}
        />
      </a>
    </div>
  );
}

export default Footer;
