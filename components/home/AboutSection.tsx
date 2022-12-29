import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { AuthorContext } from "../../context";
import photo from "../../public/images/foto4.jpg";
import { fadeIn, rotateAndTranslate } from "../../utils/motion";
import { Title } from "../common/Title";
import { SectionLayout } from "../Layouts";

export const AboutSection = () => {
  const { author } = useContext(AuthorContext);
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
            {author.biography}
          </motion.p>

          <br />

          <div className="flex gap-4 flex-wrap">
            <div className="flex flex-col flex-1 gap-4">
              <Item
                label="Nombre"
                value={author.firstName + " " + author.lastName}
              />
              <Item
                label="Edad"
                value={
                  new Date().getFullYear() -
                  new Date(author.birth).getFullYear() +
                  " años"
                }
              />
              <Item label="Email" value={author.email} />
              <Item label="Teléfono" value={author.phone} />
              <Item label="Dirección" value={author.address} />
            </div>
            <div className="flex gap-4 flex-col flex-1">
              {author.facebook && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 text-white p-2 rounded-md font-bold flex items-center justify-center"
                  href={author.facebook as string}
                >
                  <RiFacebookBoxFill className="mr-2" />
                  Facebook
                </a>
              )}

              {author.instagram && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="bg-pink-500 text-white p-2 rounded-md font-bold flex items-center justify-center"
                  href={author.instagram as string}
                >
                  <RiFacebookBoxFill className="mr-2" />
                  Instagram
                </a>
              )}

              {author.linkedin && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-900 text-white p-2 rounded-md font-bold flex items-center justify-center"
                  href={author.linkedin as string}
                >
                  <RiLinkedinBoxFill className="mr-2" />
                  Linkedin
                </a>
              )}

              {author.phone && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 text-white p-2 rounded-md font-bold flex items-center justify-center"
                  href={`https://wa.me/${author.phone}?text=Hola%20${author.firstName}%20${author.lastName}%20me%20gustaría%20que%20me%20hagas%20una%20cotización`}
                >
                  <RiWhatsappFill className="mr-2" />
                  Contáctame
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

const Item = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-4">
    <span className="text-gray-600">{label}</span>
    <span className="text-gray-900">{value}</span>
  </div>
);
