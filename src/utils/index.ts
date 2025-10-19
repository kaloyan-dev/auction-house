import { ItemProps } from "@/types";

const getUniqueItemTerms = (items: ItemProps[], term: keyof ItemProps) => {
  const terms = new Set<string>();

  items.forEach((item) => {
    const value = item[term];

    if (value) {
      terms.add(value as string);
    }
  });

  return Array.from(terms).sort();
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const formatPrice = (price: number, currency: string): string => {
  const priceNumber = Number(price) || 0;

  return `${currency}${priceNumber.toLocaleString()}`;
};

const uppercaseFirstLetter = (str: string): string => {
  if (!str) {
    return "";
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
};

export { getUniqueItemTerms, formatDate, formatPrice, uppercaseFirstLetter };
