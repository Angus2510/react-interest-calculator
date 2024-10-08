function BalanceDisplay({ balance }) {
  return (
    <div className="alert alert-primary text-center mt-3">
      <h2>Current Balance: ${balance.toFixed(2)}</h2>
    </div>
  );
}

export default BalanceDisplay;
