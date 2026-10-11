import { router, publicProcedure, middleware } from '../_core/trpc'

export const requestIdMiddleware = middleware(async (opts) => {
  // TODO:
  // 1. вызвать opts.next()
  //    передав расширенный ctx:
  //    {
  //      ...opts.ctx,
  //      requestId: 'req-123'
  //    }

  return opts.next({
    ctx: {
      ...opts.ctx,
      requestId: 'req-123'
    }
  })
})

export const appRouter = router({
  getInfo: publicProcedure
    .use(requestIdMiddleware)
    .query(({ ctx }) => {
      // TODO:
      // вернуть строку: `request:${ctx.requestId}`

      return `request:${ctx.requestId}`
    }),
})

export type AppRouter = typeof appRouter