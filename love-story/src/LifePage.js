import { Link } from 'react-router-dom';

function LifePage() {
  return (
    <div style={styles.pageContainer}>
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

      {/* Content */}
      <div style={styles.container}>
        <div style={styles.fadeIn}>
          <h1 style={styles.title}>
            Fall in love with life again. 🌸
          </h1>

          <p style={styles.text}>
            With the little things:  
            the smell of rain,  
            the way the morning sun feels on your skin,  
            the sound of your favorite song.  
            <br /><br />
            Fall in love with every breath,  
            every heartbeat,  
            every small miracle this world quietly offers.
            <br /><br />
            Life doesn't have to be perfect to be beautiful.  
            And neither do you.
          </p>

          {/* Optional button if you want a "Start Again" */}
          <Link to="/" style={styles.button}>
            ↩︎ Breathe Anew
          </Link>
        </div>
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
    background: 'linear-gradient(135deg, #FFD1DC, #FFFACD, #D0F0C0)', // pastel pink-yellow-green
    backgroundSize: '600% 600%',
    animation: 'gradientMove 20s ease infinite',
  },
  stars: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 0,
    pointerEvents: 'none'
  },
  star: {
    position: 'absolute',
    width: '2px',
    height: '2px',
    backgroundColor: 'white',
    borderRadius: '50%',
    opacity: 0,
    animation: 'twinkle 5s infinite ease-in-out'
  },
  container: {
    position: 'relative',
    zIndex: 1,
    color: '#0a0a0a',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  fadeIn: {
    animation: 'fadeIn 2s ease-out forwards'
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '28px',
    marginBottom: '20px',
    padding: '15px',
    whiteSpace: 'pre-line'
  },
  text: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '18px',
    marginBottom: '30px',
    maxWidth: '90vw',
    whiteSpace: 'pre-line'
  },
  button: {
    fontSize: '18px',
    color: '#0a0a0a',
    background: 'linear-gradient(135deg, #FFC0CB, #FFF8DC)', // soft pink to light pastel
    padding: '12px 24px',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0px 4px 15px rgba(255, 182, 193, 0.4)',
    marginTop: '20px',
    transition: 'filter 0.4s ease',
    cursor: 'pointer'
  }
};

export default LifePage;


