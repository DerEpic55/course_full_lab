export class UnauthorizedError extends Error {}

export type User = {
  id: string
  email: string
}

export type Context = {
  user: User | null
}

export function currentUserQuery(ctx: Context): User {
  // TODO: реализовать корректную проверку
  if (!ctx.user) {
    throw new UnauthorizedError();
  }
  return ctx.user as User
}
