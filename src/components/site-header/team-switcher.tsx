import { getServerSession } from "next-auth";
import React from "react";

import { CreateTeamButton } from "@/components/site-header/create-team-button";
import { db } from "@/server/db";

export const TeamSwitcher = async () => {
  const session = await getServerSession();
  if (!session) return null;

  const teams = await db.team.findMany({
    where: {
      users: {
        some: {
          userId: session.user.id,
        },
      },
    },
  });

  if (!teams.length) {
    return <CreateTeamButton />;
  }

  return <div>TeamSwitcher</div>;
};
