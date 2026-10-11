import { router, publicProcedure } from "../_core/trpc";
import { TRPCError } from "@trpc/server";

// TODO:
// 1. Создайте protectedProcedure
// 2. Создайте userRouter
// 3. Создайте systemRouter
// 4. Объедините их в appRouter
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

const userRouter = router({
    me: protectedProcedure.query(({ ctx }) => {
        return {
            userId: ctx.user.id
        };
    })
});

const systemRouter = router({
    ping: publicProcedure.query(() => {
        return {
            status: "ok" as const
        };
    })
});

export const appRouter = router({
    user: userRouter,
    system: systemRouter
});

export default appRouter;