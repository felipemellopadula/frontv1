import { useState } from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faBrain } from '@fortawesome/free-solid-svg-icons'; // Ícones sólidos
import { faGoogle } from '@fortawesome/free-brands-svg-icons'; // Ícone de marca

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <FontAwesomeIcon icon={faBrain} className={styles.logoIcon} />
          <span>Sinapse AI</span>
        </div>
        <div className={styles.nav}>
          {/* Menu Mobile */}
          {isMenuOpen && (
            <ul className={styles.navListOpen}>
              <div className={styles.menuHeader}>
                <div className={styles.menuLogo}>
                  <FontAwesomeIcon icon={faBrain} className={styles.logoIcon} />
                  <span>Sinapse AI</span>
                </div>
                <div className={styles.closeIcon} onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              </div>
              <div className={styles.menuItems}>
                <li><a href="#solucoes" onClick={toggleMenu}>Soluções</a></li>
                <li><a href="#plataformas" onClick={toggleMenu}>Plataformas</a></li>
                <li><a href="#recursos" onClick={toggleMenu}>Recursos</a></li>
                <li><a href="#precos" onClick={toggleMenu}>Preços</a></li>
                <li><a href="#contato" onClick={toggleMenu}>Contato</a></li>
                <div className={styles.btn_login}>
                  <button onClick={openModal}>Login</button>
                </div>
              </div>
            </ul>
          )}
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          {/* Menu Desktop */}
          <ul className={styles.navDesktop}>
            <li><a href="#solucoes">Soluções</a></li>
            <li><a href="#plataformas">Plataformas</a></li>
            <li><a href="#recursos">Recursos</a></li>
            <li><a href="#precos">Preços</a></li>
            <li><a href="#contato">Contato</a></li>
            <div className={styles.btn_login}>
              <button onClick={openModal}>Login</button>
            </div>
          </ul>
        </div>
      </div>

      {/* Modal de Login */}
      {isModalOpen && (
        <div className={styles.modal} id="loginModal">
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Acessar Conta</h3>
              <span className={styles.close} id="closeLoginModal" onClick={closeModal}>
                ×
              </span>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formTabs}>
                <div className={`${styles.formTab} ${styles.active}`} data-form="login">
                  Login
                </div>
                <div className={styles.formTab} data-form="register">
                  Cadastro
                </div>
              </div>
              <div className={styles.loginForm} id="loginForm">
                <div className={styles.socialLogin}>
                  <button className={styles.socialLoginBtn}>
                    <FontAwesomeIcon icon={faGoogle} />
                    <span>Google</span>
                  </button>
                </div>
                <div className={styles.divider}>
                  <span>ou</span>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="loginEmail">E-mail</label>
                  <input type="email" id="loginEmail" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="loginPassword">Senha</label>
                  <input type="password" id="loginPassword" required />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '8px' }} /> Lembrar-me
                  </label>
                  <a href="#" style={{ color: '#3a0ca3' }}>Esqueci minha senha</a>
                </div>
                <button className={styles.btn} style={{ width: '100%' }}>
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;