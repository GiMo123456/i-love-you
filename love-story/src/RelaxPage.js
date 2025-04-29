import { useState } from 'react';
import { Link } from 'react-router-dom';

function RelaxPage({ setPlayMusic }) {
  const [size, setSize] = useState(250);
  const [showBall, setShowBall] = useState(false);

  const handleStart = () => {
    setShowBall(true);
    setPlayMusic(true);
  };

  const handleClick = () => {
    if (size > 60) {
      setSize(size - 20);
    }
  };

  const getBackgroundColor = () => {
    if (size > 170) {
      return '#0a0a0a'; // Dark Night
    } else if (size > 90) {
      return '#001f3f'; // Healing Deep Blue
    } else {
      return '#FFC0CB'; // Sunrise Pink
    }
  };

  return (
    <div style={{ ...styles.pageContainer, backgroundColor: getBackgroundColor() }}>
      {/* Twinkling Stars */}
      <div style={styles.stars}>
        {Array.from({ length: 50 }).map((_, i) => (
          <span key={i} style={{
            ...styles.star,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}></span>
        ))}
      </div>

      {/* Main Content */}
      <div style={styles.container}>
        {!showBall ? (
          <div style={styles.fadeIn}>
            <h1 style={styles.title}>
              It's okay to be tired. 🌙
              <br /><br />
              It's okay to slow down.
              <br /><br />
              Let's just breathe... together.
            </h1>

            <button onClick={handleStart} style={styles.startButton}>
              Begin Breathing "Keep clicking on the ball"
            </button>
          </div>
        ) : (
          <div style={styles.fadeIn}>
            <div
              onClick={handleClick}
              style={{
                ...styles.ball,
                width: `${size}px`,
                height: `${size}px`
              }}
            />
            <p style={styles.text}>
              {size > 60
                ? "Each breath... lighter.\nEach thought... softer."
                : "You are safe here.\nYou are loved here."}
            </p>

            {size <= 60 && (
              <Link to="/page1" style={styles.button}>
                Follow the light

              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Styles
const styles = {
  pageContainer: {
    position: 'relative',
    overflow: 'hidden',
    height: '100vh',
    transition: 'background-color 1.5s ease',
  },
  stars: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 0,
    pointerEvents: 'none',
  },
  star: {
    position: 'absolute',
    width: '2px',
    height: '2px',
    backgroundColor: 'white',
    borderRadius: '50%',
    opacity: 0,
    animation: 'twinkle 5s infinite ease-in-out',
  },
  container: {
    position: 'relative',
    zIndex: 1,
    color: 'white',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  fadeIn: {
    animation: 'fadeIn 2s ease-out forwards',
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '24px',
    marginBottom: '20px',
    padding: '15px',
    whiteSpace: 'pre-line',
  },
  startButton: {
    padding: '12px 24px',
    fontSize: '18px',
    color: '#0a0a0a',
    backgroundColor: '#FFD700',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '20px',
    boxShadow: '0px 4px 15px rgba(255, 215, 0, 0.4)',
    transition: 'all 0.3s ease',
  },
  ball: {
    backgroundColor: '#FFD700',
    borderRadius: '50%',
    transition: 'all 1s ease',
    cursor: 'pointer',
    marginBottom: '30px',
  },
  text: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '18px',
    marginBottom: '30px',
    maxWidth: '90vw',
    whiteSpace: 'pre-line',
  },
  button: {
    fontSize: '18px',
    color: '#0a0a0a',
    background: 'linear-gradient(135deg, #FFD700, #FFC300)',
    padding: '12px 24px',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0px 4px 15px rgba(255, 215, 0, 0.4)',
    marginTop: '20px',
    transition: 'all 0.3s ease',
  }
};

// Keyframes for Twinkling Stars and FadeIn
const twinkleKeyframes = `
@keyframes twinkle {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
}
`;

const fadeInKeyframes = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
`;

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(twinkleKeyframes, styleSheet.cssRules.length);
styleSheet.insertRule(fadeInKeyframes, styleSheet.cssRules.length);

export default RelaxPage;






