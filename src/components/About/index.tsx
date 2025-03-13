import styles from './About.module.scss';
import { FaBrain, FaRobot, FaNewspaper } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section className={styles.about} id="solucoes">
      <div className={styles.container}>
        <h2>
          A Sinapse AI é a plataforma mais avançada de <br />
          Inteligência Artificial Generativa do Brasil
        </h2>
        <div className={styles.solutionsGrid}>
          <div className={styles.solutionItem}>
            <div className={styles.solutionIcon}>
              <FaBrain />
            </div>
            <h3>Plataforma Unificada</h3>
            <p>
              Nossa plataforma centralizada traz as melhores IAs da atualidade: GPT4o, Claude, Gemini e Llama. Além de funções exclusivas como sistema de pastas e Flows.
            </p>
          </div>
          <div className={styles.solutionItem}>
            <div className={styles.solutionIcon}>
              <FaRobot />
            </div>
            <h3>Sinapse Hub</h3>
            <p>
              Acesse o poder da IA através de uma interface intuitiva que conecta você a múltiplos modelos de IA com avançadas ferramentas de processamento de dados em tempo real.
            </p>
          </div>
          <div className={styles.solutionItem}>
            <div className={styles.solutionIcon}>
              <FaNewspaper />
            </div>
            <h3>Newsletter</h3>
            <p>
              Receba toda semana apenas as melhores notícias, experimentos, estudos e ferramentas que estão surgindo no mundo das IAs (e saiba como usá-las).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;