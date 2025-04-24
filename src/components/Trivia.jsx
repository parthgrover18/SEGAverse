import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const questionBank = [
  { question: "What year was the Sega Genesis released in North America?", options: ["1989", "1991", "1985", "1990"], answer: "1989" },
  { question: "Which character is SEGA's mascot?", options: ["Mario", "Sonic", "Tails", "Knuckles"], answer: "Sonic" },
  { question: "SEGA originated in which country?", options: ["USA", "Japan", "South Korea", "China"], answer: "Japan" },
  { question: "Which console used 'Blast Processing'?", options: ["Dreamcast", "Saturn", "Genesis", "Master System"], answer: "Genesis" },
  { question: "What animal is Sonic?", options: ["Cat", "Rabbit", "Hedgehog", "Wolf"], answer: "Hedgehog" },
  { question: "SEGA's handheld console was called?", options: ["Game Gear", "Game Boy", "Play Gear", "Pocket Console"], answer: "Game Gear" },
  { question: "Who is Sonic's sidekick?", options: ["Knuckles", "Amy", "Tails", "Shadow"], answer: "Tails" },
  { question: "In which year did SEGA exit the console market?", options: ["1999", "2001", "2003", "1997"], answer: "2001" },
  { question: "Which SEGA console was first to have internet access?", options: ["Saturn", "Genesis", "Dreamcast", "32X"], answer: "Dreamcast" },
  { question: "What is Dr. Robotnik's other name?", options: ["Shadow", "Eggman", "Knuckles", "Silver"], answer: "Eggman" },
  { question: "Sega's VR headset project was called?", options: ["Sega Scope", "Sega VR", "Dream Vision", "Virtual Boy"], answer: "Sega VR" },
  { question: "Which game features AiAi the monkey?", options: ["Monkey Run", "Banana Blitz", "Super Monkey Ball", "Monkey Roll"], answer: "Super Monkey Ball" },
  { question: "What does SEGA stand for?", options: ["Service Games", "Speed Gaming", "Sega Electronics", "Super Games"], answer: "Service Games" },
  { question: "Which Sonic game introduced Shadow the Hedgehog?", options: ["Sonic Heroes", "Sonic Adventure 2", "Sonic 3D", "Sonic Colors"], answer: "Sonic Adventure 2" },
  { question: "First SEGA home console?", options: ["Genesis", "Master System", "SG-1000", "Dreamcast"], answer: "SG-1000" },
  { question: "In Sonic games, what are collected for life?", options: ["Coins", "Rings", "Emeralds", "Stars"], answer: "Rings" },
  { question: "Which SEGA game featured knights and dragons?", options: ["Golden Axe", "Dragon Force", "Altered Beast", "Panzer Dragoon"], answer: "Golden Axe" },
  { question: "Which character is NOT from SEGA?", options: ["Kirby", "Sonic", "Tails", "Knuckles"], answer: "Kirby" },
  { question: "Which color are Sonic's shoes?", options: ["Red", "Blue", "Green", "Black"], answer: "Red" },
  { question: "Which SEGA franchise features racing and shooting?", options: ["OutRun", "After Burner", "Virtua Racing", "Jet Set Radio"], answer: "After Burner" },
];

