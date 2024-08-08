export interface IProductImage {
  url: string;
  altText: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  imageAltText: string;
  shortDescription: string;
  stock: number;
  slug: string;
  isFeatured: boolean;
}

export interface IProductDetail extends IProduct {
  images: IProductImage[];
  description: string;
}
