import styles from './Resources.module.scss';
import { FaStar, FaFilePdf, FaLayerGroup, FaStream, FaFolder, FaChartBar } from 'react-icons/fa'; // Importa os ícones do react-icons

const Resources: React.FC = () => {
  return (
    <section className={styles.resources} id="recursos">
      <div className={styles.container}>
        <h2>Ferramentas Exclusivas que Transformam seu Trabalho</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FaStar size={40} />
            </div>
            <h3>Sinapse Core</h3>
            <p>
              Nossa IA proprietária que seleciona automaticamente o modelo mais indicado para cada tarefa. Você não precisa se preocupar com nada e tem a segurança que sempre terá a melhor IA, independente do que estiver fazendo.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FaFilePdf size={40} />
            </div>
            <h3>Análise de Documentos</h3>
            <p>
              Analise, interprete, resuma e avalie informações contidas em PDFs ou arquivos Word com facilidade incomparável.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FaLayerGroup size={40} />
            </div>
            <h3>Contextos</h3>
            <p>
              Crie contextos que expliquem de forma mais detalhada informações que podem ajudar o chat a te responder melhor, melhorando a qualidade das respostas.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FaStream size={40} />
            </div>
            <h3>Flows</h3>
            <p>
              Tenha um mentor especialista à sua disposição para aprender coisas novas, fazer brainstorming, escrever e-mails, fazer propostas e até mesmo programar.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FaFolder size={40} />
            </div>
            <h3>Organize Chats em Pastas</h3>
            <p>
              Mantenha suas conversas organizadas, categorize e gerencie seus chats de maneira eficiente em diferentes projetos ou equipes.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FaChartBar size={40} />
            </div>
            <h3>Análise de Dados</h3>
            <p>
              Transforme dados em insights visuais. Analise suas planilhas e crie gráficos automaticamente, facilitando a visualização e interpretação dos dados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;