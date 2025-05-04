import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

const AIDialogButton = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Button
      onClick={() => setOpen((prev) => !prev)}
      variant="outline"
      className="relative flex items-center gap-2 text-indigo-500 transition-all duration-300 border border-indigo-500 opacity-50 w-fit hover:opacity-100 hover:text-indigo-500 animate-float"
    >
      <Sparkles className="w-4 h-4" />
      <span>AI</span>
    </Button>
  );
};

export default AIDialogButton;
