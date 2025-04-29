import { Link } from 'react-router-dom';

function Page3() {
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
            I know   
            <br /><br />
            Some days, I made the distance feel heavier too.
          </h1>

          <p style={styles.text}>
            Not because I stopped loving you.  
            <br /><br />
            Not because you weren't enough.  
            <br /><br />
            But because I loved you so deeply 
            I kept wishing I could hold you closer.  
            <br /><br />
            I kept wishing for more moments,  
            more memories,  
            more of the life we hadn't lived yet.  
            <br /><br />
            And when I couldn't have them 
            sometimes my heart overflowed into fear.  
            <br /><br />
            But even in the fear 
            it was always, only, love.
          </p>

          <Link to="/page4" style={styles.button}>
          let's go to the other side together ->
          </Link>
        </div> 
        <div style={styles.backButtonContainer}>
  <Link to="/" style={styles.backButton}>
    ↩︎ Breathe Again
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
    background: 'linear-gradient(135deg, #D8BFD8, #C0C0C0, #FFC0CB)', // muted lavender-grey-pink
    backgroundSize: '600% 600%',
    animation: 'gradientMove 20s ease infinite',
  }, 
  backButtonContainer: {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'center',
  },
  backButton: {
    fontSize: '16px',
    color: '#0a0a0a',
    background: 'linear-gradient(135deg, #FFE0E0, #FFF0F5)', // ultra light soft pink
    textDecoration: 'none',
    padding: '8px 18px',
    border: 'none',
    borderRadius: '10px',
    marginTop: '20px',
    transition: 'filter 0.4s ease',
    cursor: 'pointer',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)'},
  
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
    color: '#0a0a0a', // BLACK text for visibility
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
    background: 'linear-gradient(135deg, #FF9A9E, #FECFEF)',
    padding: '12px 24px',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0px 4px 15px rgba(255, 215, 0, 0.4)',
    marginTop: '20px',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }
};

// (Keyframes for twinkle and fadeIn already globally inserted)

export default Page3;

