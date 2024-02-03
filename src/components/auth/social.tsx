"use client";

import { GitHub, Google } from "@mui/icons-material";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-3">
      <Button size="sm" variant="outline" onClick={() => {}} className="w-full">
        <Google className="h-5 w-5" />
      </Button>
      <Button size="sm" variant="outline" onClick={() => {}} className="w-full">
        <GitHub className="h-5 w-5" />
      </Button>
    </div>
  );
};
