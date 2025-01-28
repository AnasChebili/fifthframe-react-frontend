import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Button } from "@/components/ui/button";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div>
        Hello "__root"!
        <Button className="h-40">click</Button>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
