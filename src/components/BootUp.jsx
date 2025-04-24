import React, { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';

const BootUp = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const fullText = 'Booting up SEGAverse system...';

  useEffect(() => {
    let index = 0;
    const typeNext = () => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index < fullText.length) {
        setTimeout(typeNext, 50);
      } else {
        setTimeout(() => {
          setShowLoader(true);
          setTimeout(() => {
            onComplete && onComplete();
          }, 4000);
        }, 1000);
      }
    };
    typeNext();
  }, [onComplete]);

  return (
    <div className="boot-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      margin: 
      backgroundColor: '#000',
      zIndex: 9999,
      color: '#00aaff',
      fontFamily: 'monospace',
      fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
      padding: '2rem',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        maxWidth: '90%',
        width: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#00aaff',
        fontFamily: 'monospace',
        fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
        textAlign: 'center',
      }}>
        <div style={{ minHeight: '1.2em', fontWeight: 'bold', fontSize: '1.5rem' }}>{text}</div>
        <div style={{ marginTop: '4rem', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {showLoader && <RingLoader color="#00aaff" size={60} />}
        </div>
      </div>
    </div>
  );
};

export default BootUp;