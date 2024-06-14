import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";

import { LogoTucar } from "../../images";
import { MODE } from "../../consts";
import { IcBaselineTiktok } from "./TikTok";
import EdificiosMobile from "./EdificiosMobile";

function FooterMobileNew({ variant = MODE.light, dark }) {
  const isLight = variant === MODE.dark;
  const CDN = process.env.NEXT_PUBLIC_CDN_GOOGLE

  return (
    <div>
      <div className="mt-[55px]">
        {" "}
        <EdificiosMobile />
      </div>

      <div className="mx-[20px] pt-[100px] pb-[65px]">
        <div className="flex flex-col gap-y-[10px]">
          <LogoTucar
            width={99}
            color={isLight || dark ? "white" : "color"}
            className="cursor-pointer"
          />
          <p className="font-Poppins text-[14px] text-[#5b5d71] font-medium mt-[20px]">
            Súmate a la electromovilidad y genera ganancias.
          </p>
          <div className="flex justify-start  gap-x-[20px] mt-[25px]">
            <a
              href="https://linkedin.com/company/tucar/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={`${CDN}linkedin.svg`} width={26} height={26} />
            </a>
            <a
              href="https://facebook.com/TucarChile"
              target="_blank"
              rel="noreferrer"
            >
              <img src={`${CDN}facebook.svg`} width={26} height={26} />
            </a>
            <a
              href="https://instagram.com/tucar.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={`${CDN}instagram.svg`} width={26} height={26} />
            </a>
            <a
              className="hover:cursor-pointer"
              href="https://www.youtube.com/channel/UCeqPeui-tiVmH2dIpYeCejQ"
              target="_blank"
            >
              <img src={`${CDN}youtube.svg`} width={26} height={26} />
            </a>
            <a
              className="bg-[#8E90A4] rounded-[55px] flex items-center justify-center w-[26px]"
              href="https://www.tiktok.com/@tucar.app"
              target="_blank"
            >
              <div className="">
                <IcBaselineTiktok width={20} height={20} />
              </div>
            </a>
          </div>
        </div>
        <div className="mt-[25px]">
          <Accordion allowToggle className="w-full">
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <p className="text-[#0057b8] text-[16px] font-semibold font-Poppins">
                          Socios
                        </p>
                      </Box>
                      {isExpanded ? (
                        <p className="text-[#0057b8] text-[14px]">-</p>
                      ) : (
                        <p className="text-[#0057b8] text-[14px]">+</p>
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <div className="flex flex-col gap-y-[15px] mt-[20px] font-Poppins font-medium">
                      <div>
                        <a href="https://tucar.app/como-funciona">
                          <p className="text-[#5b5d71] hover:cursor-pointer">
                            ¿Cómo funciona?
                          </p>
                        </a>
                      </div>
                      <div>
                        <a href="https://tucar.app/por-que-tucar">
                          <p className="text-[#5b5d71] hover:cursor-pointer">
                            ¿Por qué tucar?
                          </p>
                        </a>
                      </div>
                      <div>
                        <a href="https://tucar.app/driver-app">
                          <p className="text-[#5b5d71] hover:cursor-pointer">
                            Driver App
                          </p>
                        </a>
                      </div>
                      <div>
                        <a href="https://tucar.app/requisitos">
                          <p className="text-[#5b5d71] hover:cursor-pointer">
                            Requisitos
                          </p>
                        </a>
                      </div>

                      <div>
                        <a href="https://tucar.app/beneficios">
                          <p className="text-[#5b5d71] hover:cursor-pointer">
                            Beneficios
                          </p>
                        </a>
                      </div>
                    </div>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem className="mt-[25px]">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <p className="text-[#0057b8] text-[16px] font-semibold font-Poppins">
                          Planes
                        </p>
                      </Box>
                      {isExpanded ? (
                        <p className="text-[#0057b8] text-[14px]">-</p>
                      ) : (
                        <p className="text-[#0057b8] text-[14px]">+</p>
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <div className="flex flex-col gap-y-[15px] mt-[20px] font-Poppins font-medium">
                    <div>
                        <a href="https://tucar.app/precios">
                          <p className="text-[#5b5d71] hover:cursor-pointer">
                            Precios
                          </p>
                        </a>
                      </div>
                      <div>
                        <a href="https://tucar.app/plan-premium">
                          <p className="text-[#5b5d71] hover:cursor-pointer">
                            Plan eléctrico Premium
                          </p>
                        </a>
                      </div>
                      <div>
                        <a href="https://tucar.app/plan-plus">
                          <p className="text-[#5b5d71] hover:cursor-pointer">
                            Plan eléctrico Plus
                          </p>
                        </a>
                      </div>
                      {/* <div>
                      <Link href="/beneficios">
                        <p className="text-[#5b5d71] hover:cursor-pointer">
                          Puntos de carga
                        </p>
                      </Link>
                    </div> */}
                    </div>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem className="mt-[25px]">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <p className="text-[#0057b8] text-[16px] font-semibold font-Poppins">
                          Recursos
                        </p>
                      </Box>
                      {isExpanded ? (
                        <p className="text-[#0057b8] text-[14px]">-</p>
                      ) : (
                        <p className="text-[#0057b8] text-[14px]">+</p>
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <div className="flex flex-col gap-y-[15px] mt-[20px] font-Poppins font-medium">
                      <div>
                        <a href="https://tucar.app/terminos-condiciones">
                          <p className="text-[#5b5d71] hover:cursor-pointer">
                            Términos de servicio
                          </p>
                        </a>
                      </div>

                      <div>
                        <a href="https://tucar.app/preguntas-frecuentes">
                          <p className="text-[#5b5d71] hover:cursor-pointer">
                            Preguntas frecuentes
                          </p>
                        </a>
                      </div>
                      <div>
                        <a href="https://tucar.app/contacto">
                          <p className="text-[#5b5d71] hover:cursor-pointer">
                            Contacto
                          </p>
                        </a>
                      </div>
                    </div>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FooterMobileNew;
