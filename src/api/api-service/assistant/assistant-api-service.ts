import { assistantApi } from "@/api/axios";

export class AssistantApiSerice {
  static async postAsisstantMessage({
    message,
  }: {
    message: string;
  }): Promise<string> {
    const { data } = await assistantApi.post("/", { message });
    return data;
  }
}
