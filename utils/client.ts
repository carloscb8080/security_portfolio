import { ApolloClient, InMemoryCache } from "@apollo/client";
import { env } from "../config";
const { token, url } = env.cms;

export const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
