import * as z from "zod";

import { type CompleteUser, RelatedUserModel } from "./index";

export const PostModel = z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdById: z.string(),
});

export interface CompletePost extends z.infer<typeof PostModel> {
  createdBy: CompleteUser;
}

/**
 * RelatedPostModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPostModel: z.ZodSchema<CompletePost> = z.lazy(() =>
  PostModel.extend({
    createdBy: RelatedUserModel,
  }),
);
