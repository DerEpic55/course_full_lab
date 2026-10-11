import { router, publicProcedure } from "../_core/trpc";
import { z } from "zod";

// TODO:
// 1. Создайте appRouter
// 2. Добавьте mutation "createUser"
// 3. Используйте ctx.dataAccess.createUser
// 4. Верните { id }

export const appRouter = router({
    createUser: publicProcedure.input(z.object({
        name: z.string().min(1)
    })).mutation(({ctx, input}) => {
        const id = (ctx.dataAccess as any).createUser(input.name); 
        return { id };
    }
    )
});