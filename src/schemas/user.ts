import * as z from "zod";

import {
  type CompleteAccount,
  type CompletePost,
  type CompleteSession,
  type CompleteUserOnTeam,
  RelatedAccountModel,
  RelatedPostModel,
  RelatedSessionModel,
  RelatedUserOnTeamModel,
} from "./index";

export const UserModel = z.object({
  id: z.string(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
});

export interface CompleteUser extends z.infer<typeof UserModel> {
  accounts: CompleteAccount[];
  sessions: CompleteSession[];
  posts: CompletePost[];
  teams: CompleteUserOnTeam[];
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() =>
  UserModel.extend({
    accounts: RelatedAccountModel.array(),
    sessions: RelatedSessionModel.array(),
    posts: RelatedPostModel.array(),
    teams: RelatedUserOnTeamModel.array(),
  }),
);
