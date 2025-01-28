import { TrendingContainer } from "@/components/trending-container";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      <TrendingContainer />
    </section>
  );
}
