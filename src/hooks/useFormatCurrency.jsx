import { getCurrency } from "locale-currency";

import { useBudgets } from "../contexts/BudgetsContext";

export default function useFormatCurrency(num) {
  const {
    account: { locale },
  } = useBudgets();

  const curFormat = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: getCurrency(locale),
  });

  return curFormat.format(num);
}
