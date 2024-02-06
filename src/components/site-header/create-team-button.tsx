"use client";

import React from "react";

import { CreateTeamForm } from "@/components/site-header/create-team-form";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type CreateTeamButtonProps = ButtonProps;
export const CreateTeamButton = (props: CreateTeamButtonProps) => {
  const [isDialogShow, setIsDialogShow] = React.useState(false);
  return (
    <Dialog open={isDialogShow} onOpenChange={setIsDialogShow}>
      <DialogTrigger asChild>
        <Button {...props} variant="outline">
          Create new team
        </Button>
      </DialogTrigger>
      <DialogContent>
        <CreateTeamForm />
      </DialogContent>
    </Dialog>
  );
};
