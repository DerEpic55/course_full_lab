export class UnauthorizedError extends Error {}

export type Session = {
  id: string
}

export type User = {
  id: string
}

export function routeGuard(session: Session | null): true {
  if (!session) {
    throw new UnauthorizedError();
  }
  return true
}

export function procedureGuard(user: User | null): true {
  // TODO: реализовать проверку
  if (!user) {
    throw new UnauthorizedError();
  }
  return true
}
