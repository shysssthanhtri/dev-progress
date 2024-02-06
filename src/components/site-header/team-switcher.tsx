import { getServerSession } from "next-auth";
import React from "react";

import { CreateTeamButton } from "@/components/site-header/create-team-button";
import { api } from "@/trpc/server";

export const TeamSwitcher = async () => {
  const session = await getServerSession();
  if (!session?.user) return null;

  const teams = await api.team.getTeams.query();
  if (!teams.length) {
    return <CreateTeamButton />;
  }

  return <div>TeamSwitcher</div>;
};
