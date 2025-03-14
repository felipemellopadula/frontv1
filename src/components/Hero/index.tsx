import styles from './Hero.module.scss';


const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="home">

      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1>Confiado diariamente por milhares de profissionais no mundo todo! A revolução só está começando.</h1>
          <h2>Soluções em IA, em um só lugar</h2>
          <a href="#plataforma" className={styles.btnPrimary}>Explorar Soluções</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;