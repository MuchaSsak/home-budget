function HomepageHeader() {
  return (
    <>
      <h1 className="font-semibold text-[clamp(3rem,5vw,4.5rem)] leading-[1.1]">
        Take Control of{" "}
        <span className="text-transparent bg-gradient-to-br from-fuchsia-400 to-violet-700 bg-clip-text">
          Your Money
        </span>
      </h1>
      <p className="pt-2 pb-6 text-2xl font-light">
        Personal budgeting is the secret to financial freedom. Start your
        journey today.
      </p>
    </>
  );
}

export default HomepageHeader;
