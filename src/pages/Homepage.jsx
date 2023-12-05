import Footer from "../components/Footer";
import HomepageSection from "../components/HomepageSection";
import NavBar from "../components/NavBar";
import Section from "../components/Section";

function Homepage() {
  return (
    <Section>
      <NavBar hasDeleteUser={false} />
      <HomepageSection />
      <Footer />
    </Section>
  );
}

export default Homepage;
