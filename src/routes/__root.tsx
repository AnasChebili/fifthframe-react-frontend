import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

const queryClient = new QueryClient();

function RootComponent() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <div className="absolute top-10 right-10 cursor-pointer">
          <img
            className="text-white w-[220px] h-[30px]  object-cover "
            src="src/assets/fifthframe-logo.svg"
            alt="none"
          />
        </div>
        <div className="mt-16">
          <Outlet />
        </div>
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.Fragment>
  );
}
