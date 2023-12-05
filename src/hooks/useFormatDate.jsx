import { useBudgets } from "../contexts/BudgetsContext";

export default function useFormatDate(date) {
  const {
    account: { locale },
  } = useBudgets();

  // return new Intl.DateTimeFormat(locale).format(new Date(date));
  return new Intl.DateTimeFormat(locale).format(Date.UTC(2022, 9, 12));
}
