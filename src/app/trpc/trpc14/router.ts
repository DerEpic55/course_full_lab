import { router, publicProcedure } from "../_core/trpc";
import { z } from "zod";

// TODO:
// 1. Создайте appRouter
// 2. Добавьте mutation "updateUser"
// 3. Используйте ctx.dataAccess.updateUser
// 4. Верните { success }


export const appRouter = router({
    updateUser: publicProcedure.input(z.object({
        id: z.string().min(1),
        name: z.string()
    })).query(async ({ctx, input}) => {
        const user = await (ctx.dataAccess as any).updateUser(input.id, input.name); 
        return { success: user};
    }
    )
});