import React from 'react';
import styles from './Home.module.css';
import Banner from '../../components/Banner/Banner';
import Portrait from '../../images/portrait.jpeg';
import Modal from 'react-modal';
import Booki from '../../images/bookiscreen.png';
import ArchieWebos from '../../images/sophie1.png';
import Kasa from '../../images/kasa.png';
import MonVieuxGrimoire from "../../images/vieuxgrimoire.png";
import arrow from '../../images/arrow.jpeg';
import gitLogo from '../../images/gitlogo.png'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(242, 206, 206, 0.6)',
    border: 'none',
    borderRadius: '20px',
    width: '55rem',
    height: '40rem',
  },
};


Modal.setAppElement('#root');


function Home() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);
  const [modalIsOpen3, setIsOpen3] = React.useState(false);
  const [modalIsOpen4, setIsOpen4] = React.useState(false);


  function openModal() {
      setIsOpen(true);
  }
  function openModal2() {
      setIsOpen2(true);
  }
  function openModal3() {
    setIsOpen3(true);
  }
  function openModal4() {
    setIsOpen4(true);
}   

  function afterOpenModal() {
      subtitle.style.color = 'white';
      subtitle.style.fontFamily = 'font-family: "Gill Sans", sans-serif';
      subtitle.style.textShadow = "1px 1px 2px white, 0 0 1em grey, 0 0 0.2em white";
      subtitle.style.fontSize = "45px";
  }

  function closeModal() {
      setIsOpen(false);
  }
  function closeModal2() {
      setIsOpen2(false);
  }
  function closeModal3() {
    setIsOpen3(false);
  }
  function closeModal4() {
    setIsOpen4(false);
  }

    return (
      <div className={styles.List}>
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            portalClassName={styles.modal}
            >
                <div className={styles.modalAll}>
                  <div className={styles.titleButton}>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Booki</h2>
                    <button onClick={closeModal}>Fermer</button>
                  </div>
                  <img src={Booki} alt="site Booki" />
                  <div className={styles.modal}>
                    <div className={styles.descriptionDiv}>
                      <h3>Description</h3>
                      <p>Développement d'un site web responsive avec HTML et CSS.</p>
                    </div>
                    <div className={styles.probDiv}>
                      <h3>Problématiques</h3>
                      <ul>
                        <li>Implémenter une interface responsive.</li>
                        <li>Intégrer du contenu.</li>
                        <li>Versionner un projet.</li>
                      </ul>
                      <h3>Solutions</h3>
                      <ul>
                        <li>HTML, CSS, media queries.</li>
                        <li>Suivi d'une maquette Figma.</li>
                        <li>Git et GitHub.</li>
                      </ul>
                    </div>
                    <div className={styles.skillsDiv}>
                      <h3>Compétences</h3>
                      <div className={styles.skillTagDiv}>
                        <div className={styles.skillTag}>
                          <p>HTML</p>
                        </div>
                        <div className={styles.skillTag}>
                          <p>
                            CSS
                          </p>
                        </div>
                        <div className={styles.skillTag}>
                          <p>
                            Git/GitHub
                          </p>
                        </div>
                        <div className={styles.skillTag}>
                          <p>
                            Terminal, zsh
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.gitLink}>
                    <a href='https://github.com/Laura-Elisabeth/Projet2_Booki'>
                      <img className={styles.imageLink} src={gitLogo} alt='logo git'/>
                    </a>
                    <a href='https://github.com/Laura-Elisabeth/Projet2_Booki'>
                      <p> Visitez le repository du code de ce projet !</p>
                    </a>
                  </div>
                </div>
            </Modal>
            <Modal
            isOpen={modalIsOpen2}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal2}
            style={customStyles}
            contentLabel="Example Modal"
            portalClassName={styles.modal}
            >
                <div className={styles.modalAll}>
                  <div className={styles.titleButton}>
                  <h2 ref={(_subtitle) => (subtitle = _subtitle)}>ArchiWebos</h2>
                  <button onClick={closeModal2}>close</button>
                  </div>
                  <img src={ArchieWebos} alt="site ArchieWebos" />
                  <div className={styles.modal}>
                    <div className={styles.descriptionDiv}>
                      <h3>Description</h3>
                      <p>Création d'une page web dynamique pour une photographe freelance avec JavaScript.</p>
                    </div>
                    <div className={styles.probDiv}>
                      <h3>Problématiques</h3>
                      <ul>
                        <li>Sauvegarder des données.</li>
                        <li>Ajouter des éléments dans le DOM.</li>
                        <li>Intéragir avec des formulaires.</li>
                      </ul>
                      <h3>Solutions</h3>
                      <ul>
                        <li>API HTTP.</li>
                        <li>Méthode createElement.</li>
                        <li>Utilisation des objets FormData.</li>
                      </ul>
                    </div>
                    <div className={styles.skillsDiv}>
                      <h3>Compétences</h3>
                      <div className={styles.skillTagDiv}>
                        <div className={styles.skillTag}>
                          <p>JavaScript Vanilla</p>
                        </div>
                        <div className={styles.skillTag}>
                          <p>
                            Git/GitHub
                          </p>
                        </div>
                        <div className={styles.skillTag}>
                          <p>
                            Terminal, zsh
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.gitLink}>
                    <a href='https://github.com/Laura-Elisabeth/Projet3_ArchiWebos'>
                      <img className={styles.imageLink} src={gitLogo} alt='logo git'/>
                    </a>
                    <a href='https://github.com/Laura-Elisabeth/Projet3_ArchiWebos'>
                      <p> Visitez le repository du code de ce projet !</p>
                    </a>
                  </div>
                </div>
            </Modal>
            <Modal
            isOpen={modalIsOpen3}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal3}
            style={customStyles}
            contentLabel="Example Modal"
            portalClassName={styles.modal}
            >
                <div className={styles.modalAll}>
                  <div className={styles.titleButton}>
                  <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Kasa</h2>
                  <button onClick={closeModal3}>close</button>
                  </div>
                  <img src={Kasa} alt="site Kasa" />
                  <div className={styles.modal}>
                    <div className={styles.descriptionDiv}>
                      <h3>Description</h3>
                      <p>Création d'une application web de location immobilière avec React.</p>
                    </div>
                    <div className={styles.probDiv}>
                      <h3>Problématiques</h3>
                      <ul>
                        <li>Configurer la navigation entre les pages.</li>
                        <li>Développer les éléments</li>
                        <li>Écrire du style de manière optimale.</li>
                      </ul>
                      <h3>Solutions</h3>
                      <ul>
                        <li>React Router</li>
                        <li>Composants React.</li>
                        <li>Incorporation de Sass.</li>
                      </ul>
                    </div>
                    <div className={styles.skillsDiv}>
                      <h3>Compétences</h3>
                      <div className={styles.skillTagDiv}>
                        <div className={styles.skillTag}>
                          <p>React</p>
                        </div>
                        <div className={styles.skillTag}>
                          <p>
                            React Router
                          </p>
                        </div>
                        <div className={styles.skillTag}>
                          <p>
                            Sass
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.gitLink}>
                    <a href='https://github.com/Laura-Elisabeth/Projet6_Kasa'>
                      <img className={styles.imageLink} src={gitLogo} alt='logo git'/>
                    </a>
                    <a href='https://github.com/Laura-Elisabeth/Projet6_Kasa'>
                      <p>Visitez le repository du code de ce projet !</p>
                    </a>
                  </div>
                </div>
            </Modal>
            <Modal
            isOpen={modalIsOpen4}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal4}
            style={customStyles}
            contentLabel="Example Modal"
            portalClassName={styles.modal}
            >
                <div className={styles.modalAll}>
                  <div className={styles.titleButton}>
                  <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Mon Vieux Grimoire</h2>
                  <button onClick={closeModal4}>close</button>
                  </div>
                  <img src={MonVieuxGrimoire} alt="site Mon Vieux Grimoire" />
                  <div className={styles.modal}>
                    <div className={styles.descriptionDiv}>
                      <h3>Description</h3>
                      <p>Développement du back-end d'un site de notation de livre.</p>
                    </div>
                    <div className={styles.probDiv}>
                      <h3>Problématiques</h3>
                      <ul>
                        <li>Manipuler les éléments du code.</li>
                        <li>Stocker les données.</li>
                        <li>Sécuriser l'application.</li>
                      </ul>
                      <h3>Solutions</h3>
                      <ul>
                        <li>Opérations CRUD.</li>
                        <li>MongoDB, Mongoose.</li>
                        <li>Dotenv, bcrypt, JST.</li>
                      </ul>
                    </div>
                    <div className={styles.skillsDiv}>
                      <h3>Compétences</h3>
                      <div className={styles.skillTagDiv}>
                        <div className={styles.skillTag}>
                          <p>Node</p>
                        </div>
                        <div className={styles.skillTag}>
                          <p>
                            Express
                          </p>
                        </div>
                        <div className={styles.skillTag}>
                          <p>
                            MongoDB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.gitLink}>
                    <a href='https://github.com/Laura-Elisabeth/Projet7_Mon_Vieux_Grimoire'>
                      <img className={styles.imageLink} src={gitLogo} alt='logo git'/>
                    </a>
                    <a href='https://github.com/Laura-Elisabeth/Projet2_Booki'>
                      <p> Visitez le repository du code de ce projet !</p>
                    </a>
                  </div>
                </div>
            </Modal>
        <div>
          <Banner />
        </div>
        <div className={styles.aboutMe} id="about-me">
          <div className={styles.abouTitle}>
            <h2>Présentation</h2>
          </div>
          <div className={styles.aboutMeText}>
            <img src={Portrait} alt="portrait"/>
            <p>Bonjour ! <br /> Je m'appelle Laura-Elisabeth, je suis développeuse web full stack. 
                        <br /> J'ai effectué la formation Développeur Web d'OpenClassrooms.
            </p>
          </div>
        </div>
        <div className={styles.li} id="skills">
          <h2>Compétences</h2>
          <div className={styles.skillsList}>
            <div className={styles.skillTag}>HTML5</div>
            <div className={styles.skillTag}>CSS3</div>
            <div className={styles.skillTag}>JavaScript Vanilla</div>
            <div className={styles.skillTag}>React</div>
            <div className={styles.skillTag}>Express</div>
            <div className={styles.skillTag}>Git/GitHub</div>
            <div className={styles.skillTag}>Commandes Linux</div>
            <div className={styles.skillTag}>Plannification de projets avec les méthode agiles</div> 
            <div className={styles.skillTag}>Optimisation</div>
            <div className={styles.skillTag}>Référencement local</div>
            <div className={styles.skillTag}>SEO</div>
          </div>
        </div>
        <div className={styles.projectSection} id="projects">
          <h2>Projets</h2>
          <div className={styles.projectList}>
            <div className={styles.projectCard}>
              <div className={styles.Booki}>
                <div className={styles.tags}>
                  <p>HTML</p>
                  <p>CSS</p>
                </div>
                <div className={styles.tags2}>Booki</div>
                <button className={styles.projectButton} onClick={openModal}>
                </button>
              </div>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.ArchieWebos}>
                  <div className={styles.tags}>
                    <p>JavaScript Vanilla</p> 
                    </div>
                  <div className={styles.tags2}>ArchieWebos</div>
                  <button className={styles.projectButton} onClick={openModal2}>
                  </button>
              </div>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.Kasa}>
                    <div className={styles.tags}>
                      <p>React</p>
                      <p>Sass</p>
                    </div>
                    <div className={styles.tags2}>Kasa</div>
                    <button className={styles.projectButton} onClick={openModal3}>
                    </button>
              </div>
            </div>
            <div className={styles.projectCard}>
            <div className={styles.monVieuxGrimoire}>
                    <div className={styles.tags}>
                      <p>Node</p>
                      <p>Express</p>
                      <p>MongoDB</p>
                    </div>
                    <div className={styles.tags2}>Mon Vieux Grimoire</div>
                    <button className={styles.projectButton} onClick={openModal4}>
                    </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contact} id="contact">
          <h2>Me contacter</h2>
          <p>
            Adresse e-mail: dosreis.laura@proton.me
          </p>
        </div>

        <a href="#header" className={styles.goUp}>
          <img src={arrow} alt="flèche vers le haut" />
        </a>
      </div>

    );
}
  
export default Home;