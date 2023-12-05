import { useBudgets } from "../contexts/BudgetsContext";
import useFormatCurrency from "../hooks/useFormatCurrency";
import useFormatDate from "../hooks/useFormatDate";
import Button from "./Button";

function Expense({ budget, expense, bgColor, showBudget }) {
  const { name, amount, date, id } = expense;
  const { dispatch } = useBudgets();

  console.log(budget);

  const formattedAmount = useFormatCurrency(amount);
  const formattedDate = useFormatDate(date);

  function handleDeleteExpense(e) {
    const id = e.target.closest("button").id;

    dispatch({
      type: "expense/delete",
      payload: { budgetId: budget.id, expenseId: id },
    });
  }

  return (
    <>
      <span className={`${bgColor} p-4`}>{name}</span>
      <span className={`${bgColor} p-4`}>{formattedAmount}</span>
      <span className={`${bgColor} p-4`}>{formattedDate}</span>
      {showBudget && (
        <div className={`${bgColor} p-4`}>
          <span
            className={`px-4 py-2 text-white bg-[${budget.color}] rounded-full`}
          >
            {budget.name}
          </span>
        </div>
      )}
      <span className={`${bgColor} p-2 flex items-center justify-center`}>
        <Button onClick={handleDeleteExpense} id={id} type="delete"></Button>
      </span>
    </>
  );
}

export default Expense;
