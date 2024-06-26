import Header from "../components/Header";
import Footer from "../components/Footer";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

function About() {
    return (
        // this <> acts as a parent div
        <>
      <Header />
      <Resume />
      <Contact />
      <Footer />
        </>
    );
  }

  export default About;