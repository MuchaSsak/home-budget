function BudgetDetailsSection({ children }) {
  return (
    <div className="flex-grow grid grid-cols-2 auto-rows-min gap-8 items-start px-[clamp(4rem,15vw,24rem)]">
      {children}
    </div>
  );
}

export default BudgetDetailsSection;
