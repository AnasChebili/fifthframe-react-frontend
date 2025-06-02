import { assistantApi } from "@/api/axios";
import { DiscoverQuery } from "../movie/movie-api-service";

export class AssistantApiSerice {
  static async postAsisstantMessage({
    message,
  }: {
    message: string;
  }): Promise<DiscoverQuery> {
    const { data } = await assistantApi.post("/", { message });
    return JSON.parse(data);
  }
}
