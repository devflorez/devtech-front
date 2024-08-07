export interface IProductImage {
  url: string;
  altText: string; // Texto alternativo para la imagen
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: IProductImage;
  description: string;
  stock: number;
  slug: string;
}

export interface IProductWithCarousel extends IProduct {
  images: IProductImage[];
}


