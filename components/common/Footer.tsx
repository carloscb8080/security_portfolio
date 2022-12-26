import Image from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdEmail, MdPhone } from "react-icons/md";
import { ContactItem } from "./ContactItem";
import { IconButton } from "./IconButton";
import { Title } from "./Title";

export const Footer = () => {
  return (
    <footer className="p-8 border-t-2 border-t-gray-200 ">
      <div className="flex justify-center items-center gap-4 max-w-7xl mx-auto flex-col lg:flex-row">
        <div className="flex-1">
          <Title
            firstWord="José"
            title="Carlos"
            subtitle="Ingeniero de seguridad"
            isDark
            className="text-4xl"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <Image
            src="/images/foto1.jpg"
            width={100}
            height={100}
            alt="logo"
            className="rounded-full object-cover aspect-square border-4 border-indigo-500 mb-1"
          />

          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/in/carloscb8080/"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton>
                <AiFillLinkedin />
              </IconButton>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <IconButton>
                <AiFillInstagram />
              </IconButton>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <IconButton>
                <AiFillFacebook />
              </IconButton>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <ContactItem
            className=""
            icon={<MdEmail />}
            title="Correo"
            text="carloscb8080@gmail.com "
            href="#"
          />
          <ContactItem
            className=""
            icon={<MdPhone />}
            title="Teléfono"
            text="(+57) 300 000 0000"
            href="#"
          />
          <ContactItem
            className=""
            icon={<AiFillFacebook />}
            title="Facebook"
            text="facebook.com/carloscb8080"
            href="#"
          />
        </div>
      </div>
      <br />
      <p className="text-center">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};
