import Link from "next/link";
import React from "react";

import { Icons } from "@/components/icons";
import { TeamSwitcher } from "@/components/site-header/team-switcher";
import { appRoute } from "@/config/route";
import { siteConfig } from "@/config/site";

export const NavBar = () => {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href={appRoute.home} className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <TeamSwitcher />
    </div>
  );
};
