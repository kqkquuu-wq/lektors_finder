import React from 'react';
import '../styles/style.css';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import p6 from '../images/p6.png';

const Lektors = ({ onNavigate }) => {
    const lektorsList = [
        { id: 1, img: p1, name: 'Петров Дмитрий Сергеевич', topic: 'Алгоритмы и структуры данных, еще 2...', section: 'l1' },
        { id: 2, img: p2, name: 'Соколов Андрей Владимирович', topic: 'Биохимия, еще 2...', section: 'l2' },
        { id: 3, img: p3, name: 'Николаев Игорь Петрович', topic: 'Микроэкономика, еще 2...', section: 'l3' },
        { id: 4, img: p4, name: 'Смирнова Елена Викторовна', topic: 'Русский язык и стилистика, еще 2...', section: 'l4' },
        { id: 5, img: p5, name: 'Васильева Ольга Дмитриевна', topic: 'Графический дизайн, еще 2...', section: 'l5' },
        { id: 6, img: p6, name: 'Морозова Анна Павловна', topic: 'Общая психология, еще 2...', section: 'l6' },
    ];

    const handleLektorClick = (lektor) => {
        if (lektor.section && onNavigate) {
            onNavigate(lektor.section);
        }
    };

    return (
        <div className="pagecontainer">
            <h1 className="lektors-title">Наши лекторы</h1>

            <div className="lektors-grid">
                {lektorsList.map((lektor) => (
                    <div key={lektor.id} className="lektor-card">

                        <div className="lektor-photo">
                            <img src={lektor.img} alt={lektor.name} />
                        </div>

                        <div className="lektor-footer">
                            <div className="lektor-text">
                                <h3 className="lektor-name">{lektor.name}</h3>
                                <p className="lektor-topic">{lektor.topic}</p>
                            </div>
                            <button
                                className="partner-arrow lektor-arrow"
                                onClick={() => handleLektorClick(lektor)}
                                aria-label={`Открыть профиль: ${lektor.name}`}
                            >
                                ↗
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lektors;