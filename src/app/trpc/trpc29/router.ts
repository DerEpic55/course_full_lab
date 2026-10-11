import { router, publicProcedure, middleware } from '../_core/trpc'

export const prefixMiddleware = middleware(async (opts) => {
  // TODO:
  // 1. выполнить opts.next()
  // 2. изменить result.data → "prefix-" + result.data
  // 3. вернуть result

  const result = await opts.next();

  if (result.ok) {
    (result as any).data = "prefix-" + (result as any).data;
  }

  return result;
})

export const suffixMiddleware = middleware(async (opts) => {
  // TODO:
  // 1. выполнить opts.next()
  // 2. изменить result.data → result.data + "-suffix"
  // 3. вернуть result

    const result = await opts.next();

  if (result.ok) {
    (result as any).data = (result as any).data + "-suffix";
  }

  return result;
})

export const appRouter = router({
  getValue: publicProcedure
    .use(prefixMiddleware)
    .use(suffixMiddleware)
    .query(() => {
      return 'value'
    }),
})

export type AppRouter = typeof appRouter