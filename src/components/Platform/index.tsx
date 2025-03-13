import styles from './Platform.module.scss';

// Importar os ícones com os nomes corretos
import gptIcon from '../../assets/gpt.png';
import claudeIcon from '../../assets/claude.png';
import geminiIcon from '../../assets/gemini.png';
import llamaIcon from '../../assets/MetaPn.png';

const Platform: React.FC = () => {
  return (
    <section className={styles.platform} id="plataformas">
      <div className={styles.container}>
        <h2>Sinapse Hub: A revolução em Inteligência Artificial</h2>
        <p>
          A primeira plataforma do Brasil a integrar os 4 melhores modelos de IA do mundo em uma única interface
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={gptIcon} alt="GPT-4.5 Icon" className={styles.cardIcon} />
            <h3>GPT-4.5</h3>
            <p>
              A inteligência artificial mais popular do mundo que pode mudar completamente a forma como você realiza a maioria das tarefas do seu dia a dia.
            </p>
          </div>
          <div className={styles.card}>
            <img src={claudeIcon} alt="Claude 3.7 Sonnet Icon" className={styles.cardIcon} />
            <h3>Claude 3.7 Sonnet</h3>
            <p>
              A IA ideal para criação por excelência, criada para superar os cenários mais exigentes que o ChatGPT não consegue, com resultados mais humanos.
            </p>
          </div>
          <div className={styles.card}>
            <img src={geminiIcon} alt="Gemini 2.0 Pro Icon" className={styles.cardIcon} />
            <h3>Gemini 2.0 Pro</h3>
            <p>
              A inteligência artificial com maior memória, excelente para trabalhar com documentos longos e arquivos.
            </p>
          </div>
          <div className={styles.card}>
            <img src={llamaIcon} alt="Llama 3.1 Icon" className={styles.cardIcon} />
            <h3>Llama 3.1</h3>
            <p>
              O modelo da Meta com capacidade avançada para interação com textos longos, agentes de conversação e assistentes de codificação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;