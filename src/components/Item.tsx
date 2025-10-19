import Link from "next/link";
import { useSelector } from "react-redux";
import { Calendar, House, Timer } from "lucide-react";
import Countdown from "@/components/Countdown";
import ItemImage from "@/components/ItemImage";
import { RootState } from "@/store";
import { ItemProps } from "@/types";
import { formatDate, formatPrice } from "@/utils";

const Item = (data: ItemProps) => {
  const viewMode = useSelector((state: RootState) => state.viewMode.mode);
  const isList = viewMode === "list";
  const wrapperClass = isList ? "flex-row justify-between" : "flex-col";
  const metaWrapperClass = isList
    ? "flex items-center justify-between gap-4"
    : "";

  return (
    <Link href={`/auction/${data.id}`} key={data.id} className="h-full">
      <div className="border-b dark:bg-gray-800 border border-gray-400 dark:border-gray-600 rounded-lg overflow-hidden h-full flex flex-col">
        {!isList && (
          <ItemImage
            src={data.imageUrl}
            alt={data.title}
            status={data.status}
          />
        )}
        <div className={`p-4 text-sm flex-1 md:flex ${wrapperClass}`}>
          <div>
            <h2 className="text-lg font-semibold">{data.title}</h2>

            <p className="my-3 text-xs">
              <span className="text-white bg-gray-600 inline-block px-2 py-0.5 rounded-sm">
                {data.category}
              </span>
            </p>

            <p className="text-gray-400">{data.description}</p>
          </div>

          <div className={`mt-auto ${metaWrapperClass}`}>
            <h3 className="text-2xl my-4 text-green-600 dark:text-green-400">
              {formatPrice(data.estimatedValue, "$")}
              <span className="block text-xs text-green-500 dark:text-green-200">
                (estimated value)
              </span>
            </h3>

            <div className="space-y-2 mt-auto">
              <p className="flex items-center">
                <House className="mr-2 size-4" />
                {data.auctionHouse}
              </p>
              <p className="flex items-center">
                <Calendar className="mr-2 size-4" />
                End Date: {formatDate(data.endDate)}
              </p>
              <p className="flex items-center">
                <Timer className="mr-2 size-4" />
                <Countdown endDate={data.endDate} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
