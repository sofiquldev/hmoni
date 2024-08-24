'use client'
import { useState, useEffect } from 'react';
import styles from './styles/subscriber-form.module.scss';

const SubscriberForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setMessage('Something went wrong. Please try again.');
    }
  };

  // Effect to clear the message after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <form onSubmit={handleSubmit} className={styles.subscribe}>
      <h4 className={styles.subscribe__title}>
        Subscribe to our mailing list to get the latest updates
      </h4>
      <div className={styles.subscribe__inputgrp}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          autoComplete="off"
        />
        <button type="submit">Subscribe</button>
      </div>
      {message && <p>{message}</p>}
    </form>
  );
};

export default SubscriberForm;
