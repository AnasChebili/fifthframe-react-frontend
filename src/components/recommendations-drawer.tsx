import { Dispatch, SetStateAction } from "react";
import { Drawer, DrawerContent } from "./ui/drawer";
import { TrendingContainer } from "./trending-container";

export const RecommendationsDrawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="h-1/2 dark">
        <TrendingContainer />
      </DrawerContent>
    </Drawer>
  );
};
