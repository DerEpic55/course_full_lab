export type Role = "USER" | "ADMIN";

export type User = {
  id: string;
  email: string;
  role: Role;
};

export type Context = {
  user: User | null;
};

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

async function ownershipCheck<T>(
  currentUserId: string,
  targetUserId: string,
  operation: () => Promise<T>
): Promise<T> {
  // TODO: реализовать ownership
    if (!currentUserId) {
    throw new UnauthorizedError();
  }

  if (currentUserId !== targetUserId) {
    throw new ForbiddenError();
  }

  return operation();
}

export async function updateUser<T>(
  ctx: Context,
  targetUserId: string,
  operation: () => Promise<T>
): Promise<T> {
  // TODO: реализовать полный защищённый flow
  if (!ctx.user) {
    throw new UnauthorizedError();
  }

  if (ctx.user.role !== "ADMIN") {
    throw new ForbiddenError();
  }
  if (ctx.user.id !== targetUserId) {
    throw new ForbiddenError();
  }

  return operation();
}
