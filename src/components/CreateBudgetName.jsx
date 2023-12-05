import Input from "./Input";

function CreateBudgetName({ name, setName }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="budget-name">Name</label>
      <Input state={name} setState={setName} id="budget-name">
        e.g., Groceries
      </Input>
    </div>
  );
}

export default CreateBudgetName;
