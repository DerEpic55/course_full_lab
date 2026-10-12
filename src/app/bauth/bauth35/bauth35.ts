export async function executeProtectedMutation(
  mutation: () => Promise<string>
): Promise<string> {
  // TODO: реализовать корректную обработку ошибок
  try {
    return await mutation()
  } catch (e) {
    if (e instanceof Error && e.name === 'UnauthorizedError') {
      return 'redirect:/login';
    }
    throw e;
  }
}
