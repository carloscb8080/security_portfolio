import { motion } from "framer-motion";
import { useContext } from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { AuthorContext } from "../../context";
import { fadeIn } from "../../utils/motion";
import { CardWhatsapp } from "../cards/CardWhatsapp";
import { ContactItem, Title } from "../common";
import { ContactForm } from "../forms";
import { SectionLayout } from "../Layouts";

export const ContactSection = () => {
  const { author } = useContext(AuthorContext);
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

        <CardWhatsapp />

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
              text={author.email}
              href={`mailto:${author.email}`}
              className="text-gray-50"
            />
            <ContactItem
              icon={<MdPhone />}
              title="Teléfono"
              text={author.phone}
              href={`tel:${author.phone}`}
              className="text-gray-50"
            />
            {author.facebook && (
              <ContactItem
                icon={<AiFillFacebook />}
                title="Facebook"
                text={author.facebook}
                href={author.facebook}
                className="text-gray-50"
              />
            )}
            {author.linkedin && (
              <ContactItem
                icon={<AiFillLinkedin />}
                title="Linkedin"
                text={author.linkedin}
                href={author.linkedin}
                className="text-gray-50"
              />
            )}
            <ContactItem
              icon={<MdLocationOn />}
              title="Dirección"
              text={author.address}
              className="text-gray-50"
            />
          </motion.div>
          <ContactForm />
        </div>
      </div>
    </SectionLayout>
  );
};
