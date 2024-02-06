import React from "react";

import { ModeToggle } from "@/components/site-header/mode-toggle";
import { NavBar } from "@/components/site-header/nav-bar";
import { NavBarMobile } from "@/components/site-header/nav-bar-mobile";
import { UserButton } from "@/components/site-header/user-button";

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <NavBar />
        <NavBarMobile />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </header>
  );
};
