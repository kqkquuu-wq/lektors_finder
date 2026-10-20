import React from 'react';
import '../styles/style.css';
import homeImage from '../images/home1.png';
import iclImg from '../images/icl.png';
import tatneftImg from '../images/tatneft.png';

const Home = ({ onNavigate }) => {
    return (
        <div className="pagecontainer">
            <div className="grid">
                <div className="card">
                    <img src={homeImage} alt="Лектор" />
                </div>

                <div className="card text-card">
                    <p className="cardtext">
                        Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.
                    </p>

                    <div className="actions-row">
                        <button
                            className="btn-red"
                            onClick={() => onNavigate('lektors')}
                        >
                            НАЙТИ ЛЕКТОРА
                        </button>
                    </div>
                </div>
            </div>
            <div className="about-home">
                <h2 className="about-home-title">О платформе</h2>
                <p className="textP">
                    Наша учебная платформа соединяет компании, образовательные учреждения и НКО с
                    профессиональными лекторами, спикерами и тренерами.
                </p>
                <p className="textP">
                    Мы упрощаем процесс подбора, бронирования и организации лекций, помогая находить экспертов,
                    которые не просто делятся знаниями, но и вдохновляют аудиторию.
                </p>
            </div>


            <div className="about-home">
                <h2 className="about-home-title">Наши партнёры</h2>

                <div className="partners-grid">

                    <div className="partner-card">
                        <div className="partner-header">
                            <div className="partner-logo">
                                <img src={iclImg} alt="ICL" />
                            </div>
                            <a
                                href="https://icl.ru/"
                                target="_blank"
                                rel="noreferrer"
                                className="partner-arrow"
                                aria-label="Перейти на сайт ICL"
                            >
                                ↗
                            </a>
                        </div>
                        <h3 className="cardtitle">ICL</h3>
                        <p className="cardtext">
                            ICL — высокотехнологичная, динамично развивающаяся группа компаний, входящая в число
                            крупнейших ИТ-компаний России, предоставляющая весь спектр ИТ-услуг, проектов, решений
                            и продуктов. Компания была основана в 1991 году на базе завода ЭВМ Казанским
                            производственным объединением вычислительных систем (КПО ВС).
                        </p>
                    </div>

                    <div className="partner-card">
                        <div className="partner-header">
                            <div className="partner-logo">
                                <img src={tatneftImg} alt="Татнефть" />
                            </div>
                            <a
                                href="https://www.tatneft.ru/"
                                target="_blank"
                                rel="noreferrer"
                                className="partner-arrow"
                                aria-label="Перейти на сайт Татнефть"
                            >
                                ↗
                            </a>
                        </div>
                        <h3 className="cardtitle">Татнефть</h3>
                        <p className="cardtext">
                            «Татнефть» — одна из крупнейших российских вертикально-интегрированных компаний,
                            в составе которой динамично развиваются нефтегазодобыча, нефтепереработка,
                            нефтегазохимия, сеть АЗС, композитный кластер, электроэнергетика, разработка и
                            производство оборудования для нефтегазовой отрасли и блок сервисных структур.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;