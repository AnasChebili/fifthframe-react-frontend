import { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { DiscoverQuery } from "@/api/api-service/movie/movie-api-service";
import { Input } from "./ui/input";

const sortOptions = [
  { key: "original_title.asc", value: "Original Title (A-Z)" },
  { key: "original_title.desc", value: "Original Title (Z-A)" },
  { key: "popularity.asc", value: "Popularity (Lowest to Highest)" },
  { key: "popularity.desc", value: "Popularity (Highest to Lowest)" },
  { key: "revenue.asc", value: "Revenue (Lowest to Highest)" },
  { key: "revenue.desc", value: "Revenue (Highest to Lowest)" },
  { key: "primary_release_date.asc", value: "Release Date (Oldest First)" },
  { key: "primary_release_date.desc", value: "Release Date (Newest First)" },
  { key: "title.asc", value: "Title (A-Z)" },
  { key: "title.desc", value: "Title (Z-A)" },
  { key: "vote_average.asc", value: "Rating (Lowest to Highest)" },
  { key: "vote_average.desc", value: "Rating (Highest to Lowest)" },
  { key: "vote_count.asc", value: "Vote Count (Lowest to Highest)" },
  { key: "vote_count.desc", value: "Vote Count (Highest to Lowest)" },
];

export const PreferenceBar = ({
  setQuery,
}: {
  setQuery: Dispatch<SetStateAction<DiscoverQuery>>;
}) => {
  return (
    <section className="flex  gap-8 w-full">
      <Input
        placeholder="Filter by: Keywords"
        className="border-gray-500"
        onChange={(event) =>
          setQuery((prevValue) => ({
            ...prevValue,
            with_keywords: event.target.value,
          }))
        }
      />
      <Input
        placeholder="Filter by: release year"
        className="border-gray-500 "
        type="number"
        onChange={(event) =>
          setQuery((prevValue) => ({
            ...prevValue,
            year: Number(event.target.value),
          }))
        }
      />
      <Input
        placeholder="Filter by: minimum rating"
        className="border-gray-500 "
        type="number"
        onChange={(event) =>
          setQuery((prevValue) => ({
            ...prevValue,
            "vote_average.gte": Number(event.target.value),
          }))
        }
      />
      <Select
        onValueChange={(value) =>
          setQuery((prevValue) => ({
            ...prevValue,
            sort_by: value as "vote_count.desc",
          }))
        }
      >
        <SelectTrigger className="border-gray-500 text-gray-500 ">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent className="bg-black text-gray-500">
          {sortOptions.map((option) => (
            <SelectItem key={option.key} value={option.key}>
              {option.value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </section>
  );
};
