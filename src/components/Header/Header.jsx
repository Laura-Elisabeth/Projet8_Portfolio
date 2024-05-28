import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'

import styles from './Header.module.css';
import Icon from '../../images/searchIcon.png';
import Logo from '../../images/Logo.png';

function Header({ user, setUser }) {

    return (
        <header className={styles.Header} id="header">
          <div className={styles.Container}>
            <div className={styles.Logo}>
              <img src={Logo} alt="Logo" />
            </div>
            <div className={styles.Nav}>
              <ul>
                <li><NavLink to="/" end className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>Accueil</NavLink></li>
                <li><a href="#about-me">Présentation</a></li>
                <li><a href="#skills">Compétences</a></li>
                <li><a href="#projects">Mes Projets</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </header>
    );
}

export default Header;