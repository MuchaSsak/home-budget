import { useState } from "react";

import { capitalizeFirstWord } from "../helpers";
import { useBudgets } from "../contexts/BudgetsContext";
import Button from "./Button";
import AddExpenseName from "./AddExpenseName";
import AddExpenseAmount from "./AddExpenseAmount";
import AddExpenseCategory from "./AddExpenseCategory";

function AddExpense({ defaultCategory, categoryOn = true }) {
  const {
    account: { budgets },
    dispatch,
  } = useBudgets();

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(defaultCategory);

  function handleAddExpense(e) {
    e.preventDefault();

    dispatch({
      type: "expense/add",
      payload: {
        name: capitalizeFirstWord(name),
        amount: Number(amount),
        category,
      },
    });

    setName("");
    setAmount("");
  }

  return (
    <form
      className="grid grid-cols-2 gap-4 p-8 text-xl border-2 col-span-2 xl:col-span-1 border-white border-dashed shadow-xl bg-slate-900 rounded-2xl outline-8 outline-slate-900 outline max-w-[50rem]"
      onSubmit={handleAddExpense}
    >
      <h3 className="col-span-2 text-2xl font-semibold">Add a new expense</h3>

      <AddExpenseName name={name} setName={setName} />
      <AddExpenseAmount amount={amount} setAmount={setAmount} />
      {budgets.length > 1 && categoryOn && (
        <AddExpenseCategory category={category} setCategory={setCategory} />
      )}

      <Button className="col-span-2">
        <span>Add expense</span>
        <img src="/plus_icon.svg" alt="Money bag icon" />
      </Button>
    </form>
  );
}

export default AddExpense;
