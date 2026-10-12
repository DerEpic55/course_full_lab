export type Session = {
  userId: string
  expiresAt: number
}

export function refreshSession(
  session: Session,
  ttlMs: number,
  clock: () => number
): Session {
  const now = clock();
  const expiration = now + ttlMs;
  return {
    ...session,
    expiresAt: expiration, // TODO: реализовать sliding expiration
  }
}
