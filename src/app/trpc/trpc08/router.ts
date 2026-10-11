import { router, publicProcedure } from "../_core/trpc";
import { TRPCError } from "@trpc/server";

// TODO:
// 1. Создайте middleware, проверяющее ctx.requestId
// 2. Если requestId отсутствует — выбросьте ошибку
// 3. Добавьте query-процедуру "info", использующую middleware

export const appRouter = router({
    info: publicProcedure
        .use(({ ctx, next }) => {
            if (!ctx.requestId) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: "requestId is missing",
                });
            }
            
            return next({
                ctx: {
                    requestId: ctx.requestId,
                },
            });
        })
        .query(({ ctx }) => {
            return {
                requestId: ctx.requestId
            };
        })
});