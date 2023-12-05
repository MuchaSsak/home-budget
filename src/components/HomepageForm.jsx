import { useState } from "react";

import { capitalizeFirstWord } from "../helpers";
import { useBudgets } from "../contexts/BudgetsContext";
import Button from "./Button";
import Input from "./Input";

function HomepageSectionForm() {
  const { dispatch } = useBudgets();
  const [name, setName] = useState("");

  function handleCreateAccount(e) {
    e.preventDefault();

    dispatch({
      type: "account/create",
      payload: capitalizeFirstWord(name),
    });
    setName("");
  }

  return (
    <form
      className="flex flex-col items-start gap-4"
      onSubmit={handleCreateAccount}
    >
      <Input state={name} setState={setName}>
        What's your name?
      </Input>
      <Button>
        <span>Create Account</span>
        <img src="/account_icon.svg" alt="Create account icon" />
      </Button>
    </form>
  );
}

export default HomepageSectionForm;
