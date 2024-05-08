import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import styles from './Banner.module.css';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgb(245,209,16, 0.6)',
      border: 'none',
      borderRadius: '20px',
      width: '35rem',
      height: '20rem',
      fontFamily: '"Gill Sans", sans-serif;'
    },
};

Modal.setAppElement('#root');

function Banner({picture}) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpen2, setIsOpen2] = React.useState(false);


    function openModal() {
        setIsOpen(true);
    }

    function openModal2() {
        setIsOpen2(true);
    } 

    function afterOpenModal() {
        subtitle.style.color = 'color: rgb(65, 41, 96, 1)';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function closeModal2() {
        setIsOpen2(false);
    }

    return (
        <div className={styles.Banner}>
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                <ul>
                    <li>Je suis développeuse web Full Stack, JavaScript, React et Express !</li>
                    <li>J'ai également des compétences en HTML et CSS, ce site vous en donne un bref aperçu.</li>
                    <li>Vous pourrez trouver dans la section Projets les liens vers mes repositories GitHub.</li>
                </ul>
            </Modal>
            <Modal
            isOpen={modalIsOpen2}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal2}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                <button onClick={closeModal2}>close</button>
                <div>I am not a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
            <div className={styles.Text}>
                <h1>Laura-Elisabeth Dos Reis</h1>
                <p>
                    Développeuse web Full Stack 
                </p>
                <p>
                </p>
                <div className={styles.DomaineDiv}>
                    <button className={styles.Domaine} onClick={openModal}>
                        <div className={styles.DevButton}>
                            <p>
                                Développement web 
                            </p>
                        </div>
                    </button>
                    <button className={styles.Domaine} onClick={openModal2}>
                        <div className={styles.SysButton}>
                            <p>
                                Administration Systèmes, Réseaux et Cybersécurité
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;