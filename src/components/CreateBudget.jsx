import { useState } from "react";

import { COLORS } from "../config";
import { capitalizeFirstWord } from "../helpers";
import { useBudgets } from "../contexts/BudgetsContext";
import Button from "./Button";
import CreateBudgetName from "./CreateBudgetName";
import CreateBudgetAmount from "./CreateBudgetAmount";

function CreateBudget() {
  const {
    account: { budgets },
    dispatch,
  } = useBudgets();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  function handleCreateBudget(e) {
    e.preventDefault();

    dispatch({
      type: "budget/create",
      payload: {
        name: capitalizeFirstWord(name),
        amount: Number(amount),
        color: COLORS[budgets.length % COLORS.length],
      },
    });
    setName("");
    setAmount("");
  }

  return (
    <form
      className="grid grid-cols-1 gap-4 p-8 text-xl border-2 col-span-2 xl:col-span-1 border-white border-dashed shadow-xl bg-slate-900 rounded-2xl outline-8 outline-slate-900 outline max-w-[50rem]"
      onSubmit={handleCreateBudget}
    >
      <h3 className="text-2xl font-semibold">Create budget</h3>

      <CreateBudgetName name={name} setName={setName} />
      <CreateBudgetAmount amount={amount} setAmount={setAmount} />

      <Button>
        <span>Create budget</span>
        <img src="/money_icon.svg" alt="Money bag icon" />
      </Button>
    </form>
  );
}

export default CreateBudget;
