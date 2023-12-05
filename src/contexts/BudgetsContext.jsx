import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";

import { INITIAL_STATE, TOASTIFY_OPTIONS } from "../config";

export const BudgetsContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "account/load/initialState": {
      return INITIAL_STATE;
    }

    case "account/load/storedState": {
      return {
        ...state,
        account: action.payload,
      };
    }

    case "account/create": {
      const newAccount = {
        ...INITIAL_STATE.account,
        username: action.payload,
      };
      localStorage.setItem("account", JSON.stringify(newAccount));
      toast.success(
        `Created an account for ${newAccount.username}! 🙂`,
        TOASTIFY_OPTIONS
      );
      return { ...state, account: newAccount };
    }

    case "account/delete": {
      localStorage.clear();
      toast.success(
        `Deleted the ${state.account.username} account! 🗑️`,
        TOASTIFY_OPTIONS
      );
      return INITIAL_STATE;
    }

    case "budget/create": {
      const { name, amount, color } = action.payload;
      const newAccount = {
        ...state.account,
        budgets: [
          ...state.account.budgets,
          { name, amount, color, expenses: [], id: crypto.randomUUID() },
        ],
      };

      localStorage.setItem("account", JSON.stringify(newAccount));
      toast.success(
        `Created the ${action.payload.name} budget! 💸`,
        TOASTIFY_OPTIONS
      );

      return { ...state, account: newAccount };
    }

    case "budget/delete": {
      const newAccount = {
        ...state.account,
        budgets: state.account.budgets.filter(
          (budget) => budget.id !== action.payload
        ),
      };

      localStorage.setItem("account", JSON.stringify(newAccount));
      toast.success(`Deleted the budget! 🗑️`, TOASTIFY_OPTIONS);

      return { ...state, account: newAccount };
    }

    case "expense/add": {
      const { name, amount, category: id } = action.payload;

      const budgets = [...state.account.budgets];
      const foundBudget = budgets.find((budget) => budget.id === id);
      const foundBudgetIndex = budgets.indexOf(foundBudget);

      foundBudget.expenses = [
        ...foundBudget.expenses,
        {
          name,
          amount,
          id: crypto.randomUUID(),
          budgetId: id,
          date: new Date(),
        },
      ];

      const newAccount = {
        ...state.account,
        budgets: budgets.filter((budget) => budget.id !== id),
      };

      newAccount.budgets.splice(foundBudgetIndex, 0, foundBudget);

      localStorage.setItem("account", JSON.stringify(newAccount));
      toast.success(`Added the ${name} expense! 💰`, TOASTIFY_OPTIONS);
      return { ...state, account: newAccount };
    }

    case "expense/delete": {
      const { budgetId, expenseId } = action.payload;

      const budgets = [...state.account.budgets];
      const foundBudget = budgets.find((budget) => budget.id === budgetId);
      const foundBudgetIndex = budgets.indexOf(foundBudget);

      const newExpenses = foundBudget.expenses.filter(
        (expense) => expense.id !== expenseId
      );

      const newAccount = {
        ...state.account,
        budgets: budgets.filter((budget) => budget.id !== budgetId),
      };

      newAccount.budgets.splice(foundBudgetIndex, 0, {
        ...foundBudget,
        expenses: newExpenses,
      });

      localStorage.setItem("account", JSON.stringify(newAccount));
      toast.success(`Deleted the expense! 🗑️`, TOASTIFY_OPTIONS);
      return { ...state, account: newAccount };
    }

    default:
      throw new Error(`❗ Unknown dispatch action type`);
  }
}

export function BudgetsProvider({ children }) {
  const [{ account }, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(function () {
    const storedState = JSON.parse(localStorage.getItem("account"));

    if (storedState === null) dispatch({ type: "account/load/initialState" });
    if (storedState !== null)
      dispatch({
        type: "account/load/storedState",
        payload: storedState,
      });
  }, []);

  return (
    <BudgetsContext.Provider value={{ account, dispatch }}>
      {children}
    </BudgetsContext.Provider>
  );
}

export function useBudgets() {
  const context = useContext(BudgetsContext);
  if (context === undefined)
    throw new Error("❗ useBudgets was used outside of BudgetsProvider");
  return context;
}
