// components/Form.js
import React, { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Autoplay, Pagination } from "swiper/modules";

const Input = styled.input`
  width: 452px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid var(--Blanco, #fff);
  background: var(--Blanco, #fff);

  /* sombra click boton */
  box-shadow: 4px 4px 14px 0px #d9d9d9 inset,
    -4px -4px 9px 0px rgba(255, 255, 255, 0.88) inset;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #5b5d71;
  }
  :-ms-input-placeholder {
    color: red;
  }
  padding-left: 15px;
`;

const Form = () => {
  const [company, setCompany] = useState("Manpower");

  //   useEffect(() => {
  //     const hostname = window.location.hostname;

  //     if (hostname.includes('manpower')) {
  //       setCompany('Manpower');
  //     } else if (hostname.includes('othercompany1')) {
  //       setCompany('Other Company 1');
  //     } else if (hostname.includes('othercompany2')) {
  //       setCompany('Other Company 2');
  //     } else {
  //       setCompany('Default Company');
  //     }
  //   }, []);

  const CDN = process.env.NEXT_PUBLIC_CDN_GOOGLE;

  return (
    <div>
      <Head>
        <meta httpEquiv="Content-type" content="text/html; charset=UTF-8" />
      </Head>
      <div className="flex justify-center tucar-container pt-[200px]">
        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DKb000000OlrI"
          method="POST"
          className="p-6 rounded-lg"
        >
          <input type="hidden" name="oid" value="00DKb000000OlrI" />
          <input type="hidden" name="retURL" value="http://tucar.app" />
          <input
            type="hidden"
            id="recordType"
            name="recordType"
            value="012Kb000000wugkIAA"
          />
          <input
            type="hidden"
            id="lead_source"
            name="lead_source"
            value="Staffing"
          />
          <input type="hidden" id="company" name="company" value={company} />

          <div className="mb-4">
            <label
              htmlFor="first_name"
              className="block text-gray-700 font-Poppins font-medium"
            >
              Nombre
            </label>
            <Input
              id="first_name"
              maxLength="40"
              name="first_name"
              size="20"
              type="text"
              className="mt-1 p-2 border rounded w-full"
              required='true'
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="last_name"
              className="block text-gray-700 font-Poppins font-medium"
            >
              Apellidos
            </label>
            <Input
              id="last_name"
              maxLength="80"
              name="last_name"
              size="20"
              type="text"
              className="mt-1 p-2 border rounded w-full"
              required='true'
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="00NKb00000DQu1E"
              className="block text-gray-700 font-Poppins font-medium"
            >
              Identificador Nacional
            </label>
            <Input
              id="00NKb00000DQu1E"
              maxLength="100"
              name="00NKb00000DQu1E"
              size="20"
              type="text"
              className="mt-1 p-2 border rounded w-full"
              required='true'
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="00NKb00000DQu1J"
              className="block text-gray-700 font-Poppins font-medium"
            >
              Fecha de Nacimiento
            </label>
            <Input
              id="00NKb00000DQu1J"
              name="00NKb00000DQu1J"
              size="12"
              type="date"
              className="mt-1 p-2 border rounded w-full"
              required='true'
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="00NKb00000DQu1Y"
              className="block text-gray-700 font-Poppins font-medium"
            >
              Comuna de Residencia
            </label>
            <Input
              id="00NKb00000DQu1Y"
              maxLength="100"
              name="00NKb00000DQu1Y"
              size="20"
              type="text"
              className="mt-1 p-2 border rounded w-full"
              required='true'
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-gray-700 font-Poppins font-medium"
            >
              Celular
            </label>
            <Input
              id="mobile"
              maxLength="40"
              name="mobile"
              size="20"
              type="text"
              className="mt-1 p-2 border rounded w-full"
              required='true'
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-Poppins font-medium"
            >
              Email
            </label>
            <Input
              id="email"
              maxLength="80"
              name="email"
              size="20"
              type="email"
              className="mt-1 p-2 border rounded w-full"
              required='true'
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="00NKb00000DRKXM"
              className="block text-gray-700 font-Poppins font-medium"
            >
              Fecha Cita Onboarding
            </label>
            <Input
              id="00NKb00000DRKXM"
              name="00NKb00000DRKXM"
              size="12"
              type="date"
              className="mt-1 p-2 border rounded w-full"
              required='true'
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="00NKb00000DRKZ8"
              className="block text-gray-700 font-Poppins font-medium"
            >
              Hora Onboarding
            </label>
            <Input
              id="00NKb00000DRKZ8"
              name="00NKb00000DRKZ8"
              placeholder="HH:MM"
              size="12"
              type="time"
              className="mt-1 p-2 border rounded w-full"
              required='true'
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="00NKb00000DRPLG"
              className="block text-gray-700 font-Poppins font-medium"
            >
              ¿Posee Cuenta Uber?
            </label>
            <input
              id="00NKb00000DRPLG"
              name="00NKb00000DRPLG"
              type="checkbox"
              value="1"
              className="mr-2"
              
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="00NKb00000DRPLL"
              className="block text-gray-700 font-Poppins font-medium"
            >
              ¿Cuenta Uber Activa?
            </label>
            <input
              id="00NKb00000DRPLL"
              name="00NKb00000DRPLL"
              type="checkbox"
              value="1"
              className="mr-2"
            />
          </div>

          {/* <div className=",b-4">
          <label for="recordType" className="text-gray-700 font-Poppins font-medium">
            Tipo de registro de prospecto
          </label>
          <select id="recordType" name="recordType">
            <option value="">--Ninguno--</option>
            <option value="012Kb000000wugp">Candidato Onboarding</option>
            <option value="012Kb000000wugk">Candidato Sales</option>
            <option value="012Kb000000wujF">Candidato Staffing</option>
          </select>
        </div> */}

          <button
            type="submit"
            name="submit"
            className="bg-blue-500 text-white p-2 rounded w-full font-Poppins font-medium"
          >
            Enviar
          </button>
        </form>
        <div className="mt-[55px] flex flex-col items-center">
          <div className="">
            <h1 className="font-Poppins font-bold text-[40px] text-[#5b5d71] ">
              Candidatos <span className="text-[#95D31C]">Manpower</span>
            </h1>

            <h3 className="font-Poppins font-medium text-[#5b5d71] text-[20px] mt-[45px] w-[480px]">
              Formulario de registro para candidatos
            </h3>
          </div>
          <div className="mt-[45px]">
            <Swiper
              spaceBetween={60}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="mySwiper  w-[650px] "
              allowTouchMov="none"
            >
              <SwiperSlide>
                <div className="mt-[2px]   ml-[85px] hover:cursor-pointer">
                  <img
                    src="nirox4shadow.png"
                    className="asolute"
                    width={580}
                    height={331}
                  />
                </div>
              </SwiperSlide>
              {/* <SwiperSlide>
                <div className="mt-[-45px]   ml-[85px] hover:cursor-pointer">
                  <img src={`${CDN}maxusx4.webp`} width={600} height={331} />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mt-[-20px]  ml-[85px]  hover:cursor-pointer">
                  <img src={`${CDN}mgzs.png`} width={600} height={331} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mt-[-35px]  ml-[85px] hover:cursor-pointer ">
                  <img src={`${CDN}volter.webp`} width={500} height={331} />
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
