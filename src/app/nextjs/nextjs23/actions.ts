'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createInvoiceData } from "./data";

export async function createInvoice(prevState: any, formData: FormData) {
  const customer_id = formData.get("customer_id") as string;
  const amount = Number(formData.get("amount"));
  const status = formData.get("status") as "pending" | "paid" | "void";

  let isSuccessful = false;

  try {
    createInvoiceData({ customer_id, amount, status });
    
    revalidatePath("http://localhost:3000/nextjs/nextjs23");
    isSuccessful = true;
  } catch (error: any) {
    return { 
      error: error?.message || "Не удалось создать инвойс. Попробуйте снова." 
    };
  }

  if (isSuccessful) {
    redirect("http://localhost:3000/nextjs/nextjs23");
  }
}