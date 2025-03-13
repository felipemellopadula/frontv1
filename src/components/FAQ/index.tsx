import styles from './FAQ.module.scss';
import { useState } from 'react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Estado para rastrear a pergunta aberta

  const faqs = [
    {
      question: 'Quanto tempo dura a assinatura Sinapse?',
      answer:
        'A assinatura Sinapse Silver tem duração de 12 meses, sendo cobrada anualmente ou valor de R$1.188 no plano anual. Já o plano Sinapse Gold tem duração de 2 anos com pagamento único.',
    },
    {
      question: 'O acesso à Sinapse Hub também é por 12 meses?',
      answer: 'A assinatura dá direito a atualizações gratuitas?',
    },
    {
      question: 'Como funciona o pagamento? Posso parcelar?',
      answer: 'Existe garantia de satisfação?',
    },
    {
      question: 'Existe garantia de satisfação?',
      answer: 'Sim, oferecemos uma garantia de 30 dias.',
    },
  ];

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <h2>Ficou alguma dúvida?</h2>
        <div className={styles.faqCards}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqCard} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className={styles.question}>
                <h3>{faq.question}</h3>
                <i className={`fas fa-chevron-down ${styles.arrow}`}></i>
              </div>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;