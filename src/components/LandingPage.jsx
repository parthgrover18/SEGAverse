import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HedgehogBlue from './HedgeHogBlue';
import HedgehogBlack from './HedgeHogBlack';
import CharacterCards from './CharacterCards';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const hedgehogWrapperRefBlue = useRef(null);
  const hedgehogWrapperRefBlack = useRef(null);
  const ritualRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.5'
      )
      .fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        '-=0.5'
      )
      .fromTo(
        hedgehogWrapperRefBlue.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        '-=1'
      )
      .fromTo(
        hedgehogWrapperRefBlack.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        '-=1'
      )
      // Removed ritualRef animation here

  }, []);

  useEffect(() => {
    if (!hedgehogWrapperRefBlue.current) return;

    const tlBlue = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top-=80 top',
        end: '+=700',
        scrub: true,
      },
    });

    tlBlue.to(hedgehogWrapperRefBlue.current, {
      y: window.innerHeight / 2 + 100,
      ease: 'none',
    }).to(hedgehogWrapperRefBlue.current, {
      y: window.innerHeight / 2 + 400,
      x: -((window.innerWidth / 2)),
      ease: 'none',
    });
  }, []);

  useEffect(() => {
    if (!hedgehogWrapperRefBlack.current) return;

    const tlBlue = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top-=80 top',
        end: '+=700',
        scrub: true,
      },
    });

    tlBlue.to(hedgehogWrapperRefBlack.current, {
      y: window.innerHeight / 2 + 100,
      ease: 'none',
    }).to(hedgehogWrapperRefBlack.current, {
      y: window.innerHeight / 2 + 400,
      x: ((window.innerWidth / 2)),
      ease: 'none',
    });
  }, []);

  useEffect(() => {
    if (!ritualRef.current) return;
    gsap.fromTo(
      ritualRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ritualRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div
          ref={containerRef}
          style={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
            color: 'white',
            fontFamily: 'Orbitron, sans-serif',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 2rem 45rem',
            marginTop: '5rem'
          }}
        >

          <div
            ref={hedgehogWrapperRefBlue}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100vh',
              height: '100vh',
              pointerEvents: 'none',
              overflow: 'hidden',
              display: 'flex',
              transform: 'translateY(0)', 
            }}
          >
            <HedgehogBlue />
          </div>

          <div
            ref={hedgehogWrapperRefBlack}
            style={{
              position: 'absolute',
              top: 0,
              left: '-13vw', 
              width: '100vh',
              height: '100vh',
              pointerEvents: 'none',
              overflow: 'hidden',
              display: 'flex',
              transform: 'translateY(0)', 
            }}
          >
            <HedgehogBlack />
          </div>

          <div style={{ zIndex: 2 }}>
            <h1
              ref={headingRef}
              style={{
                fontSize: '3.5rem',
                color: '#00aaff',
                textShadow: '0 0 25px #00aaff',
                marginTop: '15vh',
                zIndex: 0,
              }}
            >
              Welcome to SEGA Universe
            </h1>
            <p
              ref={textRef}
              style={{
                fontSize: '1.2rem',
                margin: '1rem auto 2rem',
                color: '#bbb',
                maxWidth: '600px',
              }}
            >
              Explore the legacy of SEGA, from classic arcade icons to the future of gaming.
            </p>
          </div>

        </div>

        <div style={{
          position:'relative'
        }}>
          <p
            ref={ritualRef}
            style={{
              position: 'absolute',
              bottom: '0',
              width: '100%',
              zIndex: 3,
              margin: '1rem auto 10rem',
              color: '#bbb',
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '2vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Sonic wasn't just a game — he was a weekend ritual!
          </p>
        </div>

        <CharacterCards/>
    </>
    
  );
};

export default LandingPage;