export const RatesList = ({ rates }) => {
  return (
    <ul>
      {rates.map(([key, value]) => (
        <li key={key}>
          <span>{key}</span>
          <span>---{value}</span>
        </li>
      ))}
    </ul>
  );
};
