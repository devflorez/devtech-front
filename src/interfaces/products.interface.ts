export interface IProductImage {
  url: string;
  altText: string; // Texto alternativo para la imagen
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: IProductImage;
  shortDescription: string;
  stock: number;
  slug: string;
}

export interface IProductDetail extends IProduct {
  images: IProductImage[];
  description: string;
}


