export const getRelatedTopicsByTopicName = /* GraphQL */ `
  query getRelatedTopicsByTopicName ($topicName: String!) {
    topic(name: $topicName) {
      name
      stargazerCount
      id
      relatedTopics (first: 10) {
        name
        stargazerCount
        id
      }
    }
  }
`;
