import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import RelaxPage from './RelaxPage';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import LifePage from './LifePage';

function App() {
  const [playMusic, setPlayMusic] = useState(false); // control music globally

  return (
    <Router>
      {/* Global Music Player */}
      {playMusic && (
        <audio autoPlay loop style={{ display: 'none' }}>
          <source src="/seasons.mp3" type="audio/mpeg" />
        </audio>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<RelaxPage setPlayMusic={setPlayMusic} />} /> {/* Pass function */}
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/life" element={<LifePage />} />
      </Routes>
    </Router>
  );
}

export default App;


