import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const userRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.user.findFirst({ where: { id: input } });
  }),
  // create: publicProcedure
  //   .input(z.object({ title: z.string(), content: z.string() }))
  //   .mutation(({ ctx, input }) => {
  //     return ctx.prisma.user.create({ data: input });
  //   }),
});
