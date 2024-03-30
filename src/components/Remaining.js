import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export default function Remaining() {
  let { budget, expenses, currency } = useContext(AppContext);
  let totalExpenses = expenses.reduce((total, expense) => {
    total = total + expense.cost;
    return total;
  }, 0);
  let remaining = budget - totalExpenses;

  return (
    <div class="alert alert-primary">
      <span>
        Remaining: {currency}
        {remaining}
      </span>
    </div>
  );
}
