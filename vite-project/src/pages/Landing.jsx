import Header from "../components/Header";
import Footer from "../components/Footer";
import TradingViewWidget from "../components/TradingViewWidget";
import Reviews from "../components/Reviews";
import Chatbot from "../components/Chatbot";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Stripe from "../components/Stripe";

function Landing() {
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

  export default Landing;