import { createTRPCRouter } from "./trpc";
import { tagRouter } from "./router/tag";
import { authRouter } from "./router/auth";
import { userRouter } from "./router/user";

export const appRouter = createTRPCRouter({
  tag: tagRouter,
  user: userRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
