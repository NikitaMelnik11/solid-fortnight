import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Modern Website</h1>
      <nav style={styles.nav}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.heroContent}>
        <h2 style={styles.heroTitle}>Welcome to Modern Web Design</h2>
        <p style={styles.heroText}>
          Discover innovative designs, seamless experiences, and cutting-edge solutions.
        </p>
        <button style={styles.heroButton}>Get Started</button>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.content}>
        <h2>About Us</h2>
        <p>
          We are passionate about creating digital experiences that captivate and engage
          users. Our team combines creativity with functionality to deliver exceptional
          results.
        </p>
      </div>
      <img
        src="https://i.pinimg.com/736x/75/f0/27/75f02778ceefa6ebdcb6c07e99bf4910.jpg"
        alt="About Us"
        style={styles.image}
      />
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={styles.contact}>
      <div style={styles.contactContent}>
        <h2>Contact Us</h2>
        <p>Have questions? Let's connect!</p>
        <a href="mailto:info@example.com" style={styles.contactButton}>
          Email Us
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Modern Website. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div style={styles.container}>
      <Header />
      <main>
        <Home />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
  },
  header: {
    background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
    padding: '20px',
    textAlign: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: '#fff',
    fontSize: '2rem',
    margin: 0,
  },
  nav: {
    marginTop: '10px',
  },
  link: {
    color: '#fff',
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
  hero: {
    background: 'url("https://i.pinimg.com/736x/1f/87/4a/1f874a7fce7740124709efbfd7346ef3.jpg") no-repeat center/cover',
    color: '#fff',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  heroContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px 30px',
    borderRadius: '10px',
  },
  heroTitle: {
    fontSize: '2.5rem',
    margin: 0,
  },
  heroText: {
    margin: '10px 0',
    fontSize: '1.2rem',
  },
  heroButton: {
    padding: '10px 20px',
    backgroundColor: '#6a11cb',
    color: '#fff',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  heroButtonHover: {
    backgroundColor: '#2575fc',
  },
  section: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    margin: '20px 0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  content: {
    maxWidth: '500px',
    margin: '20px',
    textAlign: 'left',
  },
  image: {
    maxWidth: '400px',
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  contact: {
    background: 'linear-gradient(90deg, #2575fc, #6a11cb)',
    color: '#fff',
    textAlign: 'center',
    padding: '50px 20px',
    borderRadius: '10px',
  },
  contactContent: {
    maxWidth: '500px',
    margin: '0 auto',
  },
  contactButton: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#fff',
    color: '#6a11cb',
    fontSize: '1rem',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '10px',
    transition: 'background 0.3s, color 0.3s',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  },
};

export default App;
