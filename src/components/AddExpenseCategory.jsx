import { useBudgets } from "../contexts/BudgetsContext";

function AddExpenseCategory({ category, setCategory }) {
  const {
    account: { budgets },
  } = useBudgets();

  return (
    <div className="flex flex-col flex-grow col-span-2 gap-2 pb-2">
      <label htmlFor="expense-category">Budget category</label>
      <select
        id="expense-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 rounded-md bg-slate-950 outline-0 shadow-[0px_0px_0px_1px_#fff] focus-visible:shadow-[0px_0px_0px_2px_#7c3aed] transition-shadow"
      >
        {budgets.map((budget) => (
          <option value={budget.id} key={budget.id}>
            {budget.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AddExpenseCategory;
