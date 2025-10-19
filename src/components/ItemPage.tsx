"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowBigLeft, Calendar, House, Timer } from "lucide-react";
import Countdown from "@/components/Countdown";
import ItemImage from "@/components/ItemImage";
import { ItemProps } from "@/types";
import { formatDate, formatPrice } from "@/utils";

const ItemPage = ({ items }: { items: ItemProps[] }) => {
  const params = useParams();
  const itemId = params?.id as string;
  const item = items.find((item) => item.id === parseInt(itemId));

  if (!item) {
    return <div className="p-4 max-w-7xl mx-auto">Item not found.</div>;
  }

  return (
    <div className="border-b dark:bg-gray-800 border border-gray-600 rounded-lg overflow-hidden mt-6">
      <ItemImage src={item.imageUrl} alt={item.title} status={item.status} />
      <div className="p-4 text-sm">
        <h2 className="text-lg font-semibold">{item.title}</h2>

        <p className="my-3 text-xs">
          <span className="text-white bg-gray-600 inline-block px-2 py-0.5 rounded-sm">
            {item.category}
          </span>
        </p>

        <p className="text-gray-400">{item.description}</p>

        <h3 className="text-2xl my-4 text-green-600 dark:text-green-400">
          {formatPrice(item.estimatedValue, "$")}
          <span className="block text-xs text-green-500 dark:text-green-200">
            (estimated value)
          </span>
        </h3>

        <div className="space-y-2 mt-auto">
          <p className="flex items-center">
            <House className="mr-2 size-4" />
            {item.auctionHouse}
          </p>
          <p className="flex items-center">
            <Calendar className="mr-2 size-4" />
            End Date: {formatDate(item.endDate)}
          </p>
          <p className="flex items-center">
            <Timer className="mr-2 size-4" />
            <Countdown endDate={item.endDate} />
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-600">
          <Link href="/" className="flex items-center">
            <ArrowBigLeft className="mr-2 size-4" />
            Back To All Auctions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
