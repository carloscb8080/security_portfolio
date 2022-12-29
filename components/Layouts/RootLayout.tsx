import { AuthorProvider } from "../../context";
import { Author } from "../../graphql";
import { Footer } from "../common";
import { NavBar } from "../common/NavBar";

export const RootLayout = ({
  children,
  author,
}: {
  children: React.ReactNode;
  author: Author;
}) => {
  return (
    <AuthorProvider author={author}>
      <div className="">
        <NavBar />
        {children}
        <Footer />
      </div>
    </AuthorProvider>
  );
};
