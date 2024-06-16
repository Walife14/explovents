import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  price: number;
  url: string;
  image: string;
  event_type: "boat_party" | "pool_party" | "beach_party" | "other_party";
  country: string;
  city: string;
};

function EventCard({
  title,
  price,
  url,
  image,
  event_type,
  country,
  city,
}: Props) {
  const eventTypeText = (event_type: string) => {
    if (event_type === "boat_party") {
      return "Boat Party";
    }
    if (event_type === "pool_party") {
      return "Pool Party";
    }
    if (event_type === "beach_party") {
      return "Beach Party";
    }
    if (event_type === "other_party") {
      return "Other Party";
    }
  };

  return (
    <Link href={url}>
      <div className="p-2 flex flex-wrap gap-x-2 border border-dark-gray rounded-md">
        <div className="aspect-square h-[150px] md:h-[250px] lg:h-[300px] relative">
          <Image
            className="h-full object-cover object-center rounded-md"
            src={image}
            alt={`${title}`}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
          ></Image>
        </div>

        <div className="flex-1 flex flex-col gap-y-2">
          <h2 className="text-lg md:text-3xl font-bold text-secondary">
            {title}
          </h2>
          <p className="text-sm md:text-lg">
            <span className="underline">{city}</span>,{" "}
            <span className="underline">{country}</span>
          </p>
          <p className="text-sm md:text-lg text-dark-gray">
            <span className="font-semibold text-black">Days:</span> Monday,
            Wednesday, Friday
          </p>
        </div>

        <div className="pt-2 flex md:flex-col w-full md:w-auto items-center justify-between">
          <span className="font-semibold text-secondary">
            {eventTypeText(event_type)}
          </span>
          <div className="flex items-center gap-x-2">
            <span className="font-semibold">£{price}</span>
            <div className="bg-secondary p-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
