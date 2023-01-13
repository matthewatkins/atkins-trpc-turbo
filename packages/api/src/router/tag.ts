import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
  adminProcedure
} from "../trpc";
import { z } from "zod";

export const tagRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.tag.findMany();
  }),
  byId: publicProcedure
    .input(z.string())
    .query(({ ctx, input }) => {
      return ctx.prisma.tag.findFirst({
        where: { id: input },
        select: {
          url: true,
          tagId: true,
          status: true,
          pet: true
        }
      });
    }),
  create: adminProcedure
    .input(z.object({
      url: z.string(),
      tagId: z.string()
    }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.tag.create({ data: input });
    })
});