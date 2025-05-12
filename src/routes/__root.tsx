import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import fifthframeLogo from "../assets/fifthframe-logo.svg";

export const Route = createRootRoute({
  component: RootComponent,
});

const queryClient = new QueryClient();

function RootComponent() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <div className="relative">
          <div className="absolute cursor-pointer -top-3 right-10">
            <img
              className="text-white w-[220px] h-[30px]  object-cover "
              src={fifthframeLogo}
              alt="none"
            />
          </div>
          <div className="mt-16">
            <Outlet />
          </div>
        </div>

        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.Fragment>
  );
}
