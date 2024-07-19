// components/Form.js
import React, { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import rutValidator from "../utils/rutValidator"; 

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
  box-shadow: 4px 4px 14px 0px #d9d9d9 inset, -4px -4px 9px 0px rgba(255, 255, 255, 0.88) inset;
  ::placeholder {
    color: #5b5d71;
  }
  padding-left: 15px;
  
`;

const Select = styled.select`
  width: 452px;
  height: 50px;
  flex-shrink: 0;
  border: 1px solid var(--Blanco, #fff);
  background: var(--Blanco, #fff);
  box-shadow: 4px 4px 14px 0px #d9d9d9 inset, -4px -4px 9px 0px rgba(255, 255, 255, 0.88) inset;
  ::placeholder {
    color: #5b5d71;
  }
  padding-left: 15px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const comunasDeSantiago = [
  "Santiago",
  "Cerrillos",
  "Cerro Navia",
  "Conchalí",
  "El Bosque",
  "Estación Central",
  "Huechuraba",
  "Independencia",
  "La Cisterna",
  "La Florida",
  "La Granja",
  "La Pintana",
  "La Reina",
  "Las Condes",
  "Lo Barnechea",
  "Lo Espejo",
  "Lo Prado",
  "Macul",
  "Maipú",
  "Ñuñoa",
  "Pedro Aguirre Cerda",
  "Peñalolén",
  "Providencia",
  "Pudahuel",
  "Quilicura",
  "Quinta Normal",
  "Recoleta",
  "Renca",
  "San Joaquín",
  "San Miguel",
  "San Ramón",
  "Vitacura",
  "Puente Alto",
  "Pirque",
  "San José de Maipo",
  "Colina",
  "Lampa",
  "Tiltil",
  "San Bernardo",
  "Buin",
  "Calera de Tango",
  "Paine",
  "Melipilla",
  "Alhué",
  "Curacaví",
  "María Pinto",
  "San Pedro",
  "Talagante",
  "El Monte",
  "Isla de Maipo",
  "Padre Hurtado",
  "Peñaflor"
];



const Form = () => {
  const [company, setCompany] = useState("Viguez");
  const [rut, setRut] = useState("");
  const [rutError, setRutError] = useState(false);
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [birthDate, setBirthDate] = useState("");
  const [onboardingDate, setOnboardingDate] = useState("");

  

  const handleRutChange = (e) => {
    const formattedRut = formatRut(e.target.value);
    setRut(formattedRut);
  };

  const handleRutBlur = () => {
    const isValid = rutValidator(rut);
    setRutError(!isValid);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleBirthDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleOnboardingDateChange = (e) => {
    setOnboardingDate(e.target.value);
  };

  const formatRut = (rut) => {
    rut = rut.replace(/\./g, "").replace(/-/g, "");
    if (rut.length <= 1) return rut;
    let body = rut.slice(0, -1);
    let dv = rut.slice(-1).toUpperCase();
    body = body.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${body}-${dv}`;
  };

  const handleFormSubmit = (e) => {
    if (rutError) {
      e.preventDefault();
      alert("Por favor corrige los errores antes de enviar el formulario.");
    }
  };

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
          onSubmit={handleFormSubmit}
        >
          <input type="hidden" name="oid" value="00DKb000000OlrI" />
          <input type="hidden" name="retURL" value="http://tucar.app" />
          <input type="hidden" id="recordType" name="recordType" value="012Kb000000wujF" />
          <input type="hidden" id="lead_source" name="lead_source" value="Staffing" />
          <input type="hidden" id="company" name="company" value={company} />

          <div className="mb-4">
            <label htmlFor="first_name" className="block text-gray-700 font-Poppins font-medium">
              Nombre
            </label>
            <Input
              id="first_name"
              maxLength="40"
              name="first_name"
              size="20"
              type="text"
              placeholder="Juan"
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="last_name" className="block text-gray-700 font-Poppins font-medium">
              Apellidos
            </label>
            <Input
              id="last_name"
              maxLength="80"
              name="last_name"
              size="20"
              type="text"
              placeholder="Pérez"
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="00NKb00000DQu1E" className="block text-gray-700 font-Poppins font-medium">
              Identificador Nacional
            </label>
            <Input
              id="00NKb00000DQu1E"
              maxLength="100"
              name="00NKb00000DQu1E"
              size="20"
              type="text"
              placeholder="12.345.678-9"
              className="mt-1 p-2 border rounded w-full"
              value={rut}
              onChange={handleRutChange}
              onBlur={handleRutBlur}
              required
            />
            {rutError && <ErrorMessage>Rut inválido</ErrorMessage>}
          </div>

          <div className="mb-4">
            <label htmlFor="00NKb00000DQu1J" className="block text-gray-700 font-Poppins font-medium">
              Fecha de Nacimiento
            </label>
            <Input
              id="00NKb00000DQu1J"
              name="00NKb00000DQu1J"
              size="12"
              type="text"
              placeholder="DD/MM/AAAA"
              value={birthDate}
              onChange={handleBirthDateChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="00NKb00000DQu1Y" className="block text-gray-700 font-Poppins font-medium">
              Comuna de Residencia
            </label>
            <Select
              id="00NKb00000DQu1Y"
              name="00NKb00000DQu1Y"
              className="mt-1 p-2 border rounded w-full"
              required
            >
              <option value="" disabled selected>
                Selecciona tu comuna
              </option>
              {comunasDeSantiago.map((comuna) => (
                <option key={comuna} value={comuna}>
                  {comuna}
                </option>
              ))}
            </Select>
          </div>

          <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700 font-Poppins font-medium">
              Celular
            </label>
            <Input
              id="mobile"
              maxLength="40"
              name="mobile"
              size="20"
              type="text"
              placeholder="+56912345678"
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-Poppins font-medium">
              Email
            </label>
            <Input
              id="email"
              maxLength="80"
              name="email"
              size="20"
              type="email"
              placeholder="correo@ejemplo.com"
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="00NKb00000DRKXM" className="block text-gray-700 font-Poppins font-medium">
              Fecha Cita Onboarding
            </label>
            <Input
              id="00NKb00000DRKXM"
              name="00NKb00000DRKXM"
              size="12"
              type="text"
              placeholder="DD/MM/AAAA"
              value={onboardingDate}
              onChange={handleOnboardingDateChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="00NKb00000DRQGv" className="block text-gray-700 font-Poppins font-medium">
              Hora de citación
            </label>
            <Select
              id="00NKb00000DRQGv"
              name="00NKb00000DRQGv"
              className="mt-1 p-2 border rounded w-full"
              required
              value={selectedTime}
              onChange={handleTimeChange}
            >
              <option value="">--None--</option>
              <option value="AM - 10:00">AM - 10:00</option>
              <option value="PM - 15:30">PM - 15:30</option>
            </Select>
          </div>

          <div className="mb-4">
            <label htmlFor="00NKb00000DRPLG" className="block text-gray-700 font-Poppins font-medium">
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
            <label htmlFor="00NKb00000DRPLL" className="block text-gray-700 font-Poppins font-medium">
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
              Candidatos <span className="text-[#95D31C]">{company}</span>
            </h1>

            <h3 className="font-Poppins font-medium text-[#5b5d71] text-[20px] mt-[25px] w-[480px]">
              <p>Recuerda que los requisitos son:</p>
              <ul className="list-disc mx-5">
                <li>+23 años.</li>
                <li>Región Metropolitana.</li>
                <li>En caso de tener cuenta Uber, que esté activa</li>
              </ul>
            </h3>
          </div>
          <div className="mt-[45px]">
            <Swiper
              spaceBetween={60}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="mySwiper w-[650px]"
              allowTouchMov="none"
            >
              <SwiperSlide>
                <div className="mt-[2px] ml-[85px] hover:cursor-pointer">
                  <img
                    src="nirox4shadow.png"
                    className="asolute"
                    width={580}
                    height={331}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
