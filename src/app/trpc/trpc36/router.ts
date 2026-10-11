import { trpc } from '../client_core/trpc'

export function useCreateUserWithError() {
  // TODO: вызвать trpc.user.create.useMutation с onError
  return trpc.user.create.useMutation({
    onError: () => {
      console.error('error');
    }
  });
}