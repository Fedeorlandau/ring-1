export type ProductSwell = {
  active: boolean;
  variable: boolean;
  tags: Array<string>;
  options: Array<Record<string, unknown>>;
  description?: string;
  price: number;
  currency: 'EUR';
  name: string;
  images: Array<ImageSwell>;
  slug: string;
  type: 'standard';
  delivery: 'shipment';
  tax_class: 'standard';
  date_created: string;
  stock_status: null;
  attributes: Record<string, unknown>;
  date_updated: string;
  id: string;
};

export type ImageSwell = {
  file: {
    url: string;
  };
};
