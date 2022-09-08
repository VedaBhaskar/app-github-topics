import { GraphQLClient } from "graphql-request";
import React, { useContext, useMemo } from "react";

export const GraphqlClientContext = React.createContext();

export const GraphqlClientProvider = ({ children }) => {
  const client = useMemo(() => {
    const endpoint = "https://api.github.com/graphql";

    const headers = {
      authorization: "Bearer " + process.env.REACT_APP_API_BEARER_TOKEN,
    };

    const client = new GraphQLClient(endpoint, {
      headers,
    });
    return client;
  }, []);
  return (
    <GraphqlClientContext.Provider value={client}>
      {children}
    </GraphqlClientContext.Provider>
  );
};

export const useGraphqlClient = () => useContext(GraphqlClientContext);
