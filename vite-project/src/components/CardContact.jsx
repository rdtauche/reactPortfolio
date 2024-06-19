// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function CardContact() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Contact Me</div>
      <ul style={styles.content}>
        <li>Email: ross.tauchert@gmail.com</li>
        <li>Phone: 555-555-5555</li>
        <li>LinkedIn: https://www.linkedin.com/in/ross-tauchert-9489079/</li>
      </ul>
    </div>
  );
}

export default CardContact;
