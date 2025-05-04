import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";

const AIDialogButton = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return <Button onClick={() => setOpen((prev) => !prev)}></Button>;
};
