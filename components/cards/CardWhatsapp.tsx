import { useContext } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { AuthorContext } from "../../context";

export const CardWhatsapp = () => {
  const { author } = useContext(AuthorContext);
  return (
    <div className="rounded-3xl shadow-lg p-4 bg-gradient-to-r from-indigo-900 to-indigo-400">
      <div className="flex items-center justify-center">
        <div className="text-center mt-2">
          <h1 className="text-lg font-bold text-gray-50 mr-4">
            ¿Quieres saber más?{" "}
            <span className="text-gray-200">¡Contáctame!</span>
          </h1>
        </div>
        <div className="mt-4">
          <a
            href={`https://wa.me/${author.phone}?text=Hola%20${author.firstName}%20${author.lastName}%20me%20gustaría%20que%20me%20hagas%20una%20cotización`}
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 text-white p-4 rounded-md font-bold flex items-center justify-center hover:bg-green-400"
          >
            <RiWhatsappFill className="mr-2" />
            Conversar por Whatsapp
          </a>
        </div>
      </div>
    </div>
  );
};
