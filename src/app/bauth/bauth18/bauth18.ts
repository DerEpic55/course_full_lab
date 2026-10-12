export class UnauthorizedError extends Error {
  constructor() {
    super("UNAUTHORIZED");
  }
}

export class ForbiddenError extends Error {
  constructor() {
    super("FORBIDDEN");
  }
}

export function checkAccess(
  userId: string | null,
  hasPermission: boolean
): true {
  // TODO: реализовать корректную семантику ошибок
  if (!userId) {
      throw new UnauthorizedError();
  }
  if (hasPermission === false) {
      throw new ForbiddenError();
  }
  return true;
}
