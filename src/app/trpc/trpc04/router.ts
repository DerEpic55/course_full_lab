import { router, publicProcedure } from "../_core/trpc";
import { z } from "zod";

// TODO:
// 1. Создайте appRouter
// 2. Добавьте query-процедуру "greet"
// 3. Процедура должна принимать input { name: string }
// 4. Процедура должна возвращать { message: "Hello, <name>" }
export const appRouter = router({
    greet: publicProcedure.input(
        z.object({
            name: z.string()
        })
    ).query(({ input }) => ({
        message: `Hello, ${input.name}`
    }))
});