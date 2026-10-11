import { router, publicProcedure } from "../_core/trpc";
import { z } from "zod";

// TODO:
// 1. Создайте appRouter
// 2. Добавьте query "getUserById"
// 3. Используйте ctx.dataAccess.getUserById
// 4. Верните результат без изменений

export const appRouter = router({
    getUserById: publicProcedure.input(z.object({
        id: z.string().min(1)
    })).query(async ({ctx, input}) => {
        const user = await (ctx.dataAccess as any).getUserById(input.id); 
        return user;
    }
    )
});