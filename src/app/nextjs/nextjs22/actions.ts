'use server';

import { revalidatePath } from "next/cache";
// Импортируем сам массив invoices И функцию getInvoices ради надежности
import { invoices, getInvoices } from "./data"; 

export async function deleteInvoice({ id }: { id: string }) {
  // 1. Пробуем удалить элемент напрямую из живого массива
  const index = invoices.findIndex((invoice) => invoice.id === id);
  
  if (index !== -1) {
    invoices.splice(index, 1);
    console.log(`Инвойс #${id} успешно удален из массива. Осталось:`, invoices.length);
  } else {
    // На всякий случай проверяем, может быть массив лежит в getInvoices()
    const list = getInvoices();
    const idx = list.findIndex((invoice) => invoice.id === id);
    if (idx !== -1) {
      list.splice(idx, 1);
    }
  }

  // 2. Вызываем revalidatePath для обновления UI (полный путь к странице)
  revalidatePath("/nextjs/nextjs22");
}