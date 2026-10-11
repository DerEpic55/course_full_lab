import { router, publicProcedure, middleware } from '../_core/trpc'

export const timingMiddleware = middleware(async ({ ctx, next }) => {
  // TODO:
  // 1. Зафиксировать start time
  // 2. Выполнить next()
  // 3. Вычислить duration
  // 4. Вызвать ctx.logger?.info(...)
  // 5. Вернуть result
  const start = Date.now();
  const result = await next();
  const duration = Date.now() - start;
  (ctx as any).logger?.info(`${duration}ms`);

  return result;
})

export const appRouter = router({
  ping: publicProcedure
    .use(timingMiddleware)
    .query(() => {
      return 'pong'
    }),
})

export type AppRouter = typeof appRouter