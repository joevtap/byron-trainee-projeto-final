"use client";

import { useFetchItineraryById } from "@/utils/hooks/use-fetch-itinerary-by-id";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect } from "react";
import Markdown from "react-markdown";

export const runtime = "edge";

export default function Itinerary({ params }: { params: { id: string } }) {
  const [parent] = useAutoAnimate();
  const { itinerary, isLoading, isError } = useFetchItineraryById(params.id!);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="pt-8 px-6 md:px-20 flex flex-col items-center gap-8 min-h-[calc(100vh-(80px+96px+64px))] w-full"
      ref={parent}
    >
      {(isLoading || isError || !itinerary?.data) && <Skeleton />}
      {!isLoading && !isError && itinerary?.data && (
        <>
          <img
            src={
              process.env.NEXT_PUBLIC_STRAPI_PUBLIC_URL! +
              itinerary?.data.attributes.media.data[0].attributes.url
            }
            alt={itinerary?.data.attributes.title}
            className="w-full object-cover rounded-xl h-[448px]"
          />
          <div className="max-w-[928px] w-full flex flex-col gap-8">
            <h1 className="font-sans text-3xl font-bold text-neutral-900">
              {itinerary?.data.attributes.title}
            </h1>
            <div id="markdown-content">
              <Markdown>{itinerary?.data.attributes.content}</Markdown>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const Skeleton = () => {
  return (
    <div className="pt-8 px-6 md:px-20 flex flex-col items-center gap-8 min-h-[calc(100vh-(80px+96px+64px))] w-full">
      <div className="bg-neutral-200 rounded-xl shadow-sm p-4 w-full h-[448px]"></div>
      <div className="max-w-[928px] w-full flex flex-col gap-8">
        <div className="bg-neutral-200 rounded-xl shadow-sm p-4 w-full h-8"></div>
        <div className="bg-neutral-200 rounded-xl shadow-sm p-4 w-full h-8"></div>
        <div className="bg-neutral-200 rounded-xl shadow-sm p-4 w-full h-8"></div>
      </div>
    </div>
  );
};
