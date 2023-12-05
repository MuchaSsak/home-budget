import { useBudgets } from "../contexts/BudgetsContext";
import Expense from "./Expense";

const bgColors = ["bg-slate-900", "bg-slate-950"];

function ExpenseList({ expenses, showBudget = false }) {
  const {
    account: { budgets },
  } = useBudgets();

  return (
    <div
      className={`grid items-center grid-cols-${
        showBudget ? "5" : "4"
      } col-span-2 text-center`}
    >
      <label className="pb-2 text-2xl font-medium">Name</label>
      <label className="pb-2 text-2xl font-medium">Amount</label>
      <label className="pb-2 text-2xl font-medium">Date</label>
      {showBudget && (
        <label className="pb-2 text-2xl font-medium">Budget</label>
      )}
      <label className="pb-2 text-2xl font-medium"></label>

      {expenses.map((expense, i) => {
        return (
          <Expense
            budget={budgets.find((budget) => budget.id === expense.budgetId)}
            expense={expense}
            bgColor={bgColors[i % bgColors.length]}
            showBudget={showBudget}
            key={expense.id}
          />
        );
      })}
    </div>
  );
}

export default ExpenseList;
