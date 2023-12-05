import useFormatCurrency from "../hooks/useFormatCurrency";
import Input from "./Input";

function AddExpenseAmount({ amount, setAmount }) {
  const placeholder = `e.g., ${useFormatCurrency(20)}`;

  return (
    <div className="flex flex-col flex-grow gap-2">
      <label htmlFor="expense-amount">Amount</label>
      <Input
        state={amount}
        setState={setAmount}
        type="number"
        step="0.01"
        min="0"
        id="expense-amount"
      >
        {placeholder}
      </Input>
    </div>
  );
}

export default AddExpenseAmount;
