export const ExchangeInfo = ({ exchangeInfo }) => {
  console.log(exchangeInfo);
  return (
    <div>
      <span>Amount : {exchangeInfo.amount} </span>
      <span>From : {exchangeInfo.from} </span>
      <span>To : {exchangeInfo.to} </span>
      <span>Result : {exchangeInfo.result}</span>
    </div>
  );
};
