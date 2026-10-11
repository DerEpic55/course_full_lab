import { router, publicProcedure } from "../_core/trpc";
import { z } from "zod";

// TODO:
// 1. Создайте appRouter
// 2. Добавьте mutation "deleteUser"
// 3. Используйте ctx.dataAccess.deleteUser
// 4. Верните { success }

export const appRouter = router({
    deleteUser: publicProcedure.input(z.object({
        id: z.string().min(1),
    })).query(async ({ctx, input}) => {
        const user = await (ctx.dataAccess as any).deleteUser(input.id); 
        return { success: user};
    }
    )
});