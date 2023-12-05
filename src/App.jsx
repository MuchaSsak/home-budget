import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useBudgets } from "./contexts/BudgetsContext";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import BudgetDetails from "./pages/BudgetDetails";

function App() {
  const {
    account: { username, budgets },
  } = useBudgets();

  return (
    <>
      <ToastContainer />

      <BrowserRouter>
        <Routes>
          <Route index element={!username ? <Homepage /> : <Dashboard />} />

          {budgets && (
            <Route path="/budget">
              {budgets.map((budget, i) => (
                <Route
                  path={budget.id}
                  key={budget.id}
                  element={<BudgetDetails budget={budget} index={i} />}
                />
              ))}
            </Route>
          )}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
