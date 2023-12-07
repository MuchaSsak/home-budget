import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useBudgets } from "./contexts/BudgetsContext";

const Homepage = lazy(() => import("./pages/Homepage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const BudgetDetails = lazy(() => import("./pages/BudgetDetails"));

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
