import { PeopleResultSchema } from "@/schemas/movie-schema";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ConfigurationResponseSchema } from "@/schemas/configuration-schema";

export const PersonCard = ({
  person,
  configuration,
}: {
  person: Zod.infer<typeof PeopleResultSchema>;
  configuration: Zod.infer<typeof ConfigurationResponseSchema>;
}) => {
  return (
    <section className="flex items-center gap-8 cursor-pointer">
      <Avatar>
        <AvatarImage
          src={`${configuration.images.secure_base_url}/${configuration.images.profile_sizes[1]}/${person.profile_path}`}
        />
        <AvatarFallback>{person.name}</AvatarFallback>
      </Avatar>
      <h1 className=" font-bold">{person.name}</h1>
    </section>
  );
};
