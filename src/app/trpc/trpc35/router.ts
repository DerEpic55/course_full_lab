import { trpc } from '../client_core/trpc'

export function useCreateUserWithSuccess() {
  // TODO: вызвать trpc.user.create.useMutation с onSuccess
  return trpc.user.create.useMutation({
    onSuccess: () => {
      console.log('success')
    }
  });
}