export const TopicListItem = ({ name, stargazerCount, onClick }) => {
  return (
    <tr>
      <td>
        <button type="button" onClick={onClick}>
          {name}
        </button>
      </td>
      <td>{stargazerCount}</td>
    </tr>
  );
};
