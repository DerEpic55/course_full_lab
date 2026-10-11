import { router, publicProcedure } from "../_core/trpc";

// TODO:
// 1. Создайте appRouter
// 2. Добавьте query "getVersion"
// 3. Используйте ctx.dataAccess.getVersion()
// 4. Верните { version }

export const appRouter = router({
    getVersion: publicProcedure.query(
        ({ctx}) => {
            const version = (ctx.dataAccess as any).getVersion();
            return { version };
        })
});