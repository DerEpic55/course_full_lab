export class CsrfError extends Error {}

export function validateCsrf(
  sessionToken: string | null,
  requestToken: string | null
): true {
  if (!sessionToken || !requestToken) {
    throw new CsrfError();
  }
  if (sessionToken !== requestToken) {
    throw new CsrfError();
  }
  return true
}
