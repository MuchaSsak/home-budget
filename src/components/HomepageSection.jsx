import HomepageForm from "./HomepageForm";
import HomepageHeader from "./HomepageHeader";

function HomepageSection() {
  return (
    <section className="flex flex-col 2xl:flex-row items-center justify-center 2xl:justify-between gap-10 flex-grow px-[clamp(4rem,15vw,24rem)]">
      <div>
        <HomepageHeader />
        <HomepageForm />
      </div>

      <img
        src="/homepage_illustration.svg"
        alt="Homebudget homepage section illustration"
      />
    </section>
  );
}

export default HomepageSection;
