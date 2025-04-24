import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline, TimelineItem, TimelineSeparator, TimelineContent } from '@mui/lab';

gsap.registerPlugin(ScrollTrigger);

function TimelineComponent() {

  const Headingref = useRef(null);

  useEffect(() => {
    gsap.to(".timeline-progress-bar", {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: "#timeline-container",
        start: 'top center',
        end: "center+=1300 center",
        scrub:true,
      }
    });

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

    gsap.utils.toArray(".timeline-text").forEach((text) => {
      gsap.fromTo(text, { autoAlpha: 0, y: 50 }, {
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      });
    });

    gsap.utils.toArray(".timeline-milestones").forEach((milestones) => {
      gsap.fromTo(milestones, { autoAlpha: 0, y: 50 }, {
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: milestones,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      });
    });
  }, []);

  return (
    <section id="timeline-container" style={{margin: '15rem 0 0 0', position: 'relative', padding: '20px', backgroundColor: '#000', color: '#fff' }}>
      <h1 className="timeline-heading" 
      ref={Headingref} style={{
        width: '100%',
        zIndex: 3,
        fontSize: 'clamp(2rem, 5vw, 4rem)',
        margin: '1rem auto 8rem',
        color: '#bbb',
        fontFamily: 'Orbitron, sans-serif',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
        Timeline
      </h1>
      <Timeline className="timeline" position="alternate">
        <TimelineItem position="alternate">
          <TimelineSeparator>
            <div style={{backgroundColor:'black' ,zIndex: 2, fontFamily: 'Orbitron, sans-serif', fontSize: '2.5rem', fontWeight: 'bold', color: '#00aaff', padding: '10px 20px' }}>1980s</div>
            <div className="timeline-progress-bar" style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%) scaleY(0)',
                transformOrigin: 'top center',
                width: '4px',
                height: '560%',
                background: 'linear-gradient(180deg, #00aaff, #004466)',
                boxShadow: '0 0 10px #00aaff',
                borderRadius: '3px',
                zIndex: 1
              }}>

              </div>
          </TimelineSeparator>
          <TimelineContent>
            <p className="timeline-text" style={{fontFamily: 'Orbitron, sans-serif', color: '#bbb', fontSize: '1.1rem', lineHeight: '1.6', padding: '4rem 2rem 0' }}>The 1980s established SEGA as a gaming leader with iconic titles like 'Out Run' and 'Space Harrier.' <br /><br /> This decade saw significant technological advancements, entered the home console market with the SG-1000 and Master System, paving the way for future innovations.</p>
            <p className="timeline-text" style={{ fontFamily: 'Orbitron, sans-serif', color: '#00aaff', fontSize: '1.1rem', lineHeight: '1.6', padding: '2rem 2rem 0', textAlign: 'left' }}>
              Major Milestones:
            </p>
            <ul className="timeline-milestones" style={{fontFamily: 'Orbitron, sans-serif', color: '#bbb', fontSize: '1rem', lineHeight: '1.6', padding: '0 0 0 20px'}}>
              <li>Launch of the SG-1000 (1983)</li>
              <li>Introduction of the Master System (1985)</li>
              <li>Release of 'Out Run' and 'Space Harrier'</li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem position="alternate">
          <TimelineSeparator>
            <div style={{backgroundColor:'black' ,zIndex: 2, fontFamily: 'Orbitron, sans-serif', fontSize: '2.5rem', fontWeight: 'bold', color: '#00aaff', padding: '10px 20px' }}>1990s</div>
          </TimelineSeparator>
          <TimelineContent>
            <p className="timeline-text" style={{fontFamily: 'Orbitron, sans-serif', color: '#bbb', fontSize: '1.1rem', lineHeight: '1.6', padding: '4rem 2rem 0', textAlign: 'left' }}>In the 1990s, SEGA transformed the gaming landscape with the Genesis and the iconic 'Sonic the Hedgehog.' <br /><br /> This decade solidified its position as a competitor to Nintendo, marked by innovative marketing and the launch of the SEGA Saturn, showcasing advanced 3D graphics.</p>
            <p className="timeline-text" style={{ fontFamily: 'Orbitron, sans-serif', color: '#00aaff', fontSize: '1.1rem', lineHeight: '1.6', padding: '2rem 2rem 0', textAlign: 'left' }}>
              Major Milestones:
            </p>
            <ul className="timeline-milestones" style={{fontFamily: 'Orbitron, sans-serif', color: '#bbb', fontSize: '1rem', lineHeight: '1.6', padding: '0 0 0 20px', textAlign: 'left'}}>
              <li>Launch of the Sega Genesis (1988)</li>
              <li>Introduction of 'Sonic the Hedgehog' (1991)</li>
              <li>Release of the SEGA Saturn (1994)</li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem position="alternate">
          <TimelineSeparator>
            <div style={{backgroundColor:'black' ,zIndex: 2, fontFamily: 'Orbitron, sans-serif', fontSize: '2.5rem', fontWeight: 'bold', color: '#00aaff', padding: '10px 20px' }}>2000s</div>
          </TimelineSeparator>
          <TimelineContent>
            <p className="timeline-text" style={{fontFamily: 'Orbitron, sans-serif', color: '#bbb', fontSize: '1.1rem', lineHeight: '1.6', padding: '4rem 2rem 0'}}>The 2000s marked a pivotal shift for SEGA after the Dreamcast's launch. <br /><br /> Despite acclaim for titles like 'Jet Set Radio,' the Dreamcast faced tough competition. <br /><br /> In 2001, SEGA exited hardware to focus on software, allowing its franchises to thrive on multiple platforms.</p>
            <p className="timeline-text" style={{ fontFamily: 'Orbitron, sans-serif', color: '#00aaff', fontSize: '1.1rem', lineHeight: '1.6', padding: '2rem 2rem 0', textAlign: 'left' }}>
              Major Milestones:
            </p>
            <ul className="timeline-milestones" style={{fontFamily: 'Orbitron, sans-serif', color: '#bbb', fontSize: '1rem', lineHeight: '1.6', padding: '0 0 0 20px'}}>
              <li>Launch of the Dreamcast (1999)</li>
              <li>Release of 'Jet Set Radio' (2000)</li>
              <li>SEGA's exit from hardware (2001)</li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem position="alternate">
          <TimelineSeparator>
            <div style={{backgroundColor:'black' ,zIndex: 2, fontFamily: 'Orbitron, sans-serif', fontSize: '2.5rem', fontWeight: 'bold', color: '#00aaff', padding: '10px 20px' }}>2010s</div>
          </TimelineSeparator>
          <TimelineContent>
            <p className="timeline-text" style={{ fontFamily: 'Orbitron, sans-serif', color: '#bbb', fontSize: '1.1rem', lineHeight: '1.6', padding: '4rem 2rem 0', textAlign: 'left' }}>
              The 2010s saw SEGA embrace digital innovation, focusing on mobile gaming and revitalizing classic franchises. <br /> <br />This era introduced remastered titles, appealing to both longtime fans and newcomers. <br /> <br /> Sonic the Hedgehog's resurgence highlighted SEGA's ongoing commitment to quality and creativity.
            </p>
            <p className="timeline-text" style={{ fontFamily: 'Orbitron, sans-serif', color: '#00aaff', fontSize: '1.1rem', lineHeight: '1.6', padding: '2rem 2rem 0', textAlign: 'left' }}>
              Major Milestones:
            </p>
            <ul className="timeline-milestones" style={{fontFamily: 'Orbitron, sans-serif', color: '#bbb', fontSize: '1rem', lineHeight: '1.6', padding: '0 0 0 20px', textAlign: 'left'}}>
              <li>Release of 'Sonic Mania' (2017)</li>
              <li>Launch of 'SEGA Forever' mobile initiative (2017)</li>
              <li>Revival of classic franchises with remastered versions</li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem position="alternate">
          <TimelineSeparator>
            <div style={{backgroundColor:'black' ,zIndex: 2, fontFamily: 'Orbitron, sans-serif', fontSize: '2.5rem', fontWeight: 'bold', color: '#00aaff', padding: '10px 20px' }}>2020s</div>
          </TimelineSeparator>
          <TimelineContent>
            <p className="timeline-text" style={{ fontFamily: 'Orbitron, sans-serif', color: '#bbb', fontSize: '1.1rem', lineHeight: '1.6', padding: '4rem 2rem 0', textAlign: 'left' }}>
              In the 2020s, SEGA has successfully expanded its digital presence and embraced cloud gaming. <br /><br /> Planned to enhance community engagement and innovate gameplay experiences for the future. <br /><br /> The company aims to revitalize beloved franchises and explore new gaming technologies, ensuring a vibrant future for its gaming legacy.
            </p>
            <p className="timeline-text" style={{ fontFamily: 'Orbitron, sans-serif', color: '#00aaff', fontSize: '1.1rem', lineHeight: '1.6', padding: '2rem 2rem 0', textAlign: 'left' }}>
              Major Milestones:
            </p>
            <ul className="timeline-milestones" style={{fontFamily: 'Orbitron, sans-serif', color: '#bbb', fontSize: '1rem', lineHeight: '1.6', padding: '0 0 0 20px', textAlign: 'left'}}>
              <li>Launch of 'Phantasy Star Online 2: New Genesis' (2021)</li>
              <li>Planned launching of Sonic Racing: CrossWorlds (2025)</li>
              <li>Planned launching of SHINOBI: Art of Vengeance (2025)</li>
            </ul>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}

export default TimelineComponent;
