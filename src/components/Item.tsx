import Link from "next/link";
import { House, Calendar } from "lucide-react";
import ItemImage from "@/components/ItemImage";
import { ItemProps } from "@/types";
import { formatDate, formatPrice } from "@/utils";

const Item = (data: ItemProps) => {
  return (
    <Link href={`/auction/${data.id}`} key={data.id} className="h-full">
      <div className="border-b bg-gray-800 border border-gray-600 rounded-lg overflow-hidden h-full flex flex-col">
        <ItemImage src={data.imageUrl} alt={data.title} status={data.status} />
        <div className="p-4 text-sm flex-1 flex flex-col">
          <h2 className="text-lg font-semibold">{data.title}</h2>

          <p className="my-3 text-xs">
            <span className="bg-gray-600 inline-block px-2 py-0.5 rounded-sm">
              {data.category}
            </span>
          </p>

          <p className="text-gray-400">{data.description}</p>

          <h3 className="text-2xl my-4 text-green-400">
            {formatPrice(data.estimatedValue, "$")}
            <span className="block text-xs text-green-200">
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
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
