import { Link } from 'react-router-dom';

function Page2() {
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
            Somewhere along the way 
            <br /><br />
            The distance started to weigh more.
          </h1>

          <p style={styles.text}>
            What once felt like magic 
            began to ache in the waiting.  
            <br /><br />
            Not because love faded 
            but because love stayed,  
            while the miles kept pulling harder.
          </p>

          {/* Main button to Page3 */}
          <Link to="/page3" style={styles.button}>
            I love you always ->
          </Link>

          {/* Breathe Again small button */}
          <div style={styles.backButtonContainer}>
            <Link to="/" style={styles.backButton}>
              ↩︎ Breathe Again
            </Link>
          </div>

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
    background: 'linear-gradient(135deg, #FFB347, #FF7E5F, #D291BC)', // Warm Orange Pink sky
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
    color: '#0a0a0a', // Black text
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
    fontSize: '26px',
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
    background: 'linear-gradient(135deg, #FFB347, #FF7E5F, #D291BC)', // soft rose pink
    padding: '12px 24px',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0px 4px 15px rgba(255, 154, 158, 0.4)',
    marginTop: '20px',
    transition: 'filter 0.4s ease',
    cursor: 'pointer'
  },
  backButtonContainer: {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'center',
  },
  backButton: {
    fontSize: '16px',
    color: '#0a0a0a',
    background: 'linear-gradient(135deg, #FFE0E0, #FFF0F5)', // pastel pink mist
    textDecoration: 'none',
    padding: '8px 18px',
    border: 'none',
    borderRadius: '10px',
    marginTop: '20px',
    transition: 'filter 0.4s ease',
    cursor: 'pointer',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)'
  }
};

// (Keyframes for twinkle and fadeIn are globally inserted)

export default Page2;



