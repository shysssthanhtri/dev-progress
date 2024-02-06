"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { type z } from "zod";

import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TeamEntity } from "@/domain/entities/team";

type CreateTeamButtonProps = ButtonProps;
export const CreateTeamButton = (props: CreateTeamButtonProps) => {
  const [isDialogShow, setIsDialogShow] = React.useState(false);

  const form = useForm<CreateTeamForm>({
    resolver: zodResolver(createTeamForm),
    defaultValues: { name: "" },
  });

  const onSubmit = (data: CreateTeamForm) => {
    console.log({ data });
  };

  return (
    <Dialog open={isDialogShow} onOpenChange={setIsDialogShow}>
      <DialogTrigger asChild>
        <Button {...props} variant="outline">
          Create new team
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new team</DialogTitle>
          <DialogDescription>
            Create a new team to start track developers&apos; progress
          </DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your team name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Create team</Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const createTeamForm = TeamEntity.pick({
  name: true,
});
type CreateTeamForm = z.infer<typeof createTeamForm>;
