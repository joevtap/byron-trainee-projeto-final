import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";

interface Itinerary {
  data: {
    id: number;
    attributes: {
      content: string;
      title: string;
      media: {
        data: {
          attributes: {
            url: string;
          };
        }[];
      };
      description: string;
      shortDescription: string;
      publishedAt: Date;
      updatedAt: Date;
    };
  };
}

export const useFetchItineraryById = (id: string) => {
  const baseURI = process.env.NEXT_PUBLIC_STRAPI_PUBLIC_URL;

  const { data, isLoading, error } = useSWR<Itinerary>(
    `${baseURI}/api/roteiros/${id}?populate[0]=media`,
    fetcher
  );

  return {
    itinerary: data,
    isLoading,
    isError: error,
  };
};
