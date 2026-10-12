export type Session = {
  userId: string
  expiresAt: number
}

export function createSession(
  userId: string,
  ttlMs: number,
  clock: () => number
): Session {
  const now = clock()
  const expiration = now + ttlMs;
  return {
    userId,
    expiresAt: expiration, // TODO: вычислить корректное абсолютное expiration
  }
}
