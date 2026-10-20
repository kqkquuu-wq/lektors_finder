import React from 'react';
import '../styles/style.css';

const Navbar = ({ currentSection, onNavigate }) => {
    const sections = [
        { id: 'home', label: 'Главная' },
        { id: 'about', label: 'О нас' },
        { id: 'partners', label: 'Партнеры' },
        { id: 'lektors', label: 'Лекторы' },
        { id: 'chat', label: 'Сообщения' },
        { id: 'feedback', label: 'Отзывы' },
    ];

    return (
        <nav className="nav">
            <div className="nav-inner">
                <div className="navbuttons-left">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            className={`nav-btn ${currentSection === section.id ? 'active' : ''}`}
                            onClick={() => onNavigate(section.id)}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>
                <div className="navbuttons-right">
                    <button
                        className="nav-btn"
                        onClick={() => onNavigate('auth')}
                    >
                        Войти
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;