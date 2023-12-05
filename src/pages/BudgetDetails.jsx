import { useBudgets } from "../contexts/BudgetsContext";
import Budget from "../components/Budget";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import BudgetDetailsSection from "../components/BudgetDetailsSection";
import AddExpense from "../components/AddExpense";
import BudgetOverviewHeader from "../components/BudgetOverviewHeader";
import BudgetExpensesHeader from "../components/BudgetExpensesHeader";
import ExpenseList from "../components/ExpenseList";

function BudgetDetails({ budget }) {
  const { dispatch } = useBudgets();

  function handleDeleteBudget() {
    const answer = window.confirm(
      `Are you sure you want to delete the ${budget.name} budget?`
    );
    if (answer) dispatch({ type: "budget/delete", payload: budget.id });
  }

  return (
    <Section>
      <NavBar />

      <BudgetDetailsSection>
        <BudgetOverviewHeader color={budget.color} name={budget.name} />
        <Budget
          budget={budget}
          buttonType="delete"
          onDelete={handleDeleteBudget}
        />
        <AddExpense defaultCategory={budget.id} categoryOn={false} />

        {budget.expenses.length > 0 && (
          <>
            <BudgetExpensesHeader color={budget.color} name={budget.name} />
            <ExpenseList expenses={budget.expenses} />
          </>
        )}
      </BudgetDetailsSection>

      <Footer />
    </Section>
  );
}

export default BudgetDetails;
