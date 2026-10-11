import { trpc } from '../client_core/trpc'

export function useCreateUserWithInvalidate() {
  // TODO:
  // 1. получить mutation
  // 2. получить utils
  // 3. вызвать invalidate
  // 4. вернуть mutation
  const utils = trpc.useUtils();

  const mutation = trpc.user.create.useMutation();
  utils.user.getAll.invalidate();

  return mutation;
}