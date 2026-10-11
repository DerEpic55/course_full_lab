import { router, publicProcedure } from "../_core/trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

/**
 * TODO:
 * Реализуйте getUserById.
 *
 * Необходимо:
 *
 * 1. Процедура принимает { id: string }
 * 2. Вызывает ctx.dataAccess.getUserById(id)
 * 3. Если пользователь найден — вернуть его
 * 4. Если пользователь не найден — выбросить:
 *    TRPCError({ code: "NOT_FOUND" })
 *
 * Валидация input обязательна.
 */
export const appRouter = router({
  getUserById: publicProcedure
    .input(
      z.object({
        id: z.string().min(1),
      })
    )
    .query(({ input, ctx }) => {
      const user = (ctx.dataAccess as any).getUserById(input.id);
      if(user !== null){
        return user;
      }
      throw new TRPCError({ code: "NOT_FOUND" });
    }),
});

export type AppRouter = typeof appRouter;