function Trivia() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(3);
  const [emeralds, setEmeralds] = useState(0);
  const [timer, setTimer] = useState(10);
  const [countdownTween, setCountdownTween] = useState(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [answered, setAnswered] = useState(false);


  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);
  const headingRef3 = useRef(null);
  const startButtonRef = useRef(null);
  const instructionsCardRef = useRef(null);
  const questionCardRef = useRef(null);
  const emeraldsContainerRef = useRef(null);
  const timerBarRef = useRef(null);
  const winScoreCardRef = useRef(null);
  const gameOverScoreCardRef = useRef(null);

  useEffect(() => {
    setQuestions([...questionBank].sort(() => 0.5 - Math.random()).slice(0, 10));
  }, []);



  useEffect(() => {
    if (showQuestions && currentIndex < questions.length) {
      startCountdown();
    }
  }, [currentIndex, showQuestions]);

  useEffect(() => {
    if (!hasStarted) return;
    gsap.from(startButtonRef.current, { opacity: 0, y: -50, duration: 1, ease: "power4.out" });
  }, [hasStarted]);

  useEffect(() => {
    const headings = [headingRef1.current, headingRef2.current, headingRef3.current];
  
    headings.forEach((heading) => {
      if (!heading) return;
  
      gsap.set(heading, { opacity: 1, y: 0 });
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play reverse play reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    });
  
    return () => {
      headings.forEach((heading) => {
        if (!heading) return;
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === heading) {
            trigger.kill();
          }
        });
      });
    };
  }, []);

  useEffect(() => {
    if (!showInstructions) return;
    gsap.from(instructionsCardRef.current, { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
  }, [showInstructions]);

  useEffect(() => {
    if (!showQuestions) return;

    if (questionCardRef.current) {
      gsap.from(questionCardRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      });
      const buttons = questionCardRef.current.querySelectorAll('.option-button');
      if (buttons.length > 0) {
        gsap.from(buttons, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        });
      }
    }
  }, [currentIndex, showQuestions]);


  useEffect(() => {
    if (currentIndex >= 10 && lives > 0) {
      if (winScoreCardRef.current) {
        gsap.from(winScoreCardRef.current, { opacity: 0, scale: 0.8, duration: 1, ease: "power3.out" });
      }
    }
  }, [currentIndex, lives]);

  useEffect(() => {
    if (gameOver) {
      if (gameOverScoreCardRef.current) {
        gsap.from(gameOverScoreCardRef.current, { opacity: 0, scale: 0.8, duration: 1, ease: "power3.out" });
      }
    }
  }, [gameOver]);

  const startCountdown = () => {
    if (countdownTween) countdownTween.kill();
    gsap.set(timerBarRef.current, { width: "100%" });
    const tween = gsap.to(timerBarRef.current, {
      width: "0%",
      duration: timer,
      ease: "linear",
      onComplete: handleWrongAnswer,
    });
    setCountdownTween(tween);
  };

  const handleAnswer = (option) => {
    if (answered || countdownTween === null) return;
    setAnswered(true);
    if (countdownTween) countdownTween.kill();
    console.log(`Selected Answer: ${option} | Correct Answer: ${questions[currentIndex].answer}`);
    if (option === questions[currentIndex].answer) {
      animateCorrect();
      setEmeralds(prev => prev < 10 ? prev + 1 : prev);
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setAnswered(false);
      }, 1000);
    } else {
      handleWrongAnswer();
    }
  };

  const handleWrongAnswer = () => {
    animateWrong();
    setLives(prev => {
      const newLives = Math.max(prev - 1, 0);
      if (newLives === 2) setTimer(8);
      if (newLives === 1) setTimer(6);
      return newLives;
    });
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
      setAnswered(false);
    }, 1000);
  };

  useEffect(() => {
    if (currentIndex >= questions.length && lives <= 0) {
      setGameOver(true);
    }
  }, [currentIndex, lives]);

  useEffect(() => {
    if (lives <= 0) {
      setGameOver(true);
    }
  }, [lives]);

  const animateCorrect = () => {
    const tl = gsap.timeline();
    const targetIndex = emeralds;
    const emeraldElements = emeraldsContainerRef.current?.querySelectorAll('img');
    if (emeraldElements && emeraldElements[targetIndex]) {
      tl.fromTo(
        emeraldElements[targetIndex],
        { scale: 0, opacity: 0 },
        { scale: 1.2, opacity: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" }
      ).to(
        emeraldElements[targetIndex],
        { scale: 1, duration: 0.2, ease: "power1.out" }
      );
    }
  };

  const animateWrong = () => {
    gsap.fromTo(questionCardRef.current, { rotate: 0 }, { rotate: 10, duration: 0.1, yoyo: true, repeat: 5 });
  };

  const handleStart = () => {
    setHasStarted(true);
    setShowInstructions(true);
  };

  const handleRestart = () => {
    if (countdownTween) countdownTween.kill();
    gsap.set(timerBarRef.current, { width: "100%" });
    setQuestions([...questionBank].sort(() => 0.5 - Math.random()).slice(0, 10));
    setCurrentIndex(0);
    setLives(3);
    setTimer(10);
    setCountdownTween(null);
    setHasStarted(true);
    setShowInstructions(true);
    setShowQuestions(false);
    setEmeralds(0);
    setGameOver(false);
    setAnswered(false);
  };

  return (
    <div style={{
      background: "black",
      minHeight: "100vh",
      padding: "2rem 1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#00aaff",
      fontFamily: "Orbitron, sans-serif"
    }}>
      <h1
      id='trivia-heading'
        style={{
          lineHeight: 4.8,
          fontSize: "6rem",
          textAlign: "center",
          margin: '20rem 0 5rem',
          color: "#00aaff",
        }}
      >
        <span ref={headingRef1} className="heading-line">Scroll</span> <br />
        <span ref={headingRef2} className="heading-line">to Roll</span> <br />
        <span ref={headingRef3} className="heading-line">into SEGA Trivia Soul!</span>
      </h1>
      {!hasStarted && (
        <button
          ref={startButtonRef}
          className="start-button"
          style={{
            margin: '0 0 5rem',
            padding: "0.8rem 2rem",
            fontSize: '1rem',
            color: '#000',
            backgroundColor: '#00aaff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 0 20px #00aaff',
            transition: 'transform 0.3s ease, background-color 0.3s ease-in-out',
            fontFamily: "Orbitron, sans-serif",
          }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.06)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          onClick={handleStart}
        >
          Start Trivia
        </button>
      )}
      {showInstructions && !showQuestions && (
        <div
          ref={instructionsCardRef}
          className="question-card"
          style={{
            height:'25rem',
            width:'50rem',
            background: "#111",
            borderRadius: "20px",
            boxShadow: "0 0 30px #00aaff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            textAlign: "center",
            margin: "1.5rem 0",
        }}>
          <h2 style={{fontSize: '2rem'}} >Instructions</h2>
          <ul style={{ fontSize: "1rem", color: '#bbb', textAlign: "left", lineHeight: 1.7 }}>
            <li>Answer correctly to move ahead!</li>
            <li>Wrong answer? You lose 1 life. (Only 3 lives!)</li>
            <li>Timer gets faster after mistakes!</li>
            <li>Earn 1 Emerald after each correct answer!</li>
            <li>Score high and become the SEGA Master!</li>
          </ul>
          <button
            onClick={() => setShowQuestions(true)}
            style={{
              marginTop: "1rem",
              padding: "0.8rem 2rem",
              fontSize: '1rem',
              color: '#000',
              backgroundColor: '#00aaff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 0 20px #00aaff',
              fontFamily: "Orbitron, sans-serif",
              transition: 'transform 0.3s ease, background-color 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.06)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          >
            Start Game
          </button>
        </div>
      )}
      {showQuestions && currentIndex < questions.length && !gameOver && (
        <div style={{ background: "black", minHeight: "60vh", color: "#00aaff", fontFamily: "Orbitron, sans-serif" }}>
          <div
            ref={timerBarRef}
            className="timer-bar"
            style={{
              width: "100%",
              height: "8px",
              background: "#00aaff",
              marginBottom: "3rem"
            }}></div>
          <div
            ref={questionCardRef}
            className="question-card"
            style={{
              height:'25rem',
              width:'50rem',
              background: "#111",
              borderRadius: "20px",
              boxShadow: "0 0 30px #00aaff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              margin: "1.5rem 0 3rem",
              position: "relative"
            }}>
            <div
              ref={emeraldsContainerRef}
              className="emeralds-container"
              style={{
                position: "absolute",
                top: "2.5rem",
                right: "2rem",
                display: "flex",
                gap: "0.3rem",
              }}>
              {Array(10).fill(0).map((_, i) => (
                <img
                  key={"emerald-" + i}
                  src="/emerald.png"
                  alt="emerald"
                  style={{
                    width: "20px",
                    height: "20px",
                    filter: i < emeralds ? "invert(1)" : "invert(0.2)",
                  }}
                />
              ))}
            </div>
            <h2>{questions[currentIndex].question}</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              rowGap: '2rem',
              columnGap: '8rem',
              marginTop: "2rem"
            }}>
              {questions[currentIndex].options.map((opt, idx) => (
                <button
                  className="option-button"
                  key={idx}
                  onClick={() => handleAnswer(opt)}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.backgroundColor = '#00aaff';
                    e.target.style.color = '#111';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#bbb';
                  }}
                  style={{
                    background: "transparent",
                    border: "2px solid #00aaff",
                    borderRadius: "10px",
                    color: "#bbb",
                    cursor: "pointer",
                    fontFamily: "Orbitron, sans-serif",
                    padding: '1rem',
                    fontSize: "1.2rem",
                    transformOrigin: 'center center',
                    transition: 'background-color 0.2s ease-in-out',
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <div style={{
            marginTop: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
            Lives:
          {Array(3).fill(0).map((_, i) => (
              <img key={"life-" + i} src="/heart.png" alt="heart" style={{ width: "25px", height: "25px", filter: i < lives ? "invert(1)" : "invert(0.2)" }} />
            ))}
          </div>
        </div>
      )}
      {currentIndex >= 10 && lives > 0 && (
        <div style={{ height: "60vh", display: "flex", justifyContent: "center", alignItems: "center", background: "black", color: "#00aaff", flexDirection: "column" }}>
          <div
            ref={winScoreCardRef}
            className="question-card"
            style={{
              height:'25rem',
              width:'50rem',
              background: "#111",
              borderRadius: "20px",
              boxShadow: "0 0 30px #00aaff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
              textAlign: "center",
              margin: "1.5rem 0",
            }}>
            <h1>Congratulations, SEGA Master! <br /> You won {emeralds} emeralds</h1>
            <button
              onClick={handleRestart}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.06)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              style={{
                marginTop: "1rem",
                padding: "0.8rem 2rem",
                fontSize: '1rem',
                color: '#000',
                backgroundColor: '#00aaff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 0 20px #00aaff',
                transition: 'transform 0.3s ease, background-color 0.3s ease-in-out',
                fontFamily: "Orbitron, sans-serif",
              }}>
              Restart Trivia
            </button>
          </div>
        </div>
      )}
      {gameOver && (
        <div style={{ height: "60vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "black", color: "#00aaff" }}>
          <div
            ref={gameOverScoreCardRef}
            className="question-card"
            style={{
              height:'25rem',
              width:'50rem',
              background: "#111",
              borderRadius: "20px",
              boxShadow: "0 0 30px #00aaff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
              textAlign: "center",
              margin: "1.5rem 0",
            }}>
            <h1 style={{ fontSize: "2rem",  }}>Game Over!</h1>
            <p style={{ fontSize: "1.5rem",  }}>Emeralds Collected: {emeralds} / 10</p>
            <button
              onClick={handleRestart}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.06)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              style={{
                marginTop: "1rem",
                padding: "0.8rem 2rem",
                fontSize: '1rem',
                color: '#000',
                backgroundColor: '#00aaff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 0 20px #00aaff',
                transition: 'transform 0.3s ease, background-color 0.3s ease-in-out',
                fontFamily: "Orbitron, sans-serif"
              }}>
              Restart Trivia
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Trivia;
