import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  company: z.string().optional(),
  message: z.string().min(1, 'Mensagem é obrigatória'),
});

export type ContactFormData = z.infer<typeof contactSchema>;