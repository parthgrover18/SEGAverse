import React, { useState, useEffect } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      maxWidth: '100vw',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem 5.5rem',
      backdropFilter: 'blur(15px)',
      backgroundColor: 'rgba(0,0,0,0.3)',
      color: '#fff',
      zIndex: 1000,
      fontFamily: 'Orbitron, sans-serif',
      fontWeight: 500,
      boxSizing: 'border-box',
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
    }}>
      <div 
        style={{ cursor: 'pointer' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: 'clamp(100px, 23vw, 180px)',
            height: 'clamp(30px, 5vh, 60px)',
            objectFit: 'contain'
          }}
        />
      </div>
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '1.8rem',
            cursor: 'pointer',
            marginLeft: '1rem'
          }}
        >
          &#9776;
        </button>
      )}

      <div
        style={{
          display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '1rem' : '3rem',
          position: isMobile ? 'absolute' : 'relative',
          top: isMobile ? '100%' : '0',
          right: isMobile ? '0.5rem' : 'auto',
          backgroundColor: isMobile ? 'rgba(0,0,0,0.9)' : 'transparent',
          padding: isMobile ? '1rem' : '0',
          borderRadius: isMobile ? '4px' : '0',
          fontSize: '0.9rem',
          marginRight: !isMobile ? '10rem' : undefined
        }}
      >
        <div style={{ position: 'relative', flexDirection: 'column', alignItems: 'center' }} 
          onMouseEnter={e => {
            const link = e.currentTarget.querySelector('div');
            const underline = e.currentTarget.querySelector('span');
            link.style.transform = 'scale(1.05)';
            underline.style.transform = 'scaleX(1)';
          }}
          onMouseLeave={e => {
            const link = e.currentTarget.querySelector('div');
            const underline = e.currentTarget.querySelector('span');
            link.style.transform = 'scale(1)';
            underline.style.transform = 'scaleX(0)';
          }}>
          <div style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
            cursor: 'pointer'
          }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Home
          </div>
          <span style={{
            position: 'absolute',
            bottom: '-5px',
            left: 0,
            height: '2px',
            width: '100%',
            backgroundColor: '#00aaff',
            transform: 'scaleX(0)',
            transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
            transformOrigin: 'center',
          }} />
        </div>

        <div style={{ position: 'relative', flexDirection: 'column', alignItems: 'center' }} 
          onMouseEnter={e => {
            const link = e.currentTarget.querySelector('a');
            const underline = e.currentTarget.querySelector('span');
            link.style.transform = 'scale(1.05)';
            underline.style.transform = 'scaleX(1)';
          }}
          onMouseLeave={e => {
            const link = e.currentTarget.querySelector('a');
            const underline = e.currentTarget.querySelector('span');
            link.style.transform = 'scale(1)';
            underline.style.transform = 'scaleX(0)';
          }}>
          <a href="#character-cards" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
          }}>
            Character Cards
          </a>
          <span style={{
            position: 'absolute',
            bottom: '-5px',
            left: 0,
            height: '2px',
            width: '100%',
            backgroundColor: '#00aaff',
            transform: 'scaleX(0)',
            transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
            transformOrigin: 'center',
          }} />
        </div>

        <div style={{ position: 'relative', flexDirection: 'column', alignItems: 'center' }} 
          onMouseEnter={e => {
            const link = e.currentTarget.querySelector('a');
            const underline = e.currentTarget.querySelector('span');
            link.style.transform = 'scale(1.05)';
            underline.style.transform = 'scaleX(1)';
          }}
          onMouseLeave={e => {
            const link = e.currentTarget.querySelector('a');
            const underline = e.currentTarget.querySelector('span');
            link.style.transform = 'scale(1)';
            underline.style.transform = 'scaleX(0)';
          }}>
          <a href="#timeline-container" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
          }}>
            Timeline
          </a>
          <span style={{
            position: 'absolute',
            bottom: '-5px',
            left: 0,
            height: '2px',
            width: '100%',
            backgroundColor: '#00aaff',
            transform: 'scaleX(0)',
            transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
            transformOrigin: 'center',
          }} />
        </div>

        <div style={{ position: 'relative', flexDirection: 'column', alignItems: 'center' }} 
          onMouseEnter={e => {
            const link = e.currentTarget.querySelector('a');
            const underline = e.currentTarget.querySelector('span');
            link.style.transform = 'scale(1.05)';
            underline.style.transform = 'scaleX(1)';
          }}
          onMouseLeave={e => {
            const link = e.currentTarget.querySelector('a');
            const underline = e.currentTarget.querySelector('span');
            link.style.transform = 'scale(1)';
            underline.style.transform = 'scaleX(0)';
          }}>
          <a href="#trivia-heading" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
          }}>
            Trivia
          </a>
          <span style={{
            position: 'absolute',
            bottom: '-5px',
            left: 0,
            height: '2px',
            width: '100%',
            backgroundColor: '#00aaff',
            transform: 'scaleX(0)',
            transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
            transformOrigin: 'center',
          }} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
