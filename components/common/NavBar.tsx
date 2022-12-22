import { motion } from "framer-motion";
import { useState } from "react";
import { reboundVariant } from "../../utils/motion";
import { Route, routes } from "../../utils/routes";
import { Button } from "./Button";
export const NavBar = () => {
  const [show, setShow] = useState(true);
  return (
    <motion.nav
      initial="hidden"
      whileInView="show"
      variants={reboundVariant}
      className="p-4 absolute w-full z-50  top-0"
      style={
        {
          // backdropFilter: "blur(10px)",
        }
      }
    >
      <div className="flex items-center justify-between flex-wrap max-w-6xl mx-auto">
        <div className="flex items-center flex-shrink-0  mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-white text-xl tracking-tight">
            Tailwind CSS
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setShow(!show)}
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-gray-900"
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
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              {routes.map((route) => (
                <NavBarItem key={route.label} route={route} />
              ))}
            </div>
            <div>
              <div className="block lg:hidden mt-8" />
              <Button color="indigo">Pedir cotización</Button>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

const NavBarItem = ({ route }: { route: Route }) => {
  return (
    <a
      href={route.href}
      className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-100 mr-4 font-bold"
    >
      {route.label}
    </a>
  );
};
