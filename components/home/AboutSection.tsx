import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../../public/images/foto4.jpg";
import { fadeIn, rotateAndTranslate } from "../../utils/motion";
import { Title } from "../common/Title";
import { SectionLayout } from "../Layouts";

export const AboutSection = () => {
  return (
    <SectionLayout id="about-section">
      <div className="p-4 flex mt-4 gap-12 max-w-7xl mx-auto flex-wrap-reverse items-center justify-center">
        <div className="relative">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={rotateAndTranslate()}
            className="bg-indigo-500 h-full w-[95%]  absolute top-0 left-0 -z-10 rounded-2xl shadow-2xl"
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={rotateAndTranslate(0.5)}
          >
            <Image
              src={photo}
              alt="team"
              className="-rotate-6 rounded-2xl shadow-2xl max-w-md w-[95%] h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="flex-1">
          <Title
            firstWord="Sobre "
            title="mí"
            subtitle="Conoce más "
            className="text-gray-900"
            isDark
            variant="secondary"
          />
          <br />
          <motion.p
            initial="hidden"
            whileInView="show"
            variants={fadeIn({})}
            className="text-gray-600 text-lg"
          >
            Ingeniero colegiado egresado de la Universidad Nacional de Trujillo,
            profesional aprobado por Osha Institute; con experiencia e interés
            prevención de riesgos laborales en trabajos de alto riesgo en el
            sector minero, contrucción y eléctrico. Implementación de SGSST,
            herramientas de gestión,estándares de seguridad, auditorías internas
            de SST y capacitacion de personal de las areas operativas a fin de
            lograr concientización y cero accidentes.
          </motion.p>

          <br />

          <div className="inline-grid grid-cols-2 gap-4">
            <span>
              <h6>Nombre: </h6>
            </span>
            <span>Jhon Doe</span>

            <span>
              <h6>Apellidos: </h6>
            </span>

            <span>Jhon Doe</span>

            <span>
              <h6>Edad: </h6>
            </span>
            <span>30</span>

            <span>
              <h6>Correo: </h6>
            </span>
            <span>ejemplo@gmail.com</span>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
