import { trpc } from '../client_core/trpc'

export const hooks = {
  user: {
    useUsers: () => trpc.user.getAll.useQuery(),
  },
  post: {
    usePosts: () => trpc.post.getAll.useQuery(),
  },
}