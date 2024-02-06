import { z } from "zod";

import { TeamModel } from "@/schemas";

export const TeamEntity = z.object(TeamModel.shape).extend({
  name: z.string().min(5).max(20),
});
