export default function Table(props) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((year) => (
          <tr key={year.year}>
            <td>{year.year}</td>
            <td>{formatter.format(year.savingsEndOfYear)}</td>
            <td>{formatter.format(year.yearlyInterest)}</td>
            <td>
              {formatter.format(
                year.savingsEndOfYear -
                  props.initialInvestment -
                  year.yearlyContribution * year.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestment + year.yearlyContribution * year.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
