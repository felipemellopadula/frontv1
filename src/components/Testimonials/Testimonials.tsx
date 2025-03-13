import styles from './Testimonials.module.scss';

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2>O que nossos usuários estão dizendo</h2>
        <div className={styles.testimonialCards}>
          <div className={styles.testimonialCard}>
            <p>
              A Sinapse AI transformou completamente meu fluxo de trabalho. O Core é incrível, preciso em escolher o modelo mais adequado para cada tarefa.
            </p>
            <div className={styles.author}>
              <span className={styles.authorName}>Carlos Mendes</span>
              <span className={styles.authorTitle}>Diretor de Inovação</span>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <p>
              A análise de documentos salvou horas do nosso tempo. Conseguimos processar contratos inteiros em minutos com insights que antes levariam dias.
            </p>
            <div className={styles.author}>
              <span className={styles.authorName}>Ana Oliveira</span>
              <span className={styles.authorTitle}>Gerente Jurídica</span>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <p>
              A organização em pastas e os Flows me ajudaram a estruturar projetos complexos. Uma ferramenta indispensável para qualquer gestor.
            </p>
            <div className={styles.author}>
              <span className={styles.authorName}>Rafael Torres</span>
              <span className={styles.authorTitle}>Gerente de Projetos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;