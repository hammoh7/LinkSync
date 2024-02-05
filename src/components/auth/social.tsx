"use client";

import { GitHub, Google } from "@mui/icons-material";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_REDIRECT } from "@/routes";

export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_REDIRECT,
    })
  }
  return (
    <div className="flex items-center w-full gap-x-3">
      <Button size="sm" variant="outline" onClick={() => onClick("google")} className="w-full">
        <Google className="h-5 w-5" />
      </Button>
      <Button size="sm" variant="outline" onClick={() => onClick("github")} className="w-full">
        <GitHub className="h-5 w-5" />
      </Button>
    </div>
  );
};
