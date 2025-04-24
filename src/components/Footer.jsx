import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#111',
      color: '#00aaff',
      padding: '7rem 4rem 4rem',
      fontFamily: 'Orbitron, sans-serif',
      marginTop: '20rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '5rem'
    }}>

<div 
        style={{ cursor: 'pointer' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img src="/blue_logo.png" alt="Logo" 
        style={{ 
          width: '28vw', 
          height: '6vh' 
          }} />
      </div>


      <div style={{ flex: 2 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem',fontSize: '1.7rem', lineHeight: 1.7 }}>
            <a href="#top" style={{ color: '#bbb', textDecoration: 'none' }}>Home</a>
            <a href="#character-cards" style={{ color: '#bbb', textDecoration: 'none' }}>Character Cards</a>
            <a href="#timeline-container" style={{ color: '#bbb', textDecoration: 'none' }}>Timeline</a>
            <a href="#trivia-heading" style={{ color: '#bbb', textDecoration: 'none' }}>Trivia</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginRight: '6rem', marginTop: '3rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem',flexDirection: 'column' }}>
              <a
                href="mailto:33105653@student.uwl.ac.uk"
                style={{
                  display: 'inline-block',
                  width: '18rem',
                  textAlign: 'left',
                  color: '#bbb',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  backgroundImage: 'linear-gradient(to right, #00aaff, #00aaff)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '0% 100%',
                  backgroundPosition: '0 0',
                  transition: 'all 0.3s ease-in-out',
                }}
                onMouseEnter={e => {
                  e.target.style.backgroundSize = '100% 100%';
                  e.target.style.color = '#111';
                  e.target.textContent = 'Player 2, Ready to Chat?';
                }}
                onMouseLeave={e => {
                  e.target.style.backgroundSize = '0% 100%';
                  e.target.style.color = '#bbb';
                  e.target.textContent = '33105653@student.uwl.ac.uk';
                }}
              >
                33105653@student.uwl.ac.uk
              </a>
              <a
                href="mailto:parthgrover1818@gmail.com"
                style={{
                  display: 'inline-block',
                  width: '18rem',
                  textAlign: 'left',
                  color: '#bbb',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  backgroundImage: 'linear-gradient(to right, #00aaff, #00aaff)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '0% 100%',
                  backgroundPosition: '0 0',
                  transition: 'all 0.3s ease-in-out',
                }}
                onMouseEnter={e => {
                  e.target.style.backgroundSize = '100% 100%';
                  e.target.style.color = '#111';
                  e.target.textContent = 'Start ➤ Connect';
                }}
                onMouseLeave={e => {
                  e.target.style.backgroundSize = '0% 100%';
                  e.target.style.color = '#bbb';
                  e.target.textContent = 'parthgrover1818@gmail.com';
                }}
              >
                parthgrover1818@gmail.com
              </a>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', justifyContent: 'center' }}>
              <a href="https://github.com/parthgrover18" target="_blank" rel="noopener noreferrer">
                <img src="/github.png" alt="GitHub" style={{ width: '35px', height: '35px' }} />
              </a>
              <a href="https://www.linkedin.com/in/parth-grover-4ab168232/" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.png" alt="LinkedIn" style={{ width: '35px', height: '35px' }} />
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '2px solid #00aaff', paddingTop: '1rem', color: '#bbb', fontSize: '0.8rem', marginTop: '2rem',display: 'flex', flexDirection: 'row', gap: '5rem' }}>
          <p>© 2025 SEGAverse Explorer | All Rights Reserved</p>
          <p>Crafted with passion for the SEGA Hackathon</p>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
