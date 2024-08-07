import { IProduct, IProductWithCarousel } from "@/interfaces/products.interface";

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    name: "Teclado Mecánico RGB",
    description:
      "Teclado mecánico con retroiluminación RGB y switches Cherry MX.",
    price: 450000,
    stock: 25,
    image: {
      url: "https://placehold.co/800?text=Teclado+Mecánico+RGB&font=montserrat",
      altText: "Teclado Mecánico RGB",
    },
    slug: "teclado-mecanico-rgb",
  },
  {
    id: 2,
    name: "Mouse Ergonómico",
    description:
      "Mouse ergonómico inalámbrico con sensor óptico de alta precisión.",
    price: 170000,
    stock: 40,
    image: {
      url: "https://placehold.co/800?text=Mouse+Ergonómico&font=montserrat",
      altText: "Mouse Ergonómico",
    },
    slug: "mouse-ergonomico",
  },
  {
    id: 3,
    name: "Silla de Oficina Ergonómica",
    description:
      "Silla ergonómica con soporte lumbar ajustable y reposabrazos.",
    price: 920000,
    stock: 15,
    image: {
      url: "https://placehold.co/800?text=Silla+de+Oficina+Ergonómica&font=montserrat",
      altText: "Silla de Oficina Ergonómica",
    },
    slug: "silla-ergonomica",
  },
  {
    id: 4,
    name: "Monitor 4K UHD",
    description: "Monitor 4K UHD de 27 pulgadas con alta precisión de color.",
    price: 1500000,
    stock: 10,
    image: {
      url: "https://placehold.co/800?text=Monitor+4K+UHD&font=montserrat",
      altText: "Monitor 4K UHD",
    },
    slug: "monitor-4k",
  },
  {
    id: 5,
    name: "Soporte para Portátil",
    description:
      "Soporte ajustable para portátil, ideal para mejorar la ergonomía.",
    price: 130000,
    stock: 50,
    image: {
      url: "https://placehold.co/800?text=Soporte+para+Portátil&font=montserrat",
      altText: "Soporte para Portátil",
    },
    slug: "soporte-portatil",
  },
  {
    id: 6,
    name: "Auriculares con Cancelación de Ruido",
    description: "Auriculares inalámbricos con cancelación activa de ruido.",
    price: 570000,
    stock: 20,
    image: {
      url: "https://placehold.co/800?text=Auriculares+con+Cancelación+de+Ruido&font=montserrat",
      altText: "Auriculares con Cancelación de Ruido",
    },
    slug: "auriculares-cancelacion-ruido",
  },
  {
    id: 7,
    name: "Alfombrilla de Ratón XXL",
    description:
      "Alfombrilla de ratón extragrande con superficie optimizada para juegos.",
    price: 95000,
    stock: 35,
    image: {
      url: "https://placehold.co/800?text=Alfombrilla+de+Ratón+XXL&font=montserrat",
      altText: "Alfombrilla de Ratón XXL",
    },
    slug: "alfombrilla-raton-xxl",
  },
  {
    id: 8,
    name: "Teclado Numérico USB",
    description:
      "Teclado numérico USB compacto, ideal para contabilidad y hojas de cálculo.",
    price: 70000,
    stock: 45,
    image: {
      url: "https://placehold.co/800?text=Teclado+Numérico+USB&font=montserrat",
      altText: "Teclado Numérico USB",
    },
    slug: "teclado-usb",
  },
  {
    id: 9,
    name: "Base de Refrigeración para Portátil",
    description:
      "Base con ventiladores para mantener el portátil refrigerado durante largas sesiones de trabajo.",
    price: 110000,
    stock: 22,
    image: {
      url: "https://placehold.co/800?text=Base+de+Refrigeración+para+Portátil&font=montserrat",
      altText: "Base de Refrigeración para Portátil",
    },
    slug: "base-refrigeracion-portatil",
  },
  {
    id: 10,
    name: "Escritorio Ajustable",
    description:
      "Escritorio ajustable en altura para trabajar de pie o sentado.",
    price: 1700000,
    stock: 8,
    image: {
      url: "https://placehold.co/800?text=Escritorio+Ajustable&font=montserrat",
      altText: "Escritorio Ajustable",
    },
    slug: "escritorio-ajustable",
  },
  {
    id: 11,
    name: "Cámara Web Full HD",
    description:
      "Cámara web con resolución Full HD y micrófono integrado para videoconferencias.",
    price: 320000,
    stock: 18,
    image: {
      url: "https://placehold.co/800?text=Cámara+Web+Full+HD&font=montserrat",
      altText: "Cámara Web Full HD",
    },
    slug: "camara-web-full-hd",
  },
  {
    id: 12,
    name: "Lámpara de Escritorio LED",
    description:
      "Lámpara de escritorio con luz LED ajustable y control táctil.",
    price: 150000,
    stock: 30,
    image: {
      url: "https://placehold.co/800?text=Lámpara+de+Escritorio+LED&font=montserrat",
      altText: "Lámpara de Escritorio LED",
    },
    slug: "lampara-escritorio-led",
  },
  {
    id: 13,
    name: "Cable USB-C a USB-A",
    description:
      "Cable de alta velocidad USB-C a USB-A, ideal para carga y transferencia de datos.",
    price: 50000,
    stock: 60,
    image: {
      url: "https://placehold.co/800?text=Cable+USB-C+a+USB-A&font=montserrat",
      altText: "Cable USB-C a USB-A",
    },
    slug: "cable-usb-c-a-usb-a",
  },
  {
    id: 14,
    name: "Hub USB 3.0",
    description:
      "Hub USB 3.0 con 4 puertos para expandir la conectividad de tu portátil.",
    price: 115000,
    stock: 25,
    image: {
      url: "https://placehold.co/800?text=Hub+USB+3.0&font=montserrat",
      altText: "Hub USB 3.0",
    },
    slug: "hub-usb-3.0",
  },
  {
    id: 15,
    name: "Micrófono Condensador USB",
    description:
      "Micrófono condensador con conexión USB, perfecto para podcasting y streaming.",
    price: 270000,
    stock: 12,
    image: {
      url: "https://placehold.co/800?text=Micrófono+Condensador+USB&font=montserrat",
      altText: "Micrófono Condensador USB",
    },
    slug: "microfono-usb",
  },
];

