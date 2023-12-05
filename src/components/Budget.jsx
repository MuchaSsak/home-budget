import { Link } from "react-router-dom";

import useFormatCurrency from "../hooks/useFormatCurrency";
import Button from "./Button";

function Budget({ budget, buttonType = "primary", onDelete }) {
  const { name, amount, expenses, id, color } = budget;

  const totalSpent = expenses.reduce((acc, cur) => acc + cur.amount, 0);
  const formattedAmount = useFormatCurrency(amount);
  const formattedSpent = useFormatCurrency(totalSpent);
  const formattedRemaining = useFormatCurrency(amount - totalSpent);

  return (
    <div
      className={`grid justify-between grid-cols-2 xl:col-span-1 col-span-2 gap-4 p-6 border-2 shadow-xl bg-slate-900 rounded-xl border-[${color}]`}
    >
      <h3 className={`text-2xl font-medium text-[${color}]`}>{name}</h3>
      <h3 className={`text-2xl text-right text-[${color}]`}>
        {formattedAmount} budgeted
      </h3>

      <progress
        className={`col-span-2 w-[100%] [&::-webkit-progress-bar]:bg-slate-400 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-[${color}]`}
        max={amount}
        value={totalSpent}
      ></progress>

      <h5 className={`text-[${color}]`}>{formattedSpent} spent</h5>
      <h5 className="text-right text-slate-400">
        {formattedRemaining}{" "}
        {amount - totalSpent >= 0 ? "remaining" : "overdue"}
      </h5>

      {buttonType === "primary" && (
        <Link to={`budget/${id}`} className="col-span-2 mx-auto outline-none">
          <Button color={color}>
            <span>View details</span>
            <img src="/cash_icon.svg" alt="Cash icon" />
          </Button>
        </Link>
      )}
      {buttonType === "delete" && (
        <Link to="/" className="col-span-2 mx-auto outline-none">
          <Button color={color} onClick={onDelete} type={buttonType}>
            Delete budget
          </Button>
        </Link>
      )}
    </div>
  );
}

export default Budget;
