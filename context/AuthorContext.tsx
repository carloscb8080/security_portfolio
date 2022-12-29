import { createContext, FC, PropsWithChildren } from "react";
import { Author } from "../graphql";

interface AuthorContextProps {
  author: Author;
}

export const AuthorContext = createContext<AuthorContextProps>(
  {} as AuthorContextProps
);

export const AuthorProvider: FC<PropsWithChildren & { author: Author }> = ({
  children,
  author,
}) => {
  return (
    <AuthorContext.Provider value={{ author }}>
      {children}
    </AuthorContext.Provider>
  );
};
