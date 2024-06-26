import React from 'react';

function Contact() {
    const styles = {
        contact: {
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        },
        header: {
          textAlign: 'center',
          color: '#007BFF',
          marginBottom: '0', // Add this line to remove the margin-bottom from h1

        },
        paragraph: {
          textAlign: 'center',
        },
        link: {
            display: 'block', // Makes the link take the full width of its container
            textAlign: 'center', // Centers the text within the block
            margin: '10px 0', // Adds space above and below each link
          },
        };
        
        return (
          <>
            <h1 style={styles.header}>This is my contact info</h1>
            <p style={styles.paragraph}>Cell Phone: (Your Cell Phone Number)</p>
            <p style={styles.paragraph}>Email: (Your Email Address)</p>
            <p style={styles.paragraph}>Street Address: (Your Street Address)</p>
            <a href="https://www.linkedin.com/in/ross-tauchert-9489079/" style={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn: Ross Tauchert</a>
            <a href="https://github.com/rdtauche?tab=repositories" style={styles.link} target="_blank" rel="noopener noreferrer">GitHub: rdtauche</a>
          </>
        );
}

export default Contact;