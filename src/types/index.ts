type ItemImageProps = {
  src: string;
  alt: string;
  status: string;
};

type ItemProps = {
  id: number;
  title: string;
  description: string;
  category: string;
  estimatedValue: number;
  imageUrl: string;
  auctionHouse: string;
  endDate: string;
  status: string;
};

type ItemListProps = {
  count: number;
  items: ItemProps[];
};

type ItemViewModeProps = {
  currentItems: number;
  totalItems: number;
};

export type { ItemImageProps, ItemProps, ItemListProps, ItemViewModeProps };
