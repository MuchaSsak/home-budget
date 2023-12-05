function BudgetExpensesHeader({ color, name }) {
  return (
    <h1 className=" text-5xl leading-[1.1] font-semibold col-span-2">
      <span className={`text-[${color}]`}>{name}</span> Expenses
    </h1>
  );
}

export default BudgetExpensesHeader;
