import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { FaBars, FaTimes, FaBrain, FaGoogle } from 'react-icons/fa';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/LOGO_Prancheta 1.png'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setActiveTab('login');
  };
  const switchTab = (tab: 'login' | 'register') => setActiveTab(tab);

  const handleGoogleSuccess = async (credentialResponse: any) => {
    const token = credentialResponse.credential;
    try {
      const response = await fetch('http://localhost:3000/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Login/Cadastro com Google bem-sucedido:', data);
        localStorage.setItem('token', data.token); // Armazena o token no localStorage
        closeModal();
        navigate('/profile'); // Redireciona para a página de perfil
      } else {
        console.error('Erro:', data.error);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  const handleGoogleError = () => {
    console.log('Erro no login com Google');
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
          <img className={styles.logo} src={logo} alt="Logo da Synapse Ai" />       
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <a href="#solucoes" onClick={toggleMenu}>Soluções</a>
          <a href="#plataforma" onClick={toggleMenu}>I.A</a>
          <a href="#recursos" onClick={toggleMenu}>Recursos</a>
          <a href="#precos" onClick={toggleMenu}>Planos</a>
          <a href="#contato" onClick={toggleMenu}>Contato</a>
        </nav>
        <div className={styles.btnLogin}>
          <button onClick={openModal}>Login</button>
        </div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Modal de Login/Cadastro */}
      {isModalOpen && (
        <GoogleOAuthProvider clientId="588604703738-5slo4l7hul81ejk17l3rnth2abj5thpo.apps.googleusercontent.com">
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>Acessar Conta</h3>
                <span className={styles.close} onClick={closeModal}>
                  ×
                </span>
              </div>
              <div className={styles.modalBody}>
                <div className={styles.formTabs}>
                  <div
                    className={`${styles.formTab} ${activeTab === 'login' ? styles.active : ''}`}
                    onClick={() => switchTab('login')}
                  >
                    Login
                  </div>
                  <div
                    className={`${styles.formTab} ${activeTab === 'register' ? styles.active : ''}`}
                    onClick={() => switchTab('register')}
                  >
                    Cadastro
                  </div>
                </div>

                {/* Formulário de Login */}
                {activeTab === 'login' && (
                  <div className={styles.loginForm}>
                    <div className={styles.socialLogin}>
                      <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleError}
                      />
                    </div>
                    <div className={styles.divider}>
                      <span>ou</span>
                    </div>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <button>Entrar</button>
                  </div>
                )}

                {/* Formulário de Cadastro */}
                {activeTab === 'register' && (
                  <div className={styles.registerForm}>
                    <div className={styles.socialLogin}>
                      <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleError}
                      />
                    </div>
                    <div className={styles.divider}>
                      <span>ou</span>
                    </div>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Telefone" />
                    <input type="password" placeholder="Senha" />
                    <button>Cadastrar</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </GoogleOAuthProvider>
      )}
    </header>
  );
};

export default Header;