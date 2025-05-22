import { AssistantApiSerice } from "@/api/api-service/assistant/assistant-api-service";
import { useQuery } from "@tanstack/react-query";

export const useGetAssistantResponse = ({ message }: { message: string }) => {
  return useQuery({
    queryKey: ["assistant response", message],
    queryFn: () => AssistantApiSerice.postAsisstantMessage({ message }),
  });
};
