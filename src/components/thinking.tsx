import { Loader2 } from "lucide-react";

export const Thinking = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4 text-center rounded-lg ">
      <div className="relative">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
        <div className="absolute -top-1 -right-1">
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
        </div>
      </div>
      <div className="space-y-1">
        <p className="font-medium text-indigo-700 dark:text-indigo-300">
          Thinking...
        </p>
      </div>
    </div>
  );
};
