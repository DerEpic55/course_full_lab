"use client";

import { useActionState } from "react";
import { createInvoiceAction, type InvoiceState  } from "./actions";

const initialState: InvoiceState = {
  success: false,
  message: "",
  errors: {},
};

export default function Page() {
const [state, formAction] = useActionState(createInvoiceAction, initialState);

  return (
    <div className="p-8">
      <h1>Создание инвойса</h1>
      {state.success && state.message && (
        <div data-testid="success-message">
          {state.message}
        </div>
      )}
      <form action={formAction}>
        <div>
          <label htmlFor="customer_id">
            Клиент
          </label>
          <select
            id="customer_id"
            name="customer_id"
            className="mt-1 block w-full border rounded p-2"
          >
            <option value="">Выберите клиента</option>
            <option value="customer_1">Alice Johnson</option>
            <option value="customer_2">Bob Smith</option>
            <option value="customer_3">Carol White</option>
          </select>
           {state.errors?.customer_id && (
            <div data-testid="error-customer_id">
              {state.errors.customer_id.join(", ")}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium">
            Сумма ($)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="mt-1 block w-full border rounded p-2"
          />
          {state.errors?.amount && (
            <div data-testid="error-amount">
              {state.errors.amount.join(", ")}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium">
            Статус
          </label>
          <select
            id="status"
            name="status"
            className="mt-1 block w-full border rounded p-2"
          >
            <option value="">Выберите статус</option>
            <option value="pending">pending</option>
            <option value="paid">paid</option>
            <option value="void">void</option>
          </select>
          {state.errors?.status && (
            <div data-testid="error-status">
              {state.errors.status.join(", ")}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Создать
        </button>
      </form>
    </div>
  );
}