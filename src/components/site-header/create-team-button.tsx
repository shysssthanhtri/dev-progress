"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
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
import { api as clientApi } from "@/trpc/react";

type CreateTeamButtonProps = ButtonProps;
export const CreateTeamButton = (buttonProps: CreateTeamButtonProps) => {
  const router = useRouter();
  const [isDialogShow, setIsDialogShow] = React.useState(false);

  const form = useForm<CreateTeamForm>({
    resolver: zodResolver(createTeamForm),
    defaultValues: { name: "" },
  });

  const createTeam = clientApi.team.createTeam.useMutation({
    onSuccess: () => {
      router.refresh();
      setIsDialogShow(false);
      form.reset();
    },
  });
  const onSubmit = async (data: CreateTeamForm) => {
    createTeam.mutate(data);
  };

  return (
    <Dialog open={isDialogShow} onOpenChange={setIsDialogShow}>
      <DialogTrigger asChild>
        <Button {...buttonProps} variant="outline">
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
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your team name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={createTeam.isLoading}>
                {createTeam.isLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Create team
              </Button>
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
