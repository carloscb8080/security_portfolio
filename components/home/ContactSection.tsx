import { motion } from "framer-motion";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { fadeIn } from "../../utils/motion";
import { ContactItem, Title } from "../common";
import { ContactForm } from "../forms";
import { SectionLayout } from "../Layouts";

export const ContactSection = () => {
  return (
    <SectionLayout className="p-4" id="contact-section">
      <div className="max-w-4xl mx-auto  ">
        <Title
          subtitle="¿Trabajamos juntos?"
          firstWord="Contáctame "
          title="ahora"
          isDark
        />
        <br />
        <br />

        <div className="flex flex-col lg:flex-row shadow-lg p-2 rounded-2xl ">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn({})}
            className="bg-indigo-500 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-50">
              Información de contacto
            </h2>
            <p className="text-gray-200">
              Rellene el formulario y me pondré en contacto con usted lo antes
              posible.
            </p>
            <br />
            <ContactItem
              icon={<MdEmail />}
              title="Correo"
              text="carloscb8080@gmail.com "
              href="#"
              className="text-gray-50"
            />
            <ContactItem
              icon={<MdPhone />}
              title="Teléfono"
              text="(+57) 300 000 0000"
              href="#"
              className="text-gray-50"
            />
            <ContactItem
              icon={<AiFillFacebook />}
              title="Facebook"
              text="facebook.com/carloscb8080"
              href="#"
              className="text-gray-50"
            />
            <ContactItem
              icon={<AiFillLinkedin />}
              title="Linkedin"
              text="linkedin.com/carloscb8080"
              href="#"
              className="text-gray-50"
            />
            <ContactItem
              icon={<MdLocationOn />}
              title="Dirección"
              text="Cra 1 # 2 - 3"
              href="#"
              className="text-gray-50"
            />
          </motion.div>
          <ContactForm />
        </div>
      </div>
    </SectionLayout>
  );
};
