export class UnauthorizedError extends Error {}
export class ForbiddenError extends Error {}

export type Role = 'USER' | 'ADMIN'

export type User = {
  id: string
  role: Role
}

export function uiOnlyDelete(
  user: User | null,
  deleteFromDb: () => string
): string {
  // ❗ Анти-паттерн:
  // Предполагается, что проверка роли уже выполнена в UI
  if (!user) {
    throw new UnauthorizedError();
  }

  if (user.role !== 'ADMIN') {
    throw new ForbiddenError();
  }
  
  return deleteFromDb() // TODO: реализовать корректную server-side проверку
}
