import { useEffect, useState } from "react";
import { getRelatedTopics } from "../api/topics";
import { useGraphqlClient } from "../contexts/api";

export const useRelatedTopics = (parentTopicName) => {
  const client = useGraphqlClient();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [relatedTopics, setRelatedTopics] = useState([]);

  useEffect(() => {
    if (parentTopicName?.length) {
      async function triggerApi() {
        try {
          setIsLoading(false);
          setIsError(false);
          const topics = await getRelatedTopics(parentTopicName, client);
          setRelatedTopics(topics);
        } catch (error) {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      }
      triggerApi();
    }
  }, [parentTopicName]);

  return {
    relatedTopics,
    isLoading,
    isError,
  };
};
