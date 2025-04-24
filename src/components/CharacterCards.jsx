import React, { useRef, useState, useEffect } from 'react';
import CardsModel from './CardsModel';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

function CharacterCards() {
  const [showAll, setShowAll] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const Headingref = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];
  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const characters = [
    { name: 'Shadow', image: 'https://via.placeholder.com/150', description: 'The ultimate lifeform, dark and mysterious.', game: 'Sonic Adventure 2', path: './CardsModel/shadow.glb', funFact: 'Shadow was created by Professor Gerald Robotnik, and he possesses incredible speed and chaos powers that make him a formidable opponent.' },
    { name: 'Knuckles', image: 'https://via.placeholder.com/150', description: 'Guardian of the Master Emerald with brute strength.', game: 'Sonic & Knuckles', path: './CardsModel/knuckles.glb', funFact: 'Knuckles is known for his strength and determination, always ready to protect the Master Emerald from any threat that comes its way!' },
    { name: 'Amy', image: 'https://via.placeholder.com/150', description: 'Cheerful and determined, with a huge hammer.', game: 'Sonic CD', path: './CardsModel/amy.glb', funFact: 'Amy has a crush on Sonic and is never afraid to show her feelings, often using her powerful hammer to defend her friends!' },
    { name: 'Dr. Eggman', image: 'https://via.placeholder.com/150', description: 'Genius inventor and Sonic’s arch-nemesis.', game: 'Sonic the Hedgehog', path: './CardsModel/drEggman.glb', funFact: 'Dr. Eggman is a master of robotics, constantly devising elaborate schemes to conquer the world and defeat Sonic!' },
    { name: 'Rouge', image: 'https://via.placeholder.com/150', description: 'A cunning treasure hunter and government spy.', game: 'Sonic Adventure 2', path: './CardsModel/rouge.glb', funFact: 'Rouge is not just a skilled fighter; she also has a knack for finding rare treasures, making her a valuable ally and a dangerous foe!' },
    { name: 'Blaze', image: 'https://via.placeholder.com/150', description: 'Fiery cat from another dimension with pyrokinetic powers.', game: 'Sonic Rush', path: './CardsModel/blaze.glb', funFact: 'Blaze has the ability to control fire, using her powers to protect her dimension and fight alongside her friends!' },
    { name: 'Espio', image: 'https://via.placeholder.com/150', description: 'A ninja chameleon with stealth skills.', game: 'Knuckles Chaotix', path: './CardsModel/espio.glb', funFact: 'Espio can become invisible, making him a master of stealth and surprise attacks on his enemies!' },
    { name: 'Sticks', image: 'https://via.placeholder.com/150', description: 'A wild and unpredictable character from the future.', game: 'Sonic Boom', path: './CardsModel/sticks.glb', funFact: 'Sticks is very paranoid and cautious, always ready to defend her friends from the dangers she imagines lurking around every corner!' },
    { name: 'NiGHTS', image: 'https://via.placeholder.com/150', description: 'A dream traveler who challenges the boundaries of reality.', game: 'NiGHTS into Dreams', path: './CardsModel/nights.glb', funFact: 'NiGHTS can change forms in dreams, exploring fantastical worlds and helping dreamers overcome their fears!' },
    { name: 'Silver', image: 'https://via.placeholder.com/150', description: 'A psychic hedgehog from the future, determined to change the past.', game: 'Sonic the Hedgehog', path: './CardsModel/silver.glb', funFact: 'Silver harnesses telekinetic powers to battle foes and alter the course of time, making him a unique hero in the Sonic universe!' },
  ];

  const displayedCharacters = showAll ? characters : characters.slice(0, 6);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      Headingref.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: Headingref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );

  cardRefs.current.forEach((card, _) => {
    gsap.fromTo(
      card,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  });
    ScrollTrigger.refresh();
  }, [showAll]);

  return (
    <section id='character-cards'>
      <div>
      <h1 ref={Headingref} className="character-heading" style={{
            width: '100%',
            zIndex: 3,
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            margin: '15rem auto 8rem',
            color: '#bbb',
            fontFamily: 'Orbitron, sans-serif',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
            Character Cards
      </h1>
      <div className="character-card-wrapper">
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          columnGap: '2rem',
          justifyItems: 'center',
          padding: '2rem',
          alignItems: 'start',
          alignContent: 'start',
          textAlign: 'center'
        }}>
        {displayedCharacters.map((char, i) => {
          return (
            <div ref={addToCardRefs} className="character-card" key={i} 
            style={{
              perspective: '1000px',
              width: '20rem',
              // height: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                position: 'relative',
                width: '100%',
                minHeight: '100%',
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s',
                transformStyle: 'preserve-3d',
              transform: flippedIndex === i 
                ? 'rotateY(180deg)' 
                : hoveredIndex === i 
                ? 'rotateY(0deg) scale(1.07)' 
                : 'rotateY(0deg) scale(1)',
              borderRadius: '16px',
              overflow: 'visible',
              }} onClick={() => {
                if (flippedIndex === i) {
                  setFlippedIndex(null);
                } else {
                  setFlippedIndex(i);
                }
              }} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  minHeight: '100%',
                  backfaceVisibility: 'hidden',
                  background: 'linear-gradient(145deg, #1a1a1a, #0a0a0a)',
                  borderRadius: '16px',
                  padding: '2rem 1rem 0',
                  textAlign: 'center',
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '0.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                  boxSizing: 'border-box',
                }}>
                  <div style={{ height: '100%' }}>
                    <CardsModel modelPath={char.path}/>
                  </div>
                  <div style={{marginBottom:'2rem'}}>
                    <h3 style={{ fontSize: '1.2rem', color: '#00aaff', margin: '0.5rem 0' }}>{char.name}</h3>
                    <p style={{ fontSize: '1rem', color: '#bbb' }}>{char.description}</p>
                  </div>
                  <div style={{
                    margin: '0 3rem 3rem',
                    padding: '0.5rem 0',
                    background: '#00aaff',
                    color: '#000',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    borderRadius: '20px',
                    boxShadow: '0 0 10px #00aaff66',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05rem'
                  }}>
                    {char.game}
                  </div>
                </div>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  minHeight: '100%',
                  backfaceVisibility: 'hidden',
                  background: '#1a1a1a',
                  borderRadius: '16px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#00aaff',
                  fontSize: '1.2rem',
                  fontFamily: 'Orbitron, sans-serif',
                  transform: 'rotateY(180deg)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                  boxSizing: 'border-box',
                }}>
                  <div>
                    <h3>{char.name}</h3>
                    <p style={{
                        margin: '0 1.5rem',
                        color:'#bbb'
                    }} >Fun Fact: {char.funFact}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
      <button 
        onClick={() => {
          setShowAll(prev => !prev);
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 100);
        }}
        style={{ 
            margin: '2rem auto', 
            fontSize: '1rem', 
            cursor: 'pointer', 
            background: 'black', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            fontFamily: 'Orbitron, sans-serif',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            padding: '0.5rem 1rem'
        }}
        onMouseEnter={(e)=>{
            e.currentTarget.style.textDecoration = 'underline'
        }}
        onMouseLeave={(e)=>{
            e.currentTarget.style.textDecoration = 'none'
        }}
        >
        {showAll ? 'View Less' : 'View All'}
      </button>
      </div>
    </section>
    
  )
}

export default CharacterCards;
