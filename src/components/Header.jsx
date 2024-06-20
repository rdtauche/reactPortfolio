// Here we are importing a CSS file as a dependency
import "../styles/Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <h1 class="handwritten">Ross Tauchert</h1>
      <img class="mylogo" src="./assets/FullLogo.png" alt="My Logo" />
    </header>
  );
}

export default Header;
