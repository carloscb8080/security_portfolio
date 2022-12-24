import { Footer } from "../common";
import { NavBar } from "../common/NavBar";

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};
