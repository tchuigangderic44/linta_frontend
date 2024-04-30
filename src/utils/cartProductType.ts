export type cartProductType = {
  id: string;
  categorie: string;
  name: string;
  unitPrice: number;
  description: string;
  date?: Date;
  images: string[];
  star?: number;
  shop?: string;
  orderNumber?: number;
  duration?: number;
  quantity?: number;
};
