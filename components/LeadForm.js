import React from "react";
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

const CDN = process.env.NEXT_PUBLIC_CDN_GOOGLE;

function LeadForm() {
  return (
    <div className="tucar-container pt-[180px]">
      <div className="flex justify-center gap-x-[55px]">
        <div className="flex flex-col items-center">
          <div className="">
            <h1 className="font-Poppins font-bold text-[40px] text-[#5b5d71] ">
              Candidatos {' '}
              <span className="text-[#95D31C]">ATCOM</span>
            </h1>

            <h3 className="font-Poppins font-medium text-[#5b5d71] text-[20px] mt-[45px] w-[480px]">
            Formulario de registro para candidatos
            </h3>

          </div>
          {/* <img src="maxusx4.webp" width='600px' /> */}
          <div className="mt-[55px]">
              <Swiper
              spaceBetween={60}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="mySwiper  w-[650px] "
            >
              <SwiperSlide>
                <div className="mt-[2px]   ml-[85px] hover:cursor-pointer">
                  <img
                    src='nirox4shadow.png'
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
        <div className="w-[]">
          <form
            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DKb000000OlrI"
            method="POST"
            className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
          >
            <input type="hidden" name="oid" value="00DKb000000OlrI" />
            <input type="hidden" name="retURL" value="http://tucar.app" />

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
                className="w-full mt-2 p-2 border border-gray-300 rounded text-[#000000]"
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
                className="w-full mt-2 p-2 border border-gray-300 rounded text-[#000000]"
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
                type="text"
                className="w-full mt-2 p-2 border border-gray-300 rounded text-[#000000]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="number"
                className="block text-gray-700 font-Poppins font-medium"
              >
                Telefono
              </label>
              <Input
                id="email"
                maxLength="80"
                name="email"
                size="20"
                type="text"
                className="w-full mt-2 p-2 border border-gray-300 rounded text-[#000000]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-Poppins font-medium"
              >
                Rut
              </label>
              <Input
                id="company"
                maxLength="40"
                name="company"
                size="20"
                type="text"
                className="w-full mt-2 p-2 border border-gray-300 rounded text-[#000000]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-gray-700 font-Poppins font-medium"
              >
                Ciudad
              </label>
              <Input
                id="city"
                maxLength="40"
                name="city"
                size="20"
                type="text"
                className="w-full mt-2 p-2 border border-gray-300 rounded text-[#000000]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="state"
                className="block text-gray-700 font-Poppins font-medium"
              >
                Comuna
              </label>
              <Input
                id="state"
                maxLength="20"
                name="state"
                size="20"
                type="text"
                className="w-full mt-2 p-2 border border-gray-300 rounded text-white"
              />
            </div>

            <div className="text-center">
              <input
                type="submit"
                name="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LeadForm;
