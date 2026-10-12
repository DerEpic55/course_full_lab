export function handleAccessError(error: unknown): string {
  // TODO: реализовать различие типов ошибок
  if (error instanceof Error) {
    if (error.name === 'UnauthorizedError') {
      return 'redirect:/login';
    }
    if (error.name === 'ForbiddenError') {
      return 'show:forbidden';
    }
  } 
  return 'show:generic-error'
}
