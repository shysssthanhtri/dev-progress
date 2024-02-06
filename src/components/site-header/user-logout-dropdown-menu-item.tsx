"use client";

import { signOut } from "next-auth/react";
import React from "react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export const UserLogoutDropdownMenuItem = () => {
  return <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>;
};
