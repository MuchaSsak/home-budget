import useFormatCurrency from "../hooks/useFormatCurrency";
import Input from "./Input";

function CreateBudgetAmount({ amount, setAmount }) {
  const placeholder = `e.g., ${useFormatCurrency(350)}`;

  return (
    <div className="flex flex-col gap-2 pb-2">
      <label htmlFor="budget-amount">Amount</label>
      <Input
        state={amount}
        setState={setAmount}
        type="number"
        step="0.01"
        min="0"
        id="budget-amount"
      >
        {placeholder}
      </Input>
    </div>
  );
}

export default CreateBudgetAmount;
