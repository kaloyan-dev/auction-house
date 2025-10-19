import { ItemProps } from "@/types";

const fetchItems = async (): Promise<Array<ItemProps>> => {
  const response = await fetch(
    "https://sttrafficplatformassets.blob.core.windows.net/traffic-assets/lots.json"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }

  const data = await response.json();

  // Hardcode the endDate of the first item to make sure the countdown is visible
  if (data.length > 0) {
    data[0].endDate = "2026-07-19T19:00:00Z";
  }

  return data;
};

export { fetchItems };
