import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '../../schemas/contactSchema';
import styles from './ContactForm.module.scss';

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Formulário enviado:', data);
    alert('Mensagem enviada com sucesso!');
    reset();
  };

  return (
    <section className={styles.contact} id="contato">
      <div className={styles.container}>
        <h2>Entre em Contato</h2>
        <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <input id="name" {...register('name')} />
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" {...register('email')} />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="company">Empresa</label>
            <input id="company" {...register('company')} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" {...register('message')} />
            {errors.message && <p className={styles.error}>{errors.message.message}</p>}
          </div>
          <button type="submit" className={styles.btnPrimary}>Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;