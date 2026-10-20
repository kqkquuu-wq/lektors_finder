import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './styles/style.css';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Partners from './pages/partners.jsx';
import Lektors from './pages/lektors.jsx';
import Auth from './pages/auth.jsx';
import L1 from './pages/l1.jsx';
import L2 from './pages/l2.jsx';
import L3 from './pages/l3.jsx';
import L4 from './pages/l4.jsx';
import L5 from './pages/l5.jsx';
import L6 from './pages/l6.jsx';
import Feed from './pages/feedback.jsx';
import Message from './pages/chat.jsx';

function App() {
    const [currentSection, setCurrentSection] = useState('home');

    const handleNavigation = (section) => {
        setCurrentSection(section);
    };

    return (
        <div className="app">

            <Navbar currentSection={currentSection} onNavigate={handleNavigation} />

            <main className="pagecontainer">
                {currentSection === 'home' && <Home onNavigate={handleNavigation} />}
                {currentSection === 'about' && <About />}
                {currentSection === 'partners' && <Partners />}
                {currentSection === 'lektors' && <Lektors onNavigate={handleNavigation} />}
                {currentSection === 'feedback' && <Feed />}
                {currentSection === 'message' && <Message />}
                {currentSection === 'auth' && <Auth onNavigate={handleNavigation} />}
                {currentSection === 'l1' && <L1 onNavigate={handleNavigation} />}
                {currentSection === 'l2' && <L2 onNavigate={handleNavigation} />}
                {currentSection === 'l3' && <L3 onNavigate={handleNavigation} />}
                {currentSection === 'l4' && <L4 onNavigate={handleNavigation} />}
                {currentSection === 'l5' && <L5 onNavigate={handleNavigation} />}
                {currentSection === 'l6' && <L6 onNavigate={handleNavigation} />}
            </main>

            <footer style={{ marginTop: 'auto', textAlign: 'center', padding: '1rem', color: '#777', fontSize: '0.9rem' }}>
                &copy; 2026 Найти лектора. Учебный проект.
            </footer>
        </div>
    );
}

export default App;