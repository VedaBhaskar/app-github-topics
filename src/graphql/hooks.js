import { GraphQLClient } from "graphql-request";
import { useEffect, useState } from "react";
import { getRelatedTopicsByTopicName } from "./queries";

const headers = {
  authorization: "Bearer " + process.env.REACT_APP_API_BEARER_TOKEN,
};

export const useRelatedTopics = (parentTopicName) => {
  const endpoint = "https://api.github.com/graphql";

  const client = new GraphQLClient(endpoint);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [relatedTopics, setRelatedTopics] = useState([]);

  const getRelatedTopics = async () => {
    try {
      setIsLoading(true);

      const variables = {
        topicName: parentTopicName,
      };

      const data = await client.request(
        getRelatedTopicsByTopicName,
        variables,
        headers
      );

      setRelatedTopics(data.topic.relatedTopics);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (parentTopicName?.length) {
      getRelatedTopics();
    }
    // eslint-disable-next-line
  }, [parentTopicName]);

  return {
    relatedTopics,
    isLoading,
    isError,
  };
};
