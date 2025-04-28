import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! 🎉');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact With Fola✉️</h1>
      
      <div style={styles.infoSection}>
        <p style={styles.infoText}>
          <strong>GitHub:</strong> <a href="https://github.com/alaa-moustafa005" target="_blank" style={styles.link}>alaa-moustafa005</a>
        </p>
        <p style={styles.infoText}>
          <strong>Email:</strong> <a href="mailto:alaamoustafa390@gmail.com" style={styles.link}>alaamoustafa390@gmail.com</a>
        </p>
      </div>

      <h2 style={styles.formHeader}>Send me a message 💬</h2>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="phone" style={styles.label}>Phone Number (Optional):</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="message" style={styles.label}>Your Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Type your message here..."
            style={styles.textarea}
          />
        </div>

        <button type="submit" style={styles.submitButton}>
          Send Message 💖
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    maxWidth: '600px',
    margin: '2rem auto',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    fontSize: '2.2rem',
    marginBottom: '1.5rem',
    fontWeight: '600',
  },
  infoSection: {
    marginBottom: '2rem',
    color: '#555',
    textAlign: 'center',
    lineHeight: '1.8',
  },
  infoText: {
    fontSize: '1.1rem',
    margin: '0.5rem 0',
  },
  link: {
    color: '#ff4081',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.3s',
  },
  formHeader: {
    fontSize: '1.5rem',
    color: '#444',
    textAlign: 'center',
    marginBottom: '1.8rem',
    fontWeight: '500',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    fontSize: '1rem',
    color: '#555',
    fontWeight: '500',
    marginBottom: '0.5rem',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '0.8rem 1rem',
    fontSize: '1rem',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    transition: 'all 0.3s',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '0.8rem 1rem',
    fontSize: '1rem',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    height: '150px',
    resize: 'vertical',
    transition: 'all 0.3s',
    boxSizing: 'border-box',
  },
  submitButton: {
    padding: '0.8rem',
    fontSize: '1.1rem',
    backgroundColor: '#ff4081', // Vibrant pink
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontWeight: '600',
    marginTop: '0.5rem',
    boxShadow: '0 4px 8px rgba(255, 64, 129, 0.3)',
  },
};