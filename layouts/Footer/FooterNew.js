import React from "react";
import LogoTucar from "../../images/LogoTucar";
import Link from "next/link";
import { MODE } from "../../consts/index";
import { IcBaselineTiktok } from "./TikTok";
import Edificios from './Edificios'

function FooterNew({ variant = MODE.light, dark }) {
  const isLight = variant === MODE.dark;

  const CDN = process.env.NEXT_PUBLIC_CDN_GOOGLE

  return (
    <div className="mt-[150px]">
    <Edificios />
      {" "}
      <div className="mt-[150px] mb-[30px] ml-[45px] ">
        <div className="grid  grid-cols-4 gap-x-[60px] justify-center ml-4">
          <div className="flex flex-col  ">
            <Link href="/">
              <LogoTucar
                color={isLight || dark ? "white" : "color"}
                className="cursor-pointer"
                width={132}
              />
            </Link>
            <p className="w-[] mt-[35px] text-[#5B5D71] font-Poppins font-semibold text-[18px]">
              Súmate a la electromovilidad y genera ganancias.
            </p>
            <div className="flex justify-start mt-[35px] gap-x-[25px]">
              <a
                href="https://linkedin.com/company/tucar/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={`${CDN}linkedin.svg`} width={41} height={41} />
              </a>
              <a
                href="https://facebook.com/TucarChile"
                target="_blank"
                rel="noreferrer"
              >
                <img src={`${CDN}facebook.svg`} width={41} height={41} />
              </a>
              <a
                href="https://instagram.com/tucar.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={`${CDN}instagram.svg`} width={41} height={41} />
              </a>
              <a
                className="hover:cursor-pointer"
                href="https://www.youtube.com/channel/UCeqPeui-tiVmH2dIpYeCejQ"
                target="_blank"
              >
                <img src={`${CDN}youtube.svg`} width={41} height={41} />
              </a>
              <a
                className="bg-[#8E90A4] rounded-[55px] flex items-center justify-center w-[41px]"
                href="https://www.tiktok.com/@tucar.app"
                target="_blank"
              >
                <div className="">
                  <IcBaselineTiktok width={30} height={30} />
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-y-[20px]">
            <p className="text-[20px]  font-medium text-[#0057b8] font-Poppins">
              Sobre nosotros
            </p>

            <Link href="/por-que-tucar">
              <a>
                <p className=" text-[#5B5D71] text-[20px] font-Poppins font-medium hover:cursor-pointer">
                  ¿Por qué Tucar?
                </p>
              </a>
            </Link>
            <Link href="/como-funciona">
              <a>
                <p className=" text-[#5B5D71] text-[20px] font-Poppins font-medium hover:cursor-pointer">
                  Cómo funciona
                </p>
              </a>
            </Link>
            <Link href="/terminos-condiciones">
              <a>
                <p className=" text-[#5B5D71] text-[20px] font-Poppins font-medium hover:cursor-pointer">
                  Términos y condiciones
                </p>
              </a>
            </Link>
            <Link href="/driver-app">
              <a>
                <p className=" text-[#5B5D71] text-[20px] font-Poppins font-medium hover:cursor-pointer">
                  Driver App
                </p>
              </a>
            </Link>
            <Link href="/preguntas-frecuentes">
              <a>
                <p className=" text-[#5B5D71] text-[20px] font-Poppins font-medium ">
                  Preguntas frecuentes
                </p>
              </a>
            </Link>
            <Link href="/politica-de-privacidad">
              <a>
                <p className=" text-[#5B5D71] text-[20px] font-Poppins font-medium ">
                  Política de privacidad
                </p>
              </a>
            </Link>
          </div>

          <div className="flex flex-col gap-y-[20px]">
            <p className="text-[20px]  font-medium text-[#0057b8] font-Poppins">
              Planes
            </p>
            <Link href="/precios">
              <a>
                <p className=" text-[#5B5D71] text-[20px] font-medium font-Poppins hover">
                  Precios
                </p>
              </a>
            </Link>
            <Link href="/plan-premium">
              <a>
                <p className=" text-[#5B5D71] text-[20px] font-medium font-Poppins hover">
                  Plan Eléctrico Premium
                </p>
              </a>
            </Link>
            <Link href="/plan-plus">
              <a>
                <p className=" text-[#5B5D71] text-[20px] font-medium font-Poppins">
                  Plan Eléctrico Plus
                </p>
              </a>
            </Link>
            <Link href="/beneficios">
              <a>
                <p className=" text-[#5B5D71] text-[20px] font-medium font-Poppins">
                  Beneficios
                </p>
              </a>
            </Link>
            <a
              href="https://driver.tucar.app/#/signup"
              target="_blank"
              rel="noreferrer"
            >
              <p className=" text-[#5B5D71] text-[20px] font-medium font-Poppins">
                Conviértete en socio
              </p>
            </a>

            <Link href="/requisitos">
              <a>
                <p className=" text-[#5B5D71] text-[20px] font-medium font-Poppins">
                  Requisitos
                </p>
              </a>
            </Link>
            {/* <Link href="/puntos-carga">
            <a>
              <p className=" text-[#5B5D71] text-[20px] font-medium font-Poppins">
                Puntos de carga
              </p>
            </a>
          </Link> */}
          </div>
          <div className="flex flex-col gap-y-[20px]">
            <Link href="/contacto">
              <a>
                <p className="text-[20px] font-Poppins font-medium text-[#0057b8] w-[86px]">
                  Contacto
                </p>
              </a>
            </Link>

            <a
              href="mailto:contacto@tucar.app"
              className=" text-[#5B5D71]  text-[20px] font-Poppins font-medium"
            >
              soporte@tucar.app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterNew;
