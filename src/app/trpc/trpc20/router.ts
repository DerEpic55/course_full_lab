import { router, publicProcedure } from "../_core/trpc";

/**
 * TODO:
 * Реализуйте query "health".
 *
 * Необходимо:
 * 1. Вызвать ctx.dataAccess.getVersion()
 * 2. Вернуть:
 *    { status: "ok", version }
 */
export const appRouter = router({
  health: publicProcedure.query(async ({ ctx }) => {
    const hlth = await (ctx.dataAccess as any).getVersion();
    const version = typeof hlth === 'string' ? hlth : (hlth?.id ?? hlth?._id);
    return {status: "ok", version};
  }),
});

export type AppRouter = typeof appRouter;