import { useBudgets } from "../contexts/BudgetsContext";
import Budget from "./Budget";

function ExistingBudgets() {
  const {
    account: { budgets },
  } = useBudgets();

  return (
    <div className="col-span-2">
      <h2 className="pt-4 pb-8 text-5xl font-semibold">Existing budgets</h2>

      <div className="flex flex-row flex-wrap gap-8">
        {budgets.map((budget) => (
          <Budget budget={budget} key={budget.id} />
        ))}
      </div>
    </div>
  );
}

export default ExistingBudgets;
