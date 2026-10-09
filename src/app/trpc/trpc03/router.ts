import { router, publicProcedure } from "../_core/trpc";

// TODO:
// 1. Создайте appRouter
// 2. Добавьте query-процедуру "hello"
// 3. Процедура должна возвращать объект { message: "hello" }
export const appRouter = router({
    hello: publicProcedure.query(() => ({
        message: 'hello'
    }))
});