import Image from "next/image";
import photo from "../../public/images/foto10.jpg";

const AboutSection = () => {
  return (
    <section className="flex mt-4 gap-4 max-w-6xl mx-auto">
      <div className="flex-1">
        <Image src={photo} alt="team" />
      </div>
      <div className="flex-1 p-4">
        <h1>¿Quién soy?</h1>
        <p className="text-gray-600 text-lg">
          Ingeniero colegiado egresado de la Universidad Nacional de Trujillo,
          profesional aprobado por Osha Institute; con experiencia e interés
          prevención de riesgos laborales en trabajos de alto riesgo en el
          sector minero, contrucción y eléctrico. Implementación de SGSST,
          herramientas de gestión,estándares de seguridad, auditorías internas
          de SST y capacitacion de personal de las areas operativas a fin de
          lograr concientización y cero accidentes.
        </p>

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
    </section>
  );
};

export default AboutSection;
