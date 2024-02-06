import { TeamEntity } from "@/domain/entities/team";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const teamRouter = createTRPCRouter({
  getTeams: protectedProcedure.query(({ ctx }) => {
    return ctx.db.team.findMany({
      where: {
        users: {
          some: {
            userId: ctx.session.user.id,
          },
        },
      },
    });
  }),
  createTeam: protectedProcedure
    .input(TeamEntity.pick({ name: true }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.team.create({
        data: {
          ...input,
          users: {
            create: [
              {
                userId: ctx.session.user.id,
              },
            ],
          },
        },
      });
    }),
});
