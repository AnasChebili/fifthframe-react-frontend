import { useState, Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Sparkles, Bot } from "lucide-react";

export const AIDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [query, setQuery] = useState("");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="text-white translate-y-0 top-2 sm:max-w-md dark">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Bot className="w-6 h-6 text-indigo-500" />
            <span>AI Movie Assistant</span>
            <Sparkles className="w-4 h-4 text-indigo-500" />
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="p-3 border border-indigo-100 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 dark:border-indigo-800">
            <p className="text-sm">
              Describe what you're looking, and I'll recommend the perfect films
              for you.
            </p>
          </div>

          <Textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., I want a heartwarming comedy with strong female characters"
            className="min-h-[100px]"
          />

          <Button className="flex items-center justify-center w-full gap-2 bg-indigo-600 hover:bg-indigo-700">
            <Sparkles className="w-4 h-4" />
            Get AI Recommendations
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
