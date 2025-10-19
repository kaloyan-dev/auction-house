import { ItemProps } from "@/types";

const fetchItems = async (): Promise<Array<ItemProps>> => {
  const response = await fetch(
    "https://sttrafficplatformassets.blob.core.windows.net/traffic-assets/lots.json"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }

  const data = await response.json();
  return data;
};

export { fetchItems };
