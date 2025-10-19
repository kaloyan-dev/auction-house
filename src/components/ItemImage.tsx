"use client";

import { useState } from "react";
import Image from "next/image";
import { uppercaseFirstLetter } from "@/utils";
import { ItemImageProps } from "@/types";

const ItemImage = ({ src, alt, status }: ItemImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  let statusClass;

  switch (status.toLowerCase()) {
    case "upcoming":
      statusClass = "bg-blue-400";
      break;
    case "live":
      statusClass = "bg-green-400";
      break;
    case "ended":
      statusClass = "bg-red-400/50";
      break;
    default:
      statusClass = "bg-gray-400";
  }

  return (
    <div className="relative">
      <Image
        src={imgSrc}
        alt={alt}
        width={400}
        height={300}
        className="w-full h-48 object-cover mb-2"
        onError={() => {
          setImgSrc("/placeholder.png");
        }}
      />

      <span
        className={`absolute top-0 right-0 text-xs text-white py-1 px-3 rounded-bl-lg tracking-wide ${statusClass}`}
      >
        {uppercaseFirstLetter(status)}
      </span>
    </div>
  );
};

export default ItemImage;
