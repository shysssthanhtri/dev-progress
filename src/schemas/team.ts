import * as z from "zod";

import { type CompleteUserOnTeam, RelatedUserOnTeamModel } from "./index";

export const TeamModel = z.object({
  id: z.string(),
  name: z.string().nullish(),
});

export interface CompleteTeam extends z.infer<typeof TeamModel> {
  users: CompleteUserOnTeam[];
}

/**
 * RelatedTeamModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTeamModel: z.ZodSchema<CompleteTeam> = z.lazy(() =>
  TeamModel.extend({
    users: RelatedUserOnTeamModel.array(),
  }),
);
