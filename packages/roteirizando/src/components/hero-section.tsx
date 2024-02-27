import Image from "next/image";
import { Button } from "./button";
import { HeroCarousel } from "./hero-carousel";

export const HeroSection = () => {
  return (
    <div className="px-6 md:px-20 py-8 md:py-6 min-h-[768px] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-8 md:gap-10">
      <HeroCarousel />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-extrabold font-sans text-neutral-900 text-5xl tracking-[-2px] max-w-[628px]">
            Roteiros de viagem para todos os gostos
          </h1>
          <p className="font-sans text-neutral-800 font-medium text-lg leading-[150%] max-w-[468px]">
            Conheça nossas recomendações e planeje agora a sua viagem dos
            sonhos.
          </p>
        </div>
        <Button
          variant="CTA"
          type="anchor"
          href="/#itineraries"
          className="md:!w-[212px]"
        >
          Ver roteiros
        </Button>
      </div>
      <HeroImages />
    </div>
  );
};

const HeroImages = () => {
  return (
    <div className="hidden md:flex flex-row gap-4 lg:gap-6 lg:h-[768px] relative overflow-hidden">
      <div className="bg-gradient-to-t from-neutral-100 to-transparent to-30% absolute top-0 left-0 w-full h-full z-1"></div>
      <div className="flex flex-col gap-4 lg:gap-6">
        <Image
          className="rounded-2xl w-[302px] lg:h-[330px] object-cover"
          src="/amsterdam.jpg"
          alt="Roteirizando"
          width={302}
          height={330}
        />
        <Image
          className="rounded-2xl w-[302px] lg:h-[414px] object-cover"
          src="/italia.jpg"
          alt="Roteirizando"
          width={302}
          height={414}
        />
      </div>
      <div className="flex flex-col gap-4 lg:gap-6">
        <Image
          className="rounded-2xl w-[302px] lg:h-[447px] object-cover"
          src="/tokyo-tower.jpg"
          alt="Roteirizando"
          width={302}
          height={447}
        />
        <Image
          className="rounded-2xl w-[302px] h-full lg:h-[316px] object-cover"
          src="/machu-pichu.jpg"
          alt="Roteirizando"
          width={302}
          height={316}
        />
      </div>
    </div>
  );
};
