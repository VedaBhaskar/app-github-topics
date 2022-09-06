import React, { useState } from "react";
import styled from "styled-components";
import { useRelatedTopics } from "../graphql/hooks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 4rem;
`;

const Heading = styled.h1`
  font-size: 3rem;
`;

export default function ViewTitles() {
  const [currentTopic, setCurrentTopic] = useState("react");

  const { relatedTopics, isLoading, isError } = useRelatedTopics(currentTopic);

  return (
    <Container>
      <Heading>
        # <b>{currentTopic}</b>
      </Heading>

      {isError ? (
        <p>Error in fetching. Please try again</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <tbody>
            <tr>
              <th>Related Topics</th>
              <th>Stargazers Count</th>
            </tr>

            {relatedTopics?.length > 0 ? (
              <>
                {relatedTopics.map((eachRelatedTopic) => (
                  <tr key={eachRelatedTopic.id}>
                    <td>
                      <button
                        type="button"
                        onClick={(e) => {
                          setCurrentTopic(eachRelatedTopic.name);
                        }}
                      >
                        {eachRelatedTopic.name}
                      </button>
                    </td>
                    <td>{eachRelatedTopic.stargazerCount}</td>
                  </tr>
                ))}
              </>
            ) : (
              <tr>
                <td>No related topics found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </Container>
  );
}
