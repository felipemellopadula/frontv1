import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1>Confiado diariamente por dezenas de milhares de profissionais em mais de 4.500 cargos diferentes</h1>
          <h2>Tudo o que você precisa de IA, em um só lugar</h2>
          <a href="#plataforma" className={styles.btnPrimary}>Explorar Soluções</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;