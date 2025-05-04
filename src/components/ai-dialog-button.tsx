import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const AIDialogButton = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      onClick={() => setOpen((prev) => !prev)}
      variant="outline"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "flex items-center gap-2 border border-indigo-500 w-fit relative",
        "transition-all duration-300",
        "bg-opacity-50 hover:bg-opacity-100",
        "animate-float"
      )}
    >
      <Sparkles
        className={cn(
          "w-4 h-4 text-indigo-500",
          "transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-70"
        )}
      />
      <span
        className={cn(
          "text-indigo-500",
          "transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-70"
        )}
      >
        AI
      </span>
    </Button>
  );
};

export default AIDialogButton;
