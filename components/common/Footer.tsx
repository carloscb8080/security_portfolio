import Image from "next/image";
import { useContext } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { AuthorContext } from "../../context";
import { ContactItem } from "./ContactItem";
import { IconButton } from "./IconButton";
import { Title } from "./Title";

export const Footer = () => {
  const { author } = useContext(AuthorContext);
  return (
    <footer className="p-8 border-t-2 border-t-gray-200 ">
      <div className="flex justify-center items-center gap-4 max-w-7xl mx-auto flex-col lg:flex-row">
        <div className="flex-1">
          <Title
            firstWord={author.firstName}
            title={author.lastName}
            subtitle={author.profession}
            isDark
            className="text-2xl"
          />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <Image
            src={author.avatar.url}
            width={100}
            height={100}
            alt="logo"
            className="rounded-full object-cover aspect-square border-4 border-indigo-500 mb-1"
          />

          <div className="flex items-center">
            {author.linkedin && (
              <a href={author.linkedin} target="_blank" rel="noreferrer">
                <IconButton>
                  <AiFillLinkedin />
                </IconButton>
              </a>
            )}
            {author.instagram && (
              <a href={author.instagram} target="_blank" rel="noreferrer">
                <IconButton>
                  <AiFillInstagram />
                </IconButton>
              </a>
            )}
            {author.facebook && (
              <a href={author.facebook} target="_blank" rel="noreferrer">
                <IconButton>
                  <AiFillFacebook />
                </IconButton>
              </a>
            )}
          </div>
        </div>
        <div className="flex-1">
          <ContactItem
            className=""
            icon={<MdEmail />}
            title="Correo"
            text={author.email}
            href={`mailto:${author.email}`}
          />
          <ContactItem
            className=""
            icon={<MdPhone />}
            title="Teléfono"
            text={author.phone}
            href={`tel:${author.phone}`}
          />
          <ContactItem
            className=""
            icon={<MdLocationOn />}
            title="Dirección"
            text={author.address}
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
