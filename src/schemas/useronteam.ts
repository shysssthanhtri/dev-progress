import * as z from "zod";

import {
  type CompleteTeam,
  type CompleteUser,
  RelatedTeamModel,
  RelatedUserModel,
} from "./index";

export const UserOnTeamModel = z.object({
  userId: z.string(),
  teamId: z.string(),
});

export interface CompleteUserOnTeam extends z.infer<typeof UserOnTeamModel> {
  user: CompleteUser;
  team: CompleteTeam;
}

/**
 * RelatedUserOnTeamModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserOnTeamModel: z.ZodSchema<CompleteUserOnTeam> = z.lazy(
  () =>
    UserOnTeamModel.extend({
      user: RelatedUserModel,
      team: RelatedTeamModel,
    }),
);
