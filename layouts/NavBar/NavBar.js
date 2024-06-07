import React, { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { LogoTucar } from "../../images";
import  Caret  from "../../components/Caret";
import { MODE } from "../../consts/index";
import Link from "next/link";

import BoltIcon from "@mui/icons-material/Bolt";

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HelpIcon from "@mui/icons-material/Help";
import PhoneIcon from "@mui/icons-material/Phone";
import AppsIcon from "@mui/icons-material/Apps";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import styled from "styled-components";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import mixpanel from "mixpanel-browser";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const Registrate = styled.div`
  display: flex;
  padding: 18px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid var(--boton-2, #e3edf7);
  background: var(--boton-2, #e3edf7);


  box-shadow: 4px 4px 20px 0px rgba(111, 140, 176, 0.41),
    -6px -6px 20px 0px #fff;
`;

const IniciaSesion = styled.div`
  background: var(
    --degradado-azul-botn,
    linear-gradient(116deg, #0057b8 -22.23%, #0057b8 26.53%, #6cc7dc 100%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function NavBar({ variant = MODE.light, dark }) {
  const isLight = variant === MODE.dark;
  const [hover, setHover] = useState(false);
  const [planes, setPlanes] = useState(false);
  const [recursos, setRecursos] = useState(false);
  const [socios, setSocios] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false);

  const ref = useRef(null);

  const trackButtonClick = (buttonName) => {
    mixpanel.track(`B. ${buttonName}`, {
      Ubicacion: "Navbar",
      Nombre: buttonName,
      URL_Completa: window.location.href,
      URL_Ruta: window.location.pathname,
      Fecha: document.lastModified,
    });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  function handleNavbarToggle() {
    setIsOpen(!isOpen);
    
  }
  function handleNavbarToggleDos() {
    
  }

  const currentPath =
  typeof window !== "undefined" ? window.location.pathname : "";

  let defaultIndex = [];

  if (
    currentPath === "/como-funciona" ||
    currentPath === "/por-que-tucar" ||
    currentPath === "/requisitos" ||
    currentPath === "/driver-app"
  ) {
    defaultIndex = [0];
  } else if (
    currentPath === "/plan-premium" ||
    currentPath === "/plan-plus" ||
    currentPath === "/precios"
  ) {
    defaultIndex = [1];
  } else if (
    currentPath === "/politica-de-privacidad" ||
    currentPath === "/preguntas-frecuentes" ||
    currentPath === "/terminos-condiciones" ||
    currentPath === "/contacto"
  ) {
    defaultIndex = [2];
  }

  const url = "https://tucar.app";

  return (
    <div className="">
      <nav className="font-Poppins font-medium text-[14px] absolute w-full z-50 bg-none lg:pt-[25px]">
        <div
          className={
            !isOpen
              ? "tucar-container bg-transparent duration-150 ease-in-out  lg:bg-transparent 2xl:bg-transparent"
              : "tucar-container bg-[#0057b8] duration-150 ease-in-out  lg:bg-transparent 2xl:bg-transparent"
          }
        >
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0 ml-5">
                <Link href="/">
                  <a>
                    <a>
                      {!isOpen ? (
                        <LogoTucar
                          color={isLight || dark ? "white" : "color"}
                          className="cursor-pointer"
                          width={150}
                        />
                      ) : (
                        <LogoTucar
                          color={isLight || dark ? "color" : "white"}
                          className="cursor-pointer"
                          width={150}
                        />
                      )}
                    </a>
                  </a>
                </Link>
              </div>
              <div className="hidden lg:inline">
                <div className="flex justify-between items-center">
                  <div className="ml-10 flex items-baseline space-x-4 ">
                    {/* <div className="text-[#5B5D71]">
                   
                        <a href={`${url}/por-que-tucar`} className="hover:cursor-pointer opacity-80 hover:opacity-100 duration-200 ease-in">
                          ¿Por qué Tucar?
                        </a>
                    
                    </div> */}
                    {/* <div className="text-[#5B5D71]">
                      
                        <a href={`${url}/como-funciona`} className="opacity-80 hover:opacity-100 duration-200 ease-in">
                          ¿Cómo funciona?
                        </a>
                    
                    </div> */}
                    <div
                      onMouseEnter={() => setSocios(true)}
                      onMouseLeave={() => setSocios(false)}
                    >
                      <div className="flex items-start">
                        <a className="hover:cursor-pointer flex">
                          <span
                            className={
                              !socios
                                ? "flex items-start text-[#5B5D71] opacity-80 ease-in-out duration-200 mr-[3px]"
                                : "flex items-start text-[#5B5D71]  opacity-100 ease-in-out duration-200 mr-[3px]"
                            }
                          >
                            Ser socio
                          </span>
                          {socios ? (
                            <ChevronUpIcon width="12px" color="#5B5D71" />
                          ) : (
                            <ChevronDownIcon width="12px" color="#5B5D71" />
                          )}
                        </a>
                      </div>
                      {socios && (
                        <div className="absolute ml-[-18px]  group-hover:visible group mb-4 pt-[15px] z-90">
                          <div className="flex flex-row rounded-lg bg-[#f9f9f9] shadow-3xl w-fit pr-[10px]">
                            <Caret
                              width="20px"
                              className="invert absolute mt-[-20px] ml-[35px]"
                            />
                            <div className="flex flex-col px-[20px] py-[25px]">
                              <div className="flex flex-col text-[#333] text-[14px] font-Poppins whitespace-nowrap">
                                {/* <div className="">
                                  <a href={`${url}/precios/`}>
                                    <div className="flex gap-[20px]">
                                      <MonetizationOnIcon
                                        sx={{
                                          color: "#0057b8",
                                        }}
                                      />
                                      <div className="flex flex-col">
                                        <p className="block font-medium hover:text-[#6cc8dd] pb-[5px] hover:cursor-pointer ">
                                          Precios
                                        </p>
                                        <p className="font-Poppins font-light text-[14px] ">
                                          Revisa los precios de nuestros planes.
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                </div> */}
                                <div className="mt-[15px]">
                                  <Link href="/como-funciona">
                                    {/* <a href={`${url}/plan-premium`}> */}
                                    <div className="flex gap-[20px]">
                                      <BoltIcon sx={{ color: "#0057b8" }} />
                                      <div className="flex flex-col">
                                        <p className="block font-medium hover:text-[#6cc8dd] pb-[5px] hover:cursor-pointer">
                                          ¿Cómo funciona?
                                        </p>
                                      </div>
                                    </div>
                                    {/* </a> */}
                                  </Link>
                                </div>
                                <div className="mt-[15px]">
                                  <Link href="/por-que-tucar">
                                    {/* <a href={`${url}/plan-premium`}> */}
                                    <div className="flex gap-[20px]">
                                      <BoltIcon sx={{ color: "#0057b8" }} />
                                      <div className="flex flex-col">
                                        <p className="block font-medium hover:text-[#6cc8dd] pb-[5px] hover:cursor-pointer">
                                          ¿Por qué Tucar?
                                        </p>
                                      </div>
                                    </div>
                                    {/* </a> */}
                                  </Link>
                                </div>
                                <div className="mt-[15px]">
                                  <Link href="/requisitos">
                                    {/* <a href={`${url}/plan-plus`} > */}
                                    <div className="flex gap-[20px]">
                                      <BoltIcon sx={{ color: "#0057b8" }} />
                                      <div className="flex flex-col">
                                        <p className="block font-medium hover:text-[#6cc8dd] pb-[5px] hover:cursor-pointer">
                                          Requisitos
                                        </p>
                                      </div>
                                    </div>
                                    {/* </a> */}
                                  </Link>
                                </div>
                                <div className="mt-[15px]">
                                  <Link href="/beneficios">
                                    {/* <a href={`${url}/plan-plus`} > */}
                                    <div className="flex gap-[20px]">
                                      <BoltIcon sx={{ color: "#0057b8" }} />
                                      <div className="flex flex-col">
                                        <p className="block font-medium hover:text-[#6cc8dd] pb-[5px] hover:cursor-pointer">
                                          Beneficios
                                        </p>
                                      </div>
                                    </div>
                                    {/* </a> */}
                                  </Link>
                                </div>
                                <div className="mt-[15px]">
                                  <Link href="/driver-app">
                                    {/* <a href={`${url}/plan-plus`} > */}
                                    <div className="flex gap-[20px]">
                                      <AppsIcon sx={{ color: "#0057b8" }} />
                                      <div className="flex flex-col">
                                        <p className="block font-medium hover:text-[#6cc8dd] pb-[5px] hover:cursor-pointer">
                                          Driver App
                                        </p>
                                      </div>
                                    </div>
                             
                                  </Link>
                                </div>

                                {/* <div className="mt-[15px]">
                                  <a href="https://referidos.tucar.app">
                                    <div className="flex gap-[20px]">
                                      <BoltIcon sx={{ color: "#0057b8" }} />
                                      <div className="flex flex-col">
                                        <p className="block font-medium hover:text-[#6cc8dd] pb-[5px] hover:cursor-pointer">
                                          Beneficios
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      onMouseEnter={() => setPlanes(true)}
                      onMouseLeave={() => setPlanes(false)}
                    >
                      <div className="flex items-start">
                        <a className="hover:cursor-pointer flex">
                          <span
                            className={
                              !planes
                                ? "flex items-start text-[#5B5D71] opacity-80 ease-in-out duration-200 mr-[3px]"
                                : "flex items-start text-[#5B5D71]  opacity-100 ease-in-out duration-200 mr-[3px]"
                            }
                          >
                            Planes
                          </span>
                          {planes ? (
                            <ChevronUpIcon width="12px" color="#5B5D71" />
                          ) : (
                            <ChevronDownIcon width="12px" color="#5B5D71" />
                          )}
                        </a>
                      </div>
                      {planes && (
                        <div className="absolute ml-[-20px]  group-hover:visible group mb-4 pt-[15px] z-90">
                          <div className="flex flex-row rounded-lg bg-[#f9f9f9] shadow-3xl w-fit pr-[10px]">
                            <Caret
                              width="20px"
                              className="invert absolute mt-[-20px] ml-[35px]"
                            />
                            <div className="flex flex-col px-[20px] py-[25px]">
                              <div className="flex flex-col text-[#333] text-[14px] font-Poppins whitespace-nowrap">
                                <Link href="/precios">
                                 
                                    <div className="flex gap-[20px]">
                                      <MonetizationOnIcon
                                        sx={{
                                          color: "#0057b8",
                                        }}
                                      />
                                      <div className="flex flex-col">
                                        <p className="block font-medium hover:text-[#6cc8dd] pb-[5px] hover:cursor-pointer ">
                                          Precios
                                        </p>
                                        <p className="font-Poppins font-light text-[14px] ">
                                          Revisa los precios de nuestros planes.
                                        </p>
                                      </div>
                                    </div>
                                
                                </Link>
                                <div className="mt-[15px]">
                                  <Link href="/plan-premium">
                                    {/* <a href={`${url}/plan-premium`}> */}
                                    <div className="flex gap-[20px]">
                                      <BoltIcon sx={{ color: "#0057b8" }} />
                                      <div className="flex flex-col">
                                        <p className="block font-medium hover:text-[#6cc8dd] pb-[5px] hover:cursor-pointer">
                                          Plan Eléctrico Premium
                                        </p>
                                        <p className="font-Poppins font-light text-[14px] ">
                                          Conoce todo sobre el Plan Eléctrico
                                          Premium.
                                        </p>
                                      </div>
                                    </div>
                                    {/* </a> */}
                                  </Link>
                                </div>
                                <div className="mt-[15px]">
                                  <Link href="/plan-plus">
                                    {/* <a href={`${url}/plan-plus`} > */}
                                    <div className="flex gap-[20px]">
                                      <BoltIcon sx={{ color: "#0057b8" }} />
                                      <div className="flex flex-col">
                                        <p className="block font-medium hover:text-[#6cc8dd] pb-[5px] hover:cursor-pointer">
                                          Plan Eléctrico Plus
                                        </p>
                                        <p className="font-Poppins font-light text-[14px] ">
                                          Conoce todo sobre el Plan Eléctrico
                                          Plus.
                                        </p>
                                      </div>
                                    </div>
                                    {/* </a> */}
                                  </Link>
                                </div>
                                {/* <div className="mt-[15px]">
                                  <a href="https://referidos.tucar.app">
                                    <div className="flex gap-[20px]">
                                      <PeopleAltIcon
                                        sx={{ color: "#0057b8" }}
                                      />
                                      <div className="flex flex-col">
                                        <p className="block font-medium hover:text-[#6cc8dd] pb-[5px] hover:cursor-pointer">
                                          Referidos
                                        </p>
                                        <p className="font-Poppins font-light text-[14px] ">
                                          Gana dinero refiriendo a un conocido.
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                </div> */}
                                {/* <div className="mt-[15px]">
                                  <Link href="/puntos-carga">
                                  
                                    <div className="flex gap-[20px]">
                                      <LocalActivityIcon
                                        sx={{
                                          color: "#0057b8",
                                        }}
                                      />
                                      <div className="flex flex-col">
                                        <p className="block font-medium hover:text-[#6cc8dd] pb-[5px] hover:cursor-pointer ">
                                          Puntos de carga
                                        </p>
                                      </div>
                                    </div>
                                
                                  </Link>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      onMouseEnter={() => setRecursos(true)}
                      onMouseLeave={() => setRecursos(false)}
                    >
                      <div className="flex items-start">
                        <a className="hover:cursor-pointer  text-[#5B5D71] flex">
                          <span
                            className={
                              !recursos
                                ? "mr-[3px] text-[#5B5D71] opacity-80 duration-200"
                                : "mr-[3px] text-[#5B5D71] opacity-100 duration-200"
                            }
                          >
                            Recursos
                            {/* ticox */}
                          </span>
                          {recursos ? (
                            <ChevronUpIcon width="12px" color="#5B5D71" />
                          ) : (
                            <ChevronDownIcon width="12px" color="#5B5D71" />
                          )}
                        </a>
                      </div>
                      
                      {recursos && (
                        <div className="absolute ml-[0px]  group-hover:visible group mb-4 pt-[15px] ">
                          <div className="flex flex-row rounded-lg bg-white shadow-3xl w-fit">
                            <Caret
                              width="20px"
                              className="invert absolute mt-[-20px] ml-[25px]"
                            />
                            <div className="flex flex-col px-[25px] py-[20px]">
                              <div className="flex flex-col text-[#333] text-[14px] font-Poppins whitespace-nowrap">
                                <div className="mt-[15px]">
                                  <Link href="/terminos-condiciones">
                                    <a>
                                      <div className="flex gap-[20px]">
                                        <VerifiedUserIcon
                                          sx={{ color: "#0057b8" }}
                                        />
                                        <div className="flex flex-col">
                                          <p className="block font-medium hover:text-[#6cc8dd] pb-[5px] hover:cursor-pointer">
                                            Términos de Servicio
                                          </p>
                                        </div>
                                      </div>
                                    </a>
                                  </Link>
                                </div>
                                <div className="mt-[15px]">
                                  <Link href="/preguntas-frecuentes">
                                    <a>
                                      <div className="flex gap-[20px]">
                                        <LiveHelpIcon
                                          sx={{ color: "#0057b8" }}
                                        />
                                        <div className="flex flex-col">
                                          <p className="block font-medium hover:text-[#6cc8dd] pb-[5px] hover:cursor-pointer">
                                            Preguntas frecuentes
                                          </p>
                                        </div>
                                      </div>
                                    </a>
                                  </Link>
                                </div>
                                {/* <div className="mt-[15px]">
                                  <Link href="/driver-app">
                                    <a>
                                      <div className="flex gap-[20px]">
                                        <HelpIcon sx={{ color: "#0057b8" }} />
                                        <div className="flex flex-col">
                                          <p className="block font-medium hover:text-[#6cc8dd] pb-[5px] hover:cursor-pointer">
                                            Driver App
                                          </p>
                                        </div>
                                      </div>
                                    </a>
                                  </Link>
                                </div> */}
                                {/* <div className="mt-[15px]">
                                  <a href={`${url}/recursos/politica-de-privacidad`}>
                                    <div className="flex gap-[20px]">
                                      <SecurityIcon sx={{ color: "#0057b8" }} />
                                      <div className="flex flex-col">
                                        <p className="block font-medium hover:text-[#6cc8dd] pb-[5px] hover:cursor-pointer">
                                          Políticas de privacidad
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                </div> */}
                                

                                <div className="mt-[15px] mb-[12px]">
                                  <Link href="/contacto">
                                    <div className="flex gap-[20px]">
                                      <PhoneIcon sx={{ color: "#0057b8" }} />
                                      <div className="flex flex-col">
                                        <p className="block font-medium hover:text-[#6cc8dd] pb-[5px] hover:cursor-pointer">
                                          Contacto
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="text-[#5B5D71]">
                      <a href="https://blog.tucar.app">
                        <a className="opacity-80 hover:cursor-pointer hover:opacity-100 duration-200 ease-in-out">
                          Blog
                        </a>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block text-[#5B5D71]">
              <div className="flex justify-between">
                <div className="flex items-baseline space-x-4">
                  <IniciaSesion>
                    <a
                      href="https://driver.tucar.app/#/signin"
                      className="button  hover:cursor-pointer px-[25px] py-[15px]"
                      onClick={(e) => {
                        trackButtonClick("Inicia sesión");
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Inicia sesión
                    </a>
                  </IniciaSesion>
                  <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    <a
                      href="https://driver.tucar.app/#/signup"
                      onClick={() => {
                        trackButtonClick("Regístrate");
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Registrate>
                        <div className="opacity-100 flex justify-center">
                          <p
                            href="https://driver.tucar.app/#/signup"
                            className="button opacity-100 mr-[3px] ml-[10px]"
                          >
                            Regístrate
                          </p>
                        </div>

                        {hover ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mt-[4px] transition-all ease-in-out duration-300"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mt-[4px] transition-all ease-in-out duration-300"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </Registrate>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center md:hidden mr-3">
              
              <button
                onClick={handleNavbarToggle}
                type="button"
                className=" inline-flex items-center justify-center p-2  rounded-md text-[#333333] hover:text-[#333333] "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-0 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className="lg:hidden bg-[#0057b8] h-screen transform"
            id="mobile-menu"
          >
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="px-3 font-Poppins font-medium text-[16px] text-white flex flex-col">
                {/* <div className="py-2" onClick={() => setIsOpen(false)}>
                  <a href={`${url}/por-que-tucar`} rel="noreferrer">
                    <p>¿Por qué Tucar?</p>
                  </a>
                </div>
                <div className="py-2 " onClick={() => setIsOpen(false)}>
                  <a href={`${url}/como-funciona`} rel="noreferrer">
                    <p>¿Como funciona?</p>
                  </a>
                </div> */}
                {/* <div className="py-2 ">
                  <p>Planes y precios</p>
                  <div className="mx-5">
                    <
                      className="list-disc font-Poppins font-light text-[14px]"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/precios" rel="noreferrer">
                        <li className="py-1">Precios</li>
                      </Link>
                      <Link href="/plan-premium" rel="noreferrer">
                        <li className="py-1">Plán Eléctrico Premium</li>
                      </Link>
                      <Link href="/plan-plus" rel="noreferrer">
                        <li className="py-1">Plán Eléctrico Plus</li>
                      </Link>
                      <Link href="/plan-standard" rel="noreferrer">
                        <li className="py-1">Plán Combustión Standard</li>
                      </Link>

                      <li className="py-1" rel="noreferrer">
                        Beneficios
                      </li>
                    </ul>
                  </div>
                </div> */}

                <div className="py-2">
                  <Accordion allowToggle defaultIndex={defaultIndex}>
                    <AccordionItem className="py-[13px]">
                      <h2>
                        <AccordionButton>
                          <Box as="span" textAlign="center">
                            <p className="block">
                              <span>Ser socio</span>
                            </p>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <div className="py-2 ">
                          <div className="mx-5">
                            <ul
                              className="list-disc font-Poppins font-light text-[14px] mt-[5px]"
                              onClick={() => setIsOpen(false)}
                            >
                             
                              <Link href="/como-funciona">
                                <li className="py-1">¿Cómo funciona?</li>
                              </Link>
                              <Link href="/por-que-tucar">
                                <li className="py-1">¿Por qué Tucar?</li>
                              </Link>
                              <Link href="/requisitos" rel="noreferrer">
                                <li className="py-1">Requisitos</li>
                              </Link>
                              <Link href="/beneficios" rel="noreferrer">
                                <li className="py-1">Beneficios</li>
                              </Link>
                              <Link href="/driver-app" rel="noreferrer">
                                <li className="py-1">Driver App</li>
                              </Link>

                              {/* <Link href="/plan-standard" rel="noreferrer">
                                <li className="py-1">
                                  Plán Combustión Standard
                                </li>
                              </Link> */}
                              {/* <a
                                href="https://referidos.tucar.app"
                                rel="noreferrer"
                              >s
                                <li className="py-1">Referidos</li>
                              </a> */}
                              {/* <Link href="/beneficios">
                                <li className="py-1" rel="noreferrer">
                                  Beneficios
                                </li>
                              </Link> */}
                            </ul>
                          </div>
                        </div>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" textAlign="center">
                            <p className="block">
                              <span>Planes</span>
                            </p>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <div className="py-2 ">
                          <div className="mx-5">
                            <ul
                              className="list-disc font-Poppins font-light text-[14px] mt-[5px]"
                              onClick={() => setIsOpen(false)}
                            >
                              <Link href='/precios' rel="noreferrer">
                                <li className="py-1">Precios</li>
                              </Link>
                              <Link href="/plan-premium">
                                <li className="py-1">Plán Eléctrico Premium</li>
                              </Link>
                              <Link href="/plan-plus" rel="noreferrer">
                                <li className="py-1">Plán Eléctrico Plus</li>
                              </Link>
                              {/* <Link href="/plan-standard" rel="noreferrer">
                                <li className="py-1">
                                  Plán Combustión Standard
                                </li>
                              </Link> */}
                              {/* <a
                                href="https://referidos.tucar.app"
                                rel="noreferrer"
                              >s
                                <li className="py-1">Referidos</li>
                              </a> */}
                              {/* <Link href="/puntos-carga">
                                <li className="py-1" rel="noreferrer">
                                  Puntos de carga
                                </li>
                              </Link> */}
                            </ul>
                          </div>
                        </div>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="py-[10px]">
                      <h2>
                        <AccordionButton>
                          <Box as="span" textAlign="left" className="mr-2">
                            Recursos
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <div className="py-2 ">
                          <div className="mx-5">
                            <ul className="list-disc font-Poppins font-light text-[14px]">
                              <Link href="/terminos-condiciones">
                                <li className="py-1">Términos de Servicio</li>
                              </Link>
                              <Link href='/preguntas-frecuentes'>
                              <a href='preguntas-frecuentes'>
                                <li className="py-1">Preguntas Frecuentes</li>
                              </a>
                              </Link>
                              {/* <a href='politica-de-privacidad'>
                                <li className="py-1">Política de privacidad</li>
                              </a> */}
                              {/* <Link href="/driver-app">
                                <li className="py-1">Driver App</li>
                              </Link> */}
                              <Link href="/contacto">
                                <li className="py-1">Contacto</li>
                              </Link>
                            </ul>
                          </div>
                        </div>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
                {/* <div className="py-2 ">
                  <a href={`${url}/nosotros`}>
                    <p>Nosotros</p>
                  </a>
                </div> */}
                <div className="py-2 ">
                  <a href="https://blog.tucar.app">
                    <p>Blog</p>
                  </a>
                </div>
                <div className="flex flex-col justify-center py-3">
                  <a
                    href="https://driver.tucar.app/#/signin"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => {
                      trackButtonClick("Inicia sesión mobile");
                    }}
                  >
                    <div className="flex flex-col w-full">
                      <p className="border-[2px] border-[#ffffff] text-center py-2 rounded-[24px]">
                        Iniciar sesión
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://driver.tucar.app/#/signup"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => {
                      trackButtonClick("Regístrate mobile");
                    }}
                  >
                    <div className="flex flex-col w-full py-2">
                      <p className="border-[2px] bg-[#ffffff] text-center py-2 rounded-[24px] text-[#0057b8]">
                        Regístrate
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Transition>

       
      </nav>
    </div>
  );
}

export default NavBar;