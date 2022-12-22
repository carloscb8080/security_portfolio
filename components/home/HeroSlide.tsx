import { motion } from "framer-motion";
import { BsCheckCircle } from "react-icons/bs";
import { textVariant } from "../../utils/motion";
import { Button } from "../common/Button";

export const HeroSlide = () => {
  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover bg-center overshadow flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      <motion.div
        variants={textVariant(1.1)}
        initial="hidden"
        whileInView="show"
        className="text-white max-w-2xl"
      >
        <h6 className="text-indigo-500"> ASESORÍA Y CONSULTORÍA EN </h6>
        <h1>SEGURIDAD Y SALUD EN EL TRABAJO </h1>
      </motion.div>

      <br />
      <ul className="ml-8">
        <Li label="Implementación" />
        <Li label="Auditorías" />
        <Li label="Auditorías" />
        <Li label="Auditorías" />
      </ul>

      <br />
      <div>
        <Button variant="outlined" color="indigo">
          Contactar ahora <BsCheckCircle className="inline-block ml-2" />
        </Button>
        <Button variant="contained" color="indigo">
          Descargar CV <BsCheckCircle className="inline-block ml-2" />
        </Button>
      </div>
    </div>
  );
};

const Li = ({ label }: { label: string }) => (
  <li className="text-white text-xl">
    <BsCheckCircle className="inline-block mr-2 text-indigo-500 font-extrabold" />
    {label}
  </li>
);
