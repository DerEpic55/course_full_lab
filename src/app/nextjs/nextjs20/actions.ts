'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { addInvoice } from './data'; 

const InvoiceSchema = z.object({
  customerId: z.string({
    invalid_type_error: 'Пожалуйста, выберите клиента.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Сумма должна быть больше $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Пожалуйста, выберите статус инвойса.',
  }),
});

export async function createInvoice(formData: FormData) {
  // Читаем данные из формы по ключам с нижним подчеркиванием
  const validatedFields = InvoiceSchema.safeParse({
    customerId: formData.get('customer_id') || formData.get('customerId'), // проверяем оба варианта ради надежности
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    // Распечатает точную ошибку Zod в терминал VS Code (черное окно снизу)
    console.log("ДЕТАЛИ ОШИБКИ ZOD:", JSON.stringify(validatedFields.error.flatten(), null, 2));
    throw new Error('Ошибка валидации полей формы');
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  await addInvoice({
    customer_id: customerId,
    amount: amountInCents,
    status: status as "pending" | "paid" | "void",
    date: new Date().toISOString().slice(0, 10),
  });
  revalidatePath('http://localhost:3000/nextjs/nextjs20');
  
  redirect('http://localhost:3000/nextjs/nextjs20');

}