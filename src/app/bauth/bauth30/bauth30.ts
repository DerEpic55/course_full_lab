export type Environment = 'development' | 'production'

export type SecurityConfig = {
  cookie: {
    name: string
    httpOnly: boolean
    secure: boolean
    sameSite: 'lax' | 'strict'
  }
  expiresAt: number
}

export function createSessionSecurityConfig(
  env: Environment,
  ttlMs: number,
  clock: () => number
): SecurityConfig {
  const now = clock()

  return {
    cookie: {
      name: 'session',
      httpOnly: true, // TODO
      secure: env === 'production',   // TODO
      sameSite: env === 'development' ? 'strict' : 'lax', // TODO
    },
    expiresAt: clock() + ttlMs, // TODO
  }
}
