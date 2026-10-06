import { customers, statuses } from "./data";
import { createInvoiceAction } from "./actions";

export default function Page() {
  return (
    <div>
      <h1>Создание инвойса</h1>
      
      <form action={createInvoiceAction}>
        
        <div>
          <label htmlFor="customer_id">
            Клиент
          </label>
          <select
            id="customer_id"
            name="customer_id"
            data-testid="customer_id"
            required
          >
            <option value="">Выберите клиента</option>
            {customers.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="amount">
            Сумма ($)
          </label>
          <input
            id="amount"
            name="amount"
            type="number"
            step="0.01"
            min="0.01"
            data-testid="amount"
            required
            placeholder="0.00"
          />
        </div>

        <div>
          <label htmlFor="status">
            Статус
          </label>
          <select
            id="status"
            name="status"
            data-testid="status"
            required
          >
            <option value="">Выберите статус</option>
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <button 
          type="submit"
        >
          Создать
        </button>
      </form>
    </div>
  );
}