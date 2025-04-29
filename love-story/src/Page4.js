import { Link } from 'react-router-dom';

function Page4() {
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
            And if ever you feel lost 
            <br /><br />
            Know that I never needed a label,  
            or a map,  
            or even a promise.
          </h1>

          <p style={styles.text}>
            Your heart was always enough.  
            <br /><br />
            Your soul was already home.  
            <br /><br />
            I am not here to trap you.  
            I am not here to demand anything from you.  
            <br /><br />
            You are free  
            and you always were.  
            <br /><br />
            And even free,  
            I will always choose you in every quiet way.
          </p>

          {/* Main button to Page5 */}
          <Link to="/page5" style={styles.button}>
            Trust the Quiet ->
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
    background: 'linear-gradient(135deg, #A0D8EF, #D8BFD8, #E6E6FA)', // pastel blue-lavender
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
    color: '#0a0a0a', // Black text for soft light background
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
    background: 'linear-gradient(135deg, #89CFF0, #AED9E0)', // sky blue gradient
    padding: '12px 24px',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0px 4px 15px rgba(137, 207, 240, 0.4)',
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
    background: 'linear-gradient(135deg, #D0F0FD, #E0F7FA)', // pastel blue mist
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

// (Keyframes for twinkle and fadeIn globally inserted)

export default Page4;




