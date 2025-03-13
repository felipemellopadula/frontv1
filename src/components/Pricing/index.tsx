import styles from './Pricing.module.scss';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa'; // Importa o ícone de check

const Pricing: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null); // Estado para rastrear o card clicado (índice)

  const handleCardClick = (index: number) => {
    setSelectedCard(selectedCard === index ? null : index); // Alterna o estado do card clicado
  };

  return (
    <section className={styles.pricing} id="precos">
      <div className={styles.container}>
        <h2>Nossos Planos</h2>
        <div className={styles.planCards}>
          <div
            className={`${styles.planCard} ${selectedCard === 0 ? styles.selected : ''}`}
            onClick={() => handleCardClick(0)}
          >
            <h3>Sinapse Gold</h3>
            <ul className={styles.benefits}>
              <li>
                <FaCheck className={styles.checkIcon} /> Acesso de 2 anos à plataforma Sinapse Hub
              </li>
              <li>
                <FaCheck className={styles.checkIcon} /> GPT4.5, Claude, Gemini e Llama
              </li>
              <li>
                <FaCheck className={styles.checkIcon} /> Newsletter semanal
              </li>
              <li>
                <FaCheck className={styles.checkIcon} /> Chats e mensagens ilimitadas
              </li>
              <li>
                <FaCheck className={styles.checkIcon} /> Suporte prioritário
              </li>
              <li>
                <FaCheck className={styles.checkIcon} /> Acesso antecipado a novas ferramentas
              </li>
            </ul>
            <h4>R$ 1.920 à vista*</h4>
            <p className={styles.priceNote}>a cada 2 anos</p>
            <button className={styles.ctaButton}>Adquirir Agora</button>
          </div>
          <div
            className={`${styles.planCard} ${styles.popular} ${selectedCard !== null && selectedCard !== 1 ? styles.notSelected : ''} ${selectedCard === 1 ? styles.selected : ''}`}
            onClick={() => handleCardClick(1)}
          >
            <h3>Sinapse Silver</h3>
            <span className={styles.popularBadge}>Mais Popular</span>
            <ul className={styles.benefits}>
              <li>
                <FaCheck className={styles.checkIcon} /> Acesso no plano anual* à plataforma Sinapse Hub
              </li>
              <li>
                <FaCheck className={styles.checkIcon} /> GPT4.5, Claude, Gemini e Llama
              </li>
              <li>
                <FaCheck className={styles.checkIcon} /> Newsletter semanal
              </li>
              <li>
                <FaCheck className={styles.checkIcon} /> Chats e mensagens ilimitadas
              </li>
              <li>
                <FaCheck className={styles.checkIcon} /> Suporte prioritário
              </li>
              <li>
                <FaCheck className={styles.checkIcon} /> Acesso antecipado a novas ferramentas
              </li>
            </ul>
            <h4>R$ 1.188 /Ano*</h4>
            <p className={styles.priceNote}>no Plano Anual</p>
            <button className={styles.ctaButton}>Adquirir Agora</button>
          </div>
          <div
            className={`${styles.planCard} ${selectedCard === 2 ? styles.selected : ''}`}
            onClick={() => handleCardClick(2)}
          >
            <h3>Sinapse Business</h3>
            <ul className={styles.benefits}>
              <li>
                <FaCheck className={styles.checkIcon} /> Soluções sob demanda para empresas
              </li>
              <li>
                <FaCheck className={styles.checkIcon} /> Integrações personalizadas
              </li>
              <li>
                <FaCheck className={styles.checkIcon} /> Treinamento para equipes
              </li>
              <li>
                <FaCheck className={styles.checkIcon} /> Suporte dedicado
              </li>
              <li>
                <FaCheck className={styles.checkIcon} /> SLA garantido
              </li>
              <li>
                <FaCheck className={styles.checkIcon} /> Segurança empresarial avançada
              </li>
            </ul>
            <h4>Sob demanda</h4>
            <p className={styles.priceNote}></p>
            <button className={styles.ctaButton}>Saber Mais</button>
          </div>
        </div>
        <div className={styles.guaranteeCard}>
          <h3>Garantia</h3>
          <h4>Teste a Sinapse AI por 7 Dias Sem Compromisso</h4>
          <p>
            Se você não ficar feliz ao se tornar participante do nosso ecossistema, nós também não ficaremos. Por isso,
            caso você não fique satisfeito, você pode solicitar reembolso integral em até 30 dias após a compra.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;