export const PRODUCTS_WITH_CAROUSEL: IProductWithCarousel[] = [
  {
    id: 1,
    name: "Teclado Mecánico RGB",
    description:
      "Teclado mecánico con retroiluminación RGB y switches Cherry MX.",
    price: 450000,
    stock: 25,
    image: {
      url: "https://placehold.co/800?text=Teclado+Mecánico+RGB&font=montserrat",
      altText: "Teclado Mecánico RGB",
    },
    slug: "teclado-mecanico-rgb",
    images: [
      {
        url: "https://placehold.co/800?text=Teclado+Mecánico+RGB&font=montserrat",
        altText: "Teclado Mecánico RGB 1",
      },
      {
        url: "https://placehold.co/800?text=Teclado+Mecánico+RGB&font=montserrat",
        altText: "Teclado Mecánico RGB 2",
      },
    ],
  },
  {
    id: 2,
    name: "Mouse Ergonómico",
    description:
      "Mouse ergonómico inalámbrico con sensor óptico de alta precisión.",
    price: 170000,
    stock: 40,
    image: {
      url: "https://placehold.co/800?text=Mouse+Ergonómico&font=montserrat",
      altText: "Mouse Ergonómico",
    },
    slug: "mouse-ergonomico",
    images: [
      {
        url: "https://placehold.co/800?text=Mouse+Ergonómico&font=montserrat",
        altText: "Mouse Ergonómico 1",
      },
      {
        url: "https://placehold.co/800?text=Mouse+Ergonómico&font=montserrat",
        altText: "Mouse Ergonómico 2",
      },
    ],
  },
  {
    id: 3,
    name: "Silla de Oficina Ergonómica",
    description:
      "Silla ergonómica con soporte lumbar ajustable y reposabrazos.",
    price: 920000,
    stock: 15,
    image: {
      url: "https://placehold.co/800?text=Silla+de+Oficina+Ergonómica&font=montserrat",
      altText: "Silla de Oficina Ergonómica",
    },
    slug: "silla-ergonomica",
    images: [
      {
        url: "https://placehold.co/800?text=Silla+de+Oficina+Ergonómica&font=montserrat",
        altText: "Silla de Oficina Ergonómica 1",
      },
      {
        url: "https://placehold.co/800?text=Silla+de+Oficina+Ergonómica&font=montserrat",
        altText: "Silla de Oficina Ergonómica 2",
      },
    ],
  },
  {
    id: 4,
    name: "Monitor 4K UHD",
    description: "Monitor 4K UHD de 27 pulgadas con alta precisión de color.",
    price: 1500000,
    stock: 10,
    image: {
      url: "https://placehold.co/800?text=Monitor+4K+UHD&font=montserrat",
      altText: "Monitor 4K UHD",
    },
    slug: "monitor-4k",
    images: [
      {
        url: "https://placehold.co/800?text=Monitor+4K+UHD&font=montserrat",
        altText: "Monitor 4K UHD 1",
      },
      {
        url: "https://placehold.co/800?text=Monitor+4K+UHD&font=montserrat",
        altText: "Monitor 4K UHD 2",
      },
    ],
  },
  {
    id: 5,
    name: "Soporte para Portátil",
    description:
      "Soporte ajustable para portátil, ideal para mejorar la ergonomía.",
    price: 130000,
    stock: 50,
    image: {
      url: "https://placehold.co/800?text=Soporte+para+Portátil&font=montserrat",
      altText: "Soporte para Portátil",
    },
    slug: "soporte-portatil",
    images: [
      {
        url: "https://placehold.co/800?text=Soporte+para+Portátil&font=montserrat",
        altText: "Soporte para Portátil 1",
      },
      {
        url: "https://placehold.co/800?text=Soporte+para+Portátil&font=montserrat",
        altText: "Soporte para Portátil 2",
      },
    ],
  },
  {
    id: 6,
    name: "Auriculares con Cancelación de Ruido",
    description: "Auriculares inalámbricos con cancelación activa de ruido.",
    price: 570000,
    stock: 20,
    image: {
      url: "https://placehold.co/800?text=Auriculares+con+Cancelación+de+Ruido&font=montserrat",
      altText: "Auriculares con Cancelación de Ruido",
    },
    slug: "auriculares-cancelacion-ruido",
    images: [
      {
        url: "https://placehold.co/800?text=Auriculares+con+Cancelación+de+Ruido&font=montserrat",
        altText: "Auriculares con Cancelación de Ruido 1",
      },
      {
        url: "https://placehold.co/800?text=Auriculares+con+Cancelación+de+Ruido&font=montserrat",
        altText: "Auriculares con Cancelación de Ruido 2",
      },
    ],
  },
  {
    id: 7,
    name: "Alfombrilla de Ratón XXL",
    description:
      "Alfombrilla de ratón extragrande con superficie optimizada para juegos.",
    price: 95000,
    stock: 35,
    image: {
      url: "https://placehold.co/800?text=Alfombrilla+de+Ratón+XXL&font=montserrat",
      altText: "Alfombrilla de Ratón XXL",
    },
    slug: "alfombrilla-raton-xxl",
    images: [
      {
        url: "https://placehold.co/800?text=Alfombrilla+de+Ratón+XXL&font=montserrat",
        altText: "Alfombrilla de Ratón XXL 1",
      },
      {
        url: "https://placehold.co/800?text=Alfombrilla+de+Ratón+XXL&font=montserrat",
        altText: "Alfombrilla de Ratón XXL 2",
      },
    ],
  },
  {
    id: 8,
    name: "Teclado Numérico USB",
    description:
      "Teclado numérico USB compacto, ideal para contabilidad y hojas de cálculo.",
    price: 70000,
    stock: 45,
    image: {
      url: "https://placehold.co/800?text=Teclado+Numérico+USB&font=montserrat",
      altText: "Teclado Numérico USB",
    },
    slug: "teclado-usb",
    images: [
      {
        url: "https://placehold.co/800?text=Teclado+Numérico+USB&font=montserrat",
        altText: "Teclado Numérico USB 1",
      },
      {
        url: "https://placehold.co/800?text=Teclado+Numérico+USB&font=montserrat",
        altText: "Teclado Numérico USB 2",
      },
    ],
  },
  {
    id: 9,
    name: "Base de Refrigeración para Portátil",
    description:
      "Base con ventiladores para mantener el portátil refrigerado durante largas sesiones de trabajo.",
    price: 110000,
    stock: 22,
    image: {
      url: "https://placehold.co/800?text=Base+de+Refrigeración+para+Portátil&font=montserrat",
      altText: "Base de Refrigeración para Portátil",
    },
    slug: "base-refrigeracion-portatil",
    images: [
      {
        url: "https://placehold.co/800?text=Base+de+Refrigeración+para+Portátil&font=montserrat",
        altText: "Base de Refrigeración para Portátil 1",
      },
      {
        url: "https://placehold.co/800?text=Base+de+Refrigeración+para+Portátil&font=montserrat",
        altText: "Base de Refrigeración para Portátil 2",
      },
    ],
  },
  {
    id: 10,
    name: "Escritorio Ajustable",
    description:
      "Escritorio ajustable en altura para trabajar de pie o sentado.",
    price: 1700000,
    stock: 8,
    image: {
      url: "https://placehold.co/800?text=Escritorio+Ajustable&font=montserrat",
      altText: "Escritorio Ajustable",
    },
    slug: "escritorio-ajustable",
    images: [
      {
        url: "https://placehold.co/800?text=Escritorio+Ajustable&font=montserrat",
        altText: "Escritorio Ajustable 1",
      },
      {
        url: "https://placehold.co/800?text=Escritorio+Ajustable&font=montserrat",
        altText: "Escritorio Ajustable 2",
      },
    ],
  },
  {
    id: 11,
    name: "Cámara Web Full HD",
    description:
      "Cámara web con resolución Full HD y micrófono integrado para videoconferencias.",
    price: 320000,
    stock: 18,
    image: {
      url: "https://placehold.co/800?text=Cámara+Web+Full+HD&font=montserrat",
      altText: "Cámara Web Full HD",
    },
    slug: "camara-web-full-hd",
    images: [
      {
        url: "https://placehold.co/800?text=Cámara+Web+Full+HD&font=montserrat",
        altText: "Cámara Web Full HD 1",
      },
      {
        url: "https://placehold.co/800?text=Cámara+Web+Full+HD&font=montserrat",
        altText: "Cámara Web Full HD 2",
      },
    ],
  },
  {
    id: 12,
    name: "Lámpara de Escritorio LED",
    description:
      "Lámpara de escritorio con luz LED ajustable y control táctil.",
    price: 150000,
    stock: 30,
    image: {
      url: "https://placehold.co/800?text=Lámpara+de+Escritorio+LED&font=montserrat",
      altText: "Lámpara de Escritorio LED",
    },
    slug: "lampara-escritorio-led",
    images: [
      {
        url: "https://placehold.co/800?text=Lámpara+de+Escritorio+LED&font=montserrat",
        altText: "Lámpara de Escritorio LED 1",
      },
      {
        url: "https://placehold.co/800?text=Lámpara+de+Escritorio+LED&font=montserrat",
        altText: "Lámpara de Escritorio LED 2",
      },
    ],
  },
  {
    id: 13,
    name: "Cable USB-C a USB-A",
    description:
      "Cable de alta velocidad USB-C a USB-A, ideal para carga y transferencia de datos.",
    price: 50000,
    stock: 60,
    image: {
      url: "https://placehold.co/800?text=Cable+USB-C+a+USB-A&font=montserrat",
      altText: "Cable USB-C a USB-A",
    },
    slug: "cable-usb-c-a-usb-a",
    images: [
      {
        url: "https://placehold.co/800?text=Cable+USB-C+a+USB-A&font=montserrat",
        altText: "Cable USB-C a USB-A 1",
      },
      {
        url: "https://placehold.co/800?text=Cable+USB-C+a+USB-A&font=montserrat",
        altText: "Cable USB-C a USB-A 2",
      },
    ],
  },
  {
    id: 14,
    name: "Hub USB 3.0",
    description:
      "Hub USB 3.0 con 4 puertos para expandir la conectividad de tu portátil.",
    price: 115000,
    stock: 25,
    image: {
      url: "https://placehold.co/800?text=Hub+USB+3.0&font=montserrat",
      altText: "Hub USB 3.0",
    },
    slug: "hub-usb-3.0",
    images: [
      {
        url: "https://placehold.co/800?text=Hub+USB+3.0&font=montserrat",
        altText: "Hub USB 3.0 1",
      },
      {
        url: "https://placehold.co/800?text=Hub+USB+3.0&font=montserrat",
        altText: "Hub USB 3.0 2",
      },
    ],
  },
  {
    id: 15,
    name: "Micrófono Condensador USB",
    description:
      "Micrófono condensador con conexión USB, perfecto para podcasting y streaming.",
    price: 270000,
    stock: 12,
    image: {
      url: "https://placehold.co/800?text=Micrófono+Condensador+USB&font=montserrat",
      altText: "Micrófono Condensador USB",
    },
    slug: "microfono-usb",
    images: [
      {
        url: "https://placehold.co/800?text=Micrófono+Condensador+USB&font=montserrat",
        altText: "Micrófono Condensador USB 1",
      },
      {
        url: "https://placehold.co/800?text=Micrófono+Condensador+USB&font=montserrat",
        altText: "Micrófono Condensador USB 2",
      },
    ],
  },
];
