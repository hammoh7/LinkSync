import { cn } from "@/lib/utils";
import { Lato } from "next/font/google";

const font = Lato({
  subsets: ["latin"],
  weight: ["700"],
});

interface HeaderProps {
  label: string;
}

export const HeaderAuth = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-5 items-center justify-center">
      <h1 className={cn("text-3xl font-bold text-green-600", font.className)}>
        LinkSync
      </h1>
      <p className="text-muted-foreground text-md">{label}</p>
    </div>
  );
};
