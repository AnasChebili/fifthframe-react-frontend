import { Dispatch, SetStateAction } from "react";
import { Dialog } from "./ui/dialog";

export const AIDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  <Dialog open={open} onOpenChange={setOpen}></Dialog>;
};
