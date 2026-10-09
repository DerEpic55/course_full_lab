import { router, publicProcedure } from "../_core/trpc";
import { z } from "zod";

// TODO:
// 1. Создайте appRouter
// 2. Добавьте процедуру greet
// 3. name не должен быть пустой строкой

export const appRouter = router({
    greet: publicProcedure.input(
        z.object({
            name: z.string().min(1)
        })
    ).query(({ input }) => ({
        message: `Hello, ${input.name}`
    }))
});