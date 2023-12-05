import { useBudgets } from "../contexts/BudgetsContext";
import AddExpense from "./AddExpense";
import CreateBudget from "./CreateBudget";
import DashboardHeader from "./DashboardHeader";
import ExistingBudgets from "./ExistingBudgets";
import RecentExpensesHeader from "./RecentExpensesHeader";
import ExpenseList from "./ExpenseList";

function DashboardSection() {
  const {
    account: { username, budgets },
  } = useBudgets();

  const expenses = budgets.flatMap((budget) => budget.expenses);

  return (
    <div className="flex-grow px-[clamp(4rem,15vw,24rem)] grid grid-cols-2 gap-8 items-start">
      <DashboardHeader name={username} />
      <CreateBudget />
      {budgets.length !== 0 && (
        <>
          <AddExpense defaultCategory={budgets[0].id} />
          <ExistingBudgets />
        </>
      )}
      {expenses.length !== 0 && (
        <>
          <RecentExpensesHeader />
          <ExpenseList expenses={expenses} showBudget={true} />
        </>
      )}
    </div>
  );
}

export default DashboardSection;
