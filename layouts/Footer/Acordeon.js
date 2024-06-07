import React from "react";
import classnames from "classnames";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export default function Acordeon({ isDark }) {
  const url = 'https://tucar.app'

  const renderAccordionLink = (href, label) => (
  
      <a href={href}
        style={{ paddingBottom: "7px" }}
        className="font-Poppins font-light cursor-pointer hover:text-[#6cc8dd]"
      >
        {label}
      </a>
    
  );

  return (
    <Accordion
      allowToggle
      style={{
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "20px",
      }}
      className={classnames("text-[13px]", {
        "text-[#333]": !isDark,
        "text-white": isDark,
      })}
    >
      <AccordionItem style={{ marginBottom: "20px" }}>
        <h2>
          <AccordionButton>
            <Box className="flex justify-between w-full text-[]">
              <span className="font-Poppins font-medium text-[14px]">
                Planes y precios
              </span>
            </Box>
            <AccordionIcon
              style={{ width: "20px", height: "20px" }}
              className="w-5 h-5"
            />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <div className="w-full flex flex-col" style={{ paddingTop: "20px" }}>
            {renderAccordionLink("https://tucar.app/precios", "Precios")}
            {renderAccordionLink("https://tucar.app/plan-premium", "Plan Eléctrico Premium")}
            {renderAccordionLink("https://tucar.app/plan-plus", "Plan Eléctrico  Plus")}
            {/* {renderAccordionLink("/plan-standard", "Plan Combustión Standard")} */}
          
            {renderAccordionLink("https://tucar.app/beneficios", "Beneficios")}
          </div>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box className="flex justify-between w-full text-[]">
              <span className="font-Poppins font-medium text-[14px]">
                Recursos
              </span>
            </Box>
            <AccordionIcon
              style={{ width: "20px", height: "20px" }}
              className="w-5 h-5"
            />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <div className="w-full flex flex-col" style={{ paddingTop: "20px" }}>
            {renderAccordionLink(
              "https://tucar.app/recursos/terminos-y-condiciones",
              "Términos de Servicio"
            )}
            {renderAccordionLink(
              "https://tucar.app/recursos/preguntas-frecuentes",
              "Preguntas frecuentes"
            )}
            {renderAccordionLink(
              "https://tucar.app/recursos/politica-de-privacidad",
              "Política de privacidad"
            )}
            {renderAccordionLink("https://tucar.app/recursos/ayuda", "Contacto")}
          </div>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem className="mt-[20px]">
        <AccordionPanel>
          <div className="w-full flex flex-col" style={{ paddingTop: "20px" }}>
            <a
              href="https://advertising.tucar.app/"
              style={{ paddingBottom: "7px" }}
              className="font-Poppins font-light cursor-pointer hover:text-[#6cc8dd]"
            >
              Conoce y cotiza nuestros servicios de publicidad vehicular para
              empresas.
            </a>
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
