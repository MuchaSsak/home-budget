import Input from "./Input";

function AddExpenseName({ name, setName }) {
  return (
    <div className="flex flex-col flex-grow gap-2">
      <label htmlFor="expense-name">Name</label>
      <Input state={name} setState={setName} id="expense-name">
        e.g., Coffee
      </Input>
    </div>
  );
}

export default AddExpenseName;
