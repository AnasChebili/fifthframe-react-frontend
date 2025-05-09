import { Dispatch, SetStateAction } from "react";
import { Drawer, DrawerContent } from "./ui/drawer";
import { Thinking } from "./thinking";
import { RecommendationsContainer } from "./recommendations-container";

export const RecommendationsDrawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className=" dark">
        <section className="p-4">
          <h1 className="mb-5 text-2xl text-white">
            Based On Your Description{" "}
          </h1>
          <RecommendationsContainer />
        </section>
      </DrawerContent>
    </Drawer>
  );
};
