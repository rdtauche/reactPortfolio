// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: 'grey',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  navbarStyle: {
    background: 'black',
    justifyContent: 'flex-end',
    minHeight: 50,
    lineHeight: 3.5,
  }
};

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return ( 
    // how do i create navbar with links to sections of the page? 
    <nav style={styles.navbarStyle} className="navbar">
      <ul style={styles.heading}>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#my-work">My Work</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
