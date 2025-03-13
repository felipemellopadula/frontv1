import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <h3>Sinapse AI</h3>
            <p>CNPJ: 12.345.678/0001-90</p>
            <p>Rua Tecnologia Avançada, 1000 - Conjunto 81</p>
            <p>Vila Inovação, São Paulo - SP - CEP: 01234-567</p>
          </div>
          <div className={styles.footerCol}>
            <h3>Produtos</h3>
            <ul>
              <li><a href="#plataforma">Sinapse Hub</a></li>
              <li><a href="#recursos">Ferramentas</a></li>
              <li><a href="#precos">Planos</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h3>Empresa</h3>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#">Parcerias</a></li>
              <li><a href="#">Para empresas</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h3>Redes Sociais</h3>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <h3>Fale Conosco</h3>
            <p>contato@sinapseai.com.br</p>
            <p>+55 11 9 1234-5678</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2025 Sinapse AI. Todos os direitos reservados.</p>
          <div className={styles.footerLinks}>
            <a href="#">Políticas de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;