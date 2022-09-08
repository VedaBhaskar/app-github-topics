import { getRelatedTopicsByTopicName } from "../graphql/queries";

export const getRelatedTopics = async (parentTopicName, client) => {
  const variables = {
    topicName: parentTopicName,
  };

  const data = await client.request(getRelatedTopicsByTopicName, variables);

  return data.topic.relatedTopics;
};
