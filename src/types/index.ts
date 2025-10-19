type CountdownProps = {
  endDate: string;
};

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

export type { CountdownProps, ItemImageProps, ItemProps };
