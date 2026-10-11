import { router, publicProcedure } from "../_core/trpc";

// TODO:
// 1. Создайте appRouter
// 2. Добавьте query-процедуру "info"
// 3. Процедура должна возвращать requestId из context

export const appRouter = router({
    info: publicProcedure
    .query(
        ({ctx}) => {
            return{
                requestId: ctx.requestId
            }
        }
    )
});