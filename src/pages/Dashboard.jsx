import DashboardSection from "../components/DashboardSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Section from "../components/Section";

function Dashboard() {
  return (
    <Section>
      <NavBar />
      <DashboardSection />
      <Footer />
    </Section>
  );
}

export default Dashboard;
