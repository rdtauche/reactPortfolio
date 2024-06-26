import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Reviews from "../components/Reviews";


function Landing() {
    return (
        // this <> acts as a parent div
        <>
      <Header />
      <Home />
      <Footer />
        </>
    );
  }

  export default Landing;