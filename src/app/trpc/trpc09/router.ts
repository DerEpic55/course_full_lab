import { router, publicProcedure } from "../_core/trpc";
import { TRPCError } from "@trpc/server";

// TODO:
// 1. Создайте protectedProcedure
// 2. Добавьте query "me"
// 3. Возвращайте userId из context

const protectedProcedure = publicProcedure.use(({ ctx, next }) => {
    if (!ctx.user) {
        throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "User is not authorized",
        });
    }

    return next({
        ctx: {
            user: ctx.user,
        },
    });
});

export const appRouter = router({
    me: protectedProcedure
        .query(({ ctx }) => {
            return {
                userId: ctx.user.id
            };
        })
});