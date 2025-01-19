import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Я никита привет</h1>
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
    <section id="home" style={styles.section}>
      <div style={styles.content}>
        <h2>Welcome to Our Site!</h2>
        <p>
          Explore the world of modern web development and discover beautiful designs, innovative ideas, and more.
        </p>
        <button style={styles.button}>Get Started</button>
      </div>
      <img
        src="https://i.pinimg.com/736x/0a/92/3e/0a923e2df63ea5731fff2e166a145ad0.jpg"
        alt="Beautiful design"
        style={styles.image}
      />
    </section>
  );
}

function About() {
  return (
    <section id="about" style={styles.section}>
      <img
        src="https://i.pinimg.com/736x/d3/8f/43/d38f43bf8fa658b1dda2a181a907190e.jpg"
        alt="Teamwork"
        style={styles.image}
      />
      <div style={styles.content}>
        <h2>About Us</h2>
        <p>
          We are a team of passionate developers and designers dedicated to creating websites that leave a lasting impression.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.content}>
        <h2>Contact Us</h2>
        <p>
          Have questions or want to work with us? Reach out via{' '}
          <a href="nik200830@gmail.com" style={styles.email}>
            nik200830@gmail.com
          </a>
        </p>
      </div>
      <img
        src="https://i.pinimg.com/736x/aa/0e/ad/aa0eadb6265c74ba59ac53b6c6a085ca.jpg"
        alt="Contact"
        style={styles.image}
      />
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} My Awesome Website. All rights reserved.</p>
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
    fontFamily: "'Arial', sans-serif",
    lineHeight: '1.6',
    color: '#333',
  },
  header: {
    background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
    padding: '20px',
    textAlign: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  title: {
    color: '#fff',
    fontSize: '2rem',
    margin: '0',
  },
  nav: {
    marginTop: '10px',
  },
  link: {
    color: '#fff',
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
  section: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    margin: '20px 0',
  },
  content: {
    maxWidth: '500px',
    margin: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background 0.3s',
  },
  image: {
    maxWidth: '400px',
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    margin: '20px',
  },
  email: {
    color: '#4facfe',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  },
};

export default App;
