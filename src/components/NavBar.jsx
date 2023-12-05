import { Link } from "react-router-dom";

import { useBudgets } from "../contexts/BudgetsContext";
import Button from "./Button";

function NavBar({ hasDeleteUser = true }) {
  const { dispatch } = useBudgets();

  function handleDeleteAccount() {
    const answer = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (!answer) return;
    dispatch({ type: "account/delete" });
  }

  return (
    <nav className="flex flex-row justify-between w-screen px-[clamp(2rem,15vw,16rem)] py-6">
      <Link to="/" style={{ outline: "0px" }}>
        <button className="flex flex-row items-center gap-2 p-3 transition-shadow duration-300 ease rounded-xl hover:shadow-[0px_0px_0px_3px_#7c3aed] outline-0 focus-visible:shadow-[0px_0px_0px_3px_#7c3aed]">
          <img className="w-8" src="/logo.svg" alt="Homebudget logo" />
          <span className="hidden text-2xl font-semibold md:block">
            Homebudget
          </span>
        </button>
      </Link>

      {hasDeleteUser && (
        <Button onClick={handleDeleteAccount} type="delete">
          Delete account
        </Button>
      )}
    </nav>
  );
}

export default NavBar;
