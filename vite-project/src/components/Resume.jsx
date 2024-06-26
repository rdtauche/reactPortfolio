function Resume() {
    const styles = {
      resume: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      },
      header: {
        textAlign: 'center',
        color: '#007BFF',
        marginBottom: '0px',
      },
      section: {
        marginBottom: '20px',
      },
      sectionHeader: {
        borderBottom: '2px solid #007BFF',
        paddingBottom: '5px',
        marginBottom: '10px',
        color: '#343A40',
        fontWeight: 'bold',
      },
      list: {
        listStyleType: 'none',
        paddingLeft: '0',
      },
      listItem: {
        marginBottom: '5px',
      },
      strong: {
        color: '#343A40',
      },
      introduction: {
        fontStyle: 'italic',
      },
      listItem: {
        marginBottom: '5px',
        color: '#000', // Add this line to set the text color to black
      },
      projects: {
        backgroundColor: '#f8f9fa',
        padding: '10px',
        borderRadius: '5px',
      },
    };
  
    return (
      <div style={styles.resume}>
        <h1 style={styles.header}>Ross Tauchert - Full Stack Developer</h1>
        <section style={styles.introduction}>
          <h2 style={styles.sectionHeader}>Introduction</h2>
          <p>Passionate Full Stack Developer with a focus on MERN stack. Eager to build responsive, user-friendly web applications.</p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionHeader}>Skills</h2>
          <ul style={styles.list}>
            {/* List items */
            ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'].map((skill, index) => (
              <li key={index} style={styles.listItem}>{skill}</li>
            ))
            }
          </ul>
          <h4 style={styles.header}>Please click on my Portfolio link to view projects</h4>

        </section>
        {/* Other sections */}
      </div>
    );
  }
  
  export default Resume;