import { motion } from "framer-motion";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { IoCallSharp } from "react-icons/io5";
import { AuthorContext } from "../../context";
import { reboundVariant } from "../../utils/motion";
import { Route, routes } from "../../utils/routes";
import { Button } from "./Button";
import { IconButton } from "./IconButton";

export const NavBar = () => {
  const { author } = useContext(AuthorContext);
  const name =
    author.firstName.split(" ")[0] + " " + author.lastName.split(" ")[0];
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(window.innerWidth > 1024);
  }, []);

  return (
    <motion.nav
      initial="hidden"
      whileInView="show"
      variants={reboundVariant}
      className="p-4 absolute w-full z-50  top-0"
    >
      <div className="flex items-center justify-between flex-wrap max-w-7xl mx-auto">
        <div className="flex items-center flex-shrink-0  mr-6">
          <span className="italic relative font-semibold text-white text-xl tracking-tight">
            {name}
            <span
              className="t-stroke absolute bg-indigo-500 w-10 h-10 -z-10  -left-4"
              style={{
                borderRadius: "65% 35% 55% 45% / 30% 35% 65% 70%",
              }}
            ></span>
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setShow(!show)}
            className="flex items-center px-3 py-2 border rounded text-gray-50 border-gray-50 hover:text-gray-200 hover:border-gray-200"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {show && (
          <div
            className={`w-full text-center block flex-grow lg:flex lg:items-center lg:w-auto lg:bg-transparent  ${
              show ? "bg-black bg-opacity-100 p-2 rounded-xl mt-1" : ""
            }`}
          >
            <div className="text-sm lg:flex-grow">
              {routes.map((route) => (
                <NavBarItem key={route.label} route={route} />
              ))}
            </div>
            <div className="block lg:hidden mt-4" />
            <div className="flex justify-center items-center">
              {author.facebook && (
                <IconButton
                  onClick={() =>
                    window.open(author.facebook as string, "_blank")
                  }
                >
                  <AiFillFacebook />
                </IconButton>
              )}
              {author.phone && (
                <IconButton onClick={() => window.open(`tel:${author.phone}`)}>
                  <IoCallSharp />
                </IconButton>
              )}
              {author.linkedin && (
                <IconButton
                  onClick={() =>
                    window.open(author.linkedin as string, "_blank")
                  }
                >
                  <AiFillLinkedin />
                </IconButton>
              )}

              <Link href="/#contact-section">
                <Button color="indigo" className="ml-2">
                  Contáctame
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

const NavBarItem = ({ route }: { route: Route }) => {
  return (
    <Link
      href={route.href}
      className="transition ease-in-out duration-300 border-b-4 border-transparent block mt-4 lg:inline-block lg:mt-0 text-white mr-4 font-extrabold hover:text-indigo-500 hover:border-indigo-500"
    >
      {route.label}
    </Link>
  );
};
