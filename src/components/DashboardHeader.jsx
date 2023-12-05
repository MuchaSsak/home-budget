function DashboardHeader({ name }) {
  return (
    <div className="col-span-2">
      <h1 className="font-semibold text-[clamp(3rem,5vw,4.5rem)] leading-[1.1] ">
        Welcome back, <span className="text-violet-700">{name}</span>
      </h1>
      <p className="py-6 text-2xl">
        Personal budgeting is the secret to financial freedom. <br /> Create a
        budget to get started!
      </p>
    </div>
  );
}

export default DashboardHeader;
