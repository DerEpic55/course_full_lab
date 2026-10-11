import { trpc } from '../client_core/trpc'

export function useUserModule() {
  // TODO:
  // 1. вызвать useQuery
  // 2. вызвать useMutation
  // 3. получить utils
  // 4. вызвать invalidate
  // 5. вернуть объект
  const users = trpc.user.getAll.useQuery();
  const createUser = trpc.user.create.useMutation();
  const utils = trpc.useUtils();
  utils.user.getAll.invalidate();
  return {users, createUser};
  
}