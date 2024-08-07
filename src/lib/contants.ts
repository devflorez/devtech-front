import { IProduct, IProductDetail } from "@/interfaces/products.interface";

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    name: "Teclado Mecánico RGB",
    shortDescription:
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
    shortDescription:
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
    shortDescription:
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
    shortDescription:
      "Monitor 4K UHD de 27 pulgadas con alta precisión de color.",
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
    shortDescription:
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
    shortDescription:
      "Auriculares inalámbricos con cancelación activa de ruido.",
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
    shortDescription:
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
    shortDescription:
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
    shortDescription:
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
    shortDescription:
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
    shortDescription:
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
    shortDescription:
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
    shortDescription:
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
    shortDescription:
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
    shortDescription:
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

export const PRODUCTS_WITH_CAROUSEL: IProductDetail[] = [
  {
    id: 1,
    name: "Teclado Mecánico RGB",
    shortDescription:
      "Teclado mecánico con retroiluminación RGB y switches Cherry MX.",
    description:
      "El Teclado Mecánico RGB ofrece una experiencia de escritura incomparable con sus switches Cherry MX, conocidos por su durabilidad y respuesta táctil. La retroiluminación RGB permite personalizar el teclado con una amplia gama de colores y efectos, perfectos para crear un ambiente de juego o trabajo único. Además, su diseño robusto asegura una larga vida útil, haciéndolo ideal para jugadores y profesionales que buscan rendimiento y estilo.",
    price: 450000,
    stock: 25,
    image: {
      url: "https://placehold.co/800?text=Teclado+Mecánico+RGB&font=montserrat",
      altText: "Teclado Mecánico RGB",
    },
    slug: "teclado-mecanico-rgb",
    images: [
      {
        url: "https://placehold.co/800?text=Teclado+Mecánico+RGB+1&font=montserrat",
        altText: "Teclado Mecánico RGB 1",
      },
      {
        url: "https://placehold.co/800?text=Teclado+Mecánico+RGB+2&font=montserrat",
        altText: "Teclado Mecánico RGB 2",
      },
    ],
  },
  {
    id: 2,
    name: "Mouse Ergonómico",
    shortDescription:
      "Mouse ergonómico inalámbrico con sensor óptico de alta precisión.",
    description:
      "El Mouse Ergonómico está diseñado para brindar comodidad durante largas sesiones de uso, reduciendo la fatiga y mejorando la postura de la mano. Su sensor óptico de alta precisión garantiza movimientos suaves y exactos, ideal para tareas que requieren alta precisión, como diseño gráfico o juegos. La conectividad inalámbrica elimina los cables enredados y proporciona libertad de movimiento.",
    price: 170000,
    stock: 40,
    image: {
      url: "https://placehold.co/800?text=Mouse+Ergonómico&font=montserrat",
      altText: "Mouse Ergonómico",
    },
    slug: "mouse-ergonomico",
    images: [
      {
        url: "https://placehold.co/800?text=Mouse+Ergonómico+1&font=montserrat",
        altText: "Mouse Ergonómico 1",
      },
      {
        url: "https://placehold.co/800?text=Mouse+Ergonómico+2&font=montserrat",
        altText: "Mouse Ergonómico 2",
      },
    ],
  },
  {
    id: 3,
    name: "Silla de Oficina Ergonómica",
    shortDescription:
      "Silla ergonómica con soporte lumbar ajustable y reposabrazos.",
    description:
      "La Silla de Oficina Ergonómica está diseñada para ofrecer el máximo confort durante largas horas de trabajo. Con un soporte lumbar ajustable, esta silla se adapta a la curva natural de la espalda, reduciendo la tensión y el dolor. Los reposabrazos ajustables proporcionan soporte adicional, permitiendo una postura relajada. Su diseño moderno y elegante la hace perfecta para cualquier espacio de trabajo.",
    price: 920000,
    stock: 15,
    image: {
      url: "https://placehold.co/800?text=Silla+de+Oficina+Ergonómica&font=montserrat",
      altText: "Silla de Oficina Ergonómica",
    },
    slug: "silla-ergonomica",
    images: [
      {
        url: "https://placehold.co/800?text=Silla+de+Oficina+Ergonómica+1&font=montserrat",
        altText: "Silla de Oficina Ergonómica 1",
      },
      {
        url: "https://placehold.co/800?text=Silla+de+Oficina+Ergonómica+2&font=montserrat",
        altText: "Silla de Oficina Ergonómica 2",
      },
    ],
  },
  {
    id: 4,
    name: "Monitor 4K UHD",
    shortDescription:
      "Monitor 4K UHD de 27 pulgadas con alta precisión de color.",
    description:
      "El Monitor 4K UHD de 27 pulgadas ofrece una calidad de imagen superior con una resolución cuatro veces mayor que la Full HD. Su alta precisión de color hace que sea ideal para profesionales del diseño gráfico, edición de video y cualquier otra tarea que requiera una representación precisa de los colores. Con un diseño elegante y bordes delgados, este monitor no solo mejora la productividad sino que también aporta un toque moderno a tu espacio de trabajo.",
    price: 1500000,
    stock: 10,
    image: {
      url: "https://placehold.co/800?text=Monitor+4K+UHD&font=montserrat",
      altText: "Monitor 4K UHD",
    },
    slug: "monitor-4k",
    images: [
      {
        url: "https://placehold.co/800?text=Monitor+4K+UHD+1&font=montserrat",
        altText: "Monitor 4K UHD 1",
      },
      {
        url: "https://placehold.co/800?text=Monitor+4K+UHD+2&font=montserrat",
        altText: "Monitor 4K UHD 2",
      },
    ],
  },
  {
    id: 5,
    name: "Soporte para Portátil",
    shortDescription:
      "Soporte ajustable para portátil, ideal para mejorar la ergonomía.",
    description:
      "El Soporte para Portátil ajustable mejora la ergonomía al elevar el portátil a una altura de visualización cómoda. Esto ayuda a reducir la tensión en el cuello y los hombros durante largas horas de uso. Su diseño plegable y ligero facilita su transporte y almacenamiento, haciéndolo ideal tanto para uso doméstico como para llevar a la oficina. Compatible con la mayoría de los portátiles, este soporte es una excelente adición a tu configuración de trabajo.",
    price: 130000,
    stock: 50,
    image: {
      url: "https://placehold.co/800?text=Soporte+para+Portátil&font=montserrat",
      altText: "Soporte para Portátil",
    },
    slug: "soporte-portatil",
    images: [
      {
        url: "https://placehold.co/800?text=Soporte+para+Portátil+1&font=montserrat",
        altText: "Soporte para Portátil 1",
      },
      {
        url: "https://placehold.co/800?text=Soporte+para+Portátil+2&font=montserrat",
        altText: "Soporte para Portátil 2",
      },
    ],
  },
  {
    id: 6,
    name: "Auriculares con Cancelación de Ruido",
    shortDescription:
      "Auriculares inalámbricos con cancelación activa de ruido.",
    description:
      "Los Auriculares con Cancelación de Ruido ofrecen una experiencia de audio envolvente, eliminando los ruidos externos gracias a su tecnología de cancelación activa. Ideales para viajes, trabajo en entornos ruidosos o simplemente para disfrutar de tu música favorita sin interrupciones. Su diseño inalámbrico proporciona comodidad y libertad de movimiento, mientras que la batería de larga duración asegura horas de uso continuo.",
    price: 570000,
    stock: 20,
    image: {
      url: "https://placehold.co/800?text=Auriculares+con+Cancelación+de+Ruido&font=montserrat",
      altText: "Auriculares con Cancelación de Ruido",
    },
    slug: "auriculares-cancelacion-ruido",
    images: [
      {
        url: "https://placehold.co/800?text=Auriculares+con+Cancelación+de+Ruido+1&font=montserrat",
        altText: "Auriculares con Cancelación de Ruido 1",
      },
      {
        url: "https://placehold.co/800?text=Auriculares+con+Cancelación+de+Ruido+2&font=montserrat",
        altText: "Auriculares con Cancelación de Ruido 2",
      },
    ],
  },
  {
    id: 7,
    name: "Alfombrilla de Ratón XXL",
    shortDescription:
      "Alfombrilla de ratón extragrande con superficie optimizada para juegos.",
    description:
      "La Alfombrilla de Ratón XXL ofrece un amplio espacio para el movimiento del ratón, ideal para jugadores y diseñadores que necesitan una superficie suave y precisa. Su base antideslizante asegura que la alfombrilla permanezca en su lugar, mientras que la superficie texturizada mejora el seguimiento del sensor del ratón, proporcionando una experiencia de uso fluida y sin interrupciones.",
    price: 95000,
    stock: 35,
    image: {
      url: "https://placehold.co/800?text=Alfombrilla+de+Ratón+XXL&font=montserrat",
      altText: "Alfombrilla de Ratón XXL",
    },
    slug: "alfombrilla-raton-xxl",
    images: [
      {
        url: "https://placehold.co/800?text=Alfombrilla+de+Ratón+XXL+1&font=montserrat",
        altText: "Alfombrilla de Ratón XXL 1",
      },
      {
        url: "https://placehold.co/800?text=Alfombrilla+de+Ratón+XXL+2&font=montserrat",
        altText: "Alfombrilla de Ratón XXL 2",
      },
    ],
  },
  {
    id: 8,
    name: "Teclado Numérico USB",
    shortDescription:
      "Teclado numérico USB compacto, ideal para contabilidad y hojas de cálculo.",
    description:
      "El Teclado Numérico USB es una herramienta compacta y eficiente para profesionales que necesitan introducir datos numéricos de manera rápida y precisa. Ideal para contabilidad, hojas de cálculo y cualquier tarea que requiera el uso intensivo de números. Su diseño portátil y plug-and-play asegura una fácil integración con cualquier sistema, mejorando tu productividad.",
    price: 70000,
    stock: 45,
    image: {
      url: "https://placehold.co/800?text=Teclado+Numérico+USB&font=montserrat",
      altText: "Teclado Numérico USB",
    },
    slug: "teclado-usb",
    images: [
      {
        url: "https://placehold.co/800?text=Teclado+Numérico+USB+1&font=montserrat",
        altText: "Teclado Numérico USB 1",
      },
      {
        url: "https://placehold.co/800?text=Teclado+Numérico+USB+2&font=montserrat",
        altText: "Teclado Numérico USB 2",
      },
    ],
  },
  {
    id: 9,
    name: "Base de Refrigeración para Portátil",
    shortDescription:
      "Base con ventiladores para mantener el portátil refrigerado durante largas sesiones de trabajo.",
    description:
      "La Base de Refrigeración para Portátil está equipada con ventiladores silenciosos que ayudan a mantener tu dispositivo a una temperatura óptima durante largas sesiones de trabajo o juego. Su diseño ergonómico también eleva el portátil a una posición cómoda para la escritura, mejorando tanto el rendimiento del dispositivo como la comodidad del usuario.",
    price: 110000,
    stock: 22,
    image: {
      url: "https://placehold.co/800?text=Base+de+Refrigeración+para+Portátil&font=montserrat",
      altText: "Base de Refrigeración para Portátil",
    },
    slug: "base-refrigeracion-portatil",
    images: [
      {
        url: "https://placehold.co/800?text=Base+de+Refrigeración+para+Portátil+1&font=montserrat",
        altText: "Base de Refrigeración para Portátil 1",
      },
      {
        url: "https://placehold.co/800?text=Base+de+Refrigeración+para+Portátil+2&font=montserrat",
        altText: "Base de Refrigeración para Portátil 2",
      },
    ],
  },
  {
    id: 10,
    name: "Escritorio Ajustable",
    shortDescription:
      "Escritorio ajustable en altura para trabajar de pie o sentado.",
    description:
      "El Escritorio Ajustable permite alternar fácilmente entre trabajar sentado y de pie, promoviendo una postura más saludable y reduciendo los riesgos asociados con estar sentado durante largos periodos. Su construcción robusta y mecanismo de ajuste suave aseguran durabilidad y facilidad de uso. Ideal para oficinas modernas y espacios de trabajo en casa.",
    price: 1700000,
    stock: 8,
    image: {
      url: "https://placehold.co/800?text=Escritorio+Ajustable&font=montserrat",
      altText: "Escritorio Ajustable",
    },
    slug: "escritorio-ajustable",
    images: [
      {
        url: "https://placehold.co/800?text=Escritorio+Ajustable+1&font=montserrat",
        altText: "Escritorio Ajustable 1",
      },
      {
        url: "https://placehold.co/800?text=Escritorio+Ajustable+2&font=montserrat",
        altText: "Escritorio Ajustable 2",
      },
    ],
  },
  {
    id: 11,
    name: "Cámara Web Full HD",
    shortDescription:
      "Cámara web con resolución Full HD y micrófono integrado para videoconferencias.",
    description:
      "La Cámara Web Full HD proporciona una calidad de imagen clara y nítida, perfecta para videoconferencias, transmisiones en vivo y grabaciones. Su micrófono integrado captura el sonido con claridad, asegurando una comunicación efectiva. Fácil de instalar y compatible con la mayoría de las plataformas de videoconferencia, esta cámara es una excelente adición a cualquier setup de oficina o estudio.",
    price: 320000,
    stock: 18,
    image: {
      url: "https://placehold.co/800?text=Cámara+Web+Full+HD&font=montserrat",
      altText: "Cámara Web Full HD",
    },
    slug: "camara-web-full-hd",
    images: [
      {
        url: "https://placehold.co/800?text=Cámara+Web+Full+HD+1&font=montserrat",
        altText: "Cámara Web Full HD 1",
      },
      {
        url: "https://placehold.co/800?text=Cámara+Web+Full+HD+2&font=montserrat",
        altText: "Cámara Web Full HD 2",
      },
    ],
  },
  {
    id: 12,
    name: "Lámpara de Escritorio LED",
    shortDescription:
      "Lámpara de escritorio con luz LED ajustable y control táctil.",
    description:
      "La Lámpara de Escritorio LED ofrece una iluminación clara y ajustable para cualquier tarea. Con control táctil intuitivo, puedes ajustar el brillo y la temperatura de color según tus necesidades. Su diseño moderno y elegante la hace adecuada para cualquier espacio de trabajo, mientras que su eficiencia energética asegura un bajo consumo de energía.",
    price: 150000,
    stock: 30,
    image: {
      url: "https://placehold.co/800?text=Lámpara+de+Escritorio+LED&font=montserrat",
      altText: "Lámpara de Escritorio LED",
    },
    slug: "lampara-escritorio-led",
    images: [
      {
        url: "https://placehold.co/800?text=Lámpara+de+Escritorio+LED+1&font=montserrat",
        altText: "Lámpara de Escritorio LED 1",
      },
      {
        url: "https://placehold.co/800?text=Lámpara+de+Escritorio+LED+2&font=montserrat",
        altText: "Lámpara de Escritorio LED 2",
      },
    ],
  },
  {
    id: 13,
    name: "Cable USB-C a USB-A",
    shortDescription:
      "Cable de alta velocidad USB-C a USB-A, ideal para carga y transferencia de datos.",
    description:
      "El Cable USB-C a USB-A de alta velocidad es perfecto para cargar tus dispositivos y transferir datos rápidamente. Su construcción duradera asegura una larga vida útil, mientras que su diseño compacto lo hace fácil de llevar a cualquier lugar. Compatible con una amplia gama de dispositivos, este cable es una herramienta esencial para cualquier usuario de tecnología.",
    price: 50000,
    stock: 60,
    image: {
      url: "https://placehold.co/800?text=Cable+USB-C+a+USB-A&font=montserrat",
      altText: "Cable USB-C a USB-A",
    },
    slug: "cable-usb-c-a-usb-a",
    images: [
      {
        url: "https://placehold.co/800?text=Cable+USB-C+a+USB-A+1&font=montserrat",
        altText: "Cable USB-C a USB-A 1",
      },
      {
        url: "https://placehold.co/800?text=Cable+USB-C+a+USB-A+2&font=montserrat",
        altText: "Cable USB-C a USB-A 2",
      },
    ],
  },
  {
    id: 14,
    name: "Hub USB 3.0",
    shortDescription:
      "Hub USB 3.0 con 4 puertos para expandir la conectividad de tu portátil.",
    description:
      "El Hub USB 3.0 con 4 puertos es la solución perfecta para expandir la conectividad de tu portátil. Con una transferencia de datos rápida y eficiente, este hub te permite conectar múltiples dispositivos simultáneamente, como discos duros externos, teclados, ratones y más. Su diseño compacto y portátil lo hace ideal para llevarlo contigo a cualquier lugar.",
    price: 115000,
    stock: 25,
    image: {
      url: "https://placehold.co/800?text=Hub+USB+3.0&font=montserrat",
      altText: "Hub USB 3.0",
    },
    slug: "hub-usb-3.0",
    images: [
      {
        url: "https://placehold.co/800?text=Hub+USB+3.0+1&font=montserrat",
        altText: "Hub USB 3.0 1",
      },
      {
        url: "https://placehold.co/800?text=Hub+USB+3.0+2&font=montserrat",
        altText: "Hub USB 3.0 2",
      },
    ],
  },
  {
    id: 15,
    name: "Micrófono Condensador USB",
    shortDescription:
      "Micrófono condensador con conexión USB, perfecto para podcasting y streaming.",
    description:
      "El Micrófono Condensador USB ofrece una calidad de sonido profesional para tus grabaciones, podcasting y streaming. Su conexión USB plug-and-play facilita la instalación y el uso, mientras que su patrón de captación cardioide reduce el ruido de fondo y capta la voz con claridad. Ideal para creadores de contenido que buscan mejorar la calidad de su audio.",
    price: 270000,
    stock: 12,
    image: {
      url: "https://placehold.co/800?text=Micrófono+Condensador+USB&font=montserrat",
      altText: "Micrófono Condensador USB",
    },
    slug: "microfono-usb",
    images: [
      {
        url: "https://placehold.co/800?text=Micrófono+Condensador+USB+1&font=montserrat",
        altText: "Micrófono Condensador USB 1",
      },
      {
        url: "https://placehold.co/800?text=Micrófono+Condensador+USB+2&font=montserrat",
        altText: "Micrófono Condensador USB 2",
      },
    ],
  },
];
