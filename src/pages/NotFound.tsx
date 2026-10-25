import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div style={{
      backgroundColor: 'var(--color-warm-ivory)',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1rem'
    }}>
      <div style={{
        maxWidth: '560px',
        textAlign: 'center',
        backgroundColor: 'var(--color-white)',
        border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-sm)',
        padding: '3.5rem 2.5rem',
        boxShadow: 'var(--shadow-md)'
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '3.5rem',
          fontWeight: 700,
          color: 'var(--color-burnt-copper)',
          lineHeight: 1,
          marginBottom: '1rem'
        }}>
          404
        </div>
        <h1 style={{
          fontSize: '2rem',
          color: 'var(--color-deep-plum)',
          marginBottom: '1rem'
        }}>
          Page Not Located
        </h1>
        <p style={{
          fontSize: '1.05rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          marginBottom: '2rem'
        }}>
          The requested route does not exist or has been relocated. You can return to our homepage or explore our services directory below.
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center'
        }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} /> Return to Homepage
          </Link>
          <Link to="/services" className="btn btn-secondary">
            <Compass size={16} /> All Services Directory
          </Link>
        </div>
      </div>
    </div>
  );
};
