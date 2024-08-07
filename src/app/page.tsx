import Product from "@/components/app/home/product";
import React from "react";

const products = [
  {
    id: 1,
    name: "Teclado Mecánico RGB",
    description:
      "Teclado mecánico con retroiluminación RGB y switches Cherry MX.",
    price: "COP 450,000",
    stock: 25,
    imageUrl:
      "https://placehold.co/800?text=Teclado+Mecánico+RGB&font=montserrat",
  },
  {
    id: 2,
    name: "Mouse Ergonómico",
    description:
      "Mouse ergonómico inalámbrico con sensor óptico de alta precisión.",
    price: "COP 170,000",
    stock: 40,
    imageUrl: "https://placehold.co/800?text=Mouse+Ergonómico&font=montserrat",
  },
  {
    id: 3,
    name: "Silla de Oficina Ergonómica",
    description:
      "Silla ergonómica con soporte lumbar ajustable y reposabrazos.",
    price: "COP 920,000",
    stock: 15,
    imageUrl:
      "https://placehold.co/800?text=Silla+de+Oficina+Ergonómica&font=montserrat",
  },
  {
    id: 4,
    name: "Monitor 4K UHD",
    description: "Monitor 4K UHD de 27 pulgadas con alta precisión de color.",
    price: "COP 1,500,000",
    stock: 10,
    imageUrl: "https://placehold.co/800?text=Monitor+4K+UHD&font=montserrat",
  },
  {
    id: 5,
    name: "Soporte para Portátil",
    description:
      "Soporte ajustable para portátil, ideal para mejorar la ergonomía.",
    price: "COP 130,000",
    stock: 50,
    imageUrl:
      "https://placehold.co/800?text=Soporte+para+Portátil&font=montserrat",
  },
  {
    id: 6,
    name: "Auriculares con Cancelación de Ruido",
    description: "Auriculares inalámbricos con cancelación activa de ruido.",
    price: "COP 570,000",
    stock: 20,
    imageUrl:
      "https://placehold.co/800?text=Auriculares+con+Cancelación+de+Ruido&font=montserrat",
  },
  {
    id: 7,
    name: "Alfombrilla de Ratón XXL",
    description:
      "Alfombrilla de ratón extragrande con superficie optimizada para juegos.",
    price: "COP 95,000",
    stock: 35,
    imageUrl:
      "https://placehold.co/800?text=Alfombrilla+de+Ratón+XXL&font=montserrat",
  },
  {
    id: 8,
    name: "Teclado Numérico USB",
    description:
      "Teclado numérico USB compacto, ideal para contabilidad y hojas de cálculo.",
    price: "COP 70,000",
    stock: 45,
    imageUrl:
      "https://placehold.co/800?text=Teclado+Numérico+USB&font=montserrat",
  },
  {
    id: 9,
    name: "Base de Refrigeración para Portátil",
    description:
      "Base con ventiladores para mantener el portátil refrigerado durante largas sesiones de trabajo.",
    price: "COP 110,000",
    stock: 22,
    imageUrl:
      "https://placehold.co/800?text=Base+de+Refrigeración+para+Portátil&font=montserrat",
  },
  {
    id: 10,
    name: "Escritorio Ajustable",
    description:
      "Escritorio ajustable en altura para trabajar de pie o sentado.",
    price: "COP 1,700,000",
    stock: 8,
    imageUrl:
      "https://placehold.co/800?text=Escritorio+Ajustable&font=montserrat",
  },
  {
    id: 11,
    name: "Cámara Web Full HD",
    description:
      "Cámara web con resolución Full HD y micrófono integrado para videoconferencias.",
    price: "COP 320,000",
    stock: 18,
    imageUrl:
      "https://placehold.co/800?text=Cámara+Web+Full+HD&font=montserrat",
  },
  {
    id: 12,
    name: "Lámpara de Escritorio LED",
    description:
      "Lámpara de escritorio con luz LED ajustable y control táctil.",
    price: "COP 150,000",
    stock: 30,
    imageUrl:
      "https://placehold.co/800?text=Lámpara+de+Escritorio+LED&font=montserrat",
  },
  {
    id: 13,
    name: "Cable USB-C a USB-A",
    description:
      "Cable de alta velocidad USB-C a USB-A, ideal para carga y transferencia de datos.",
    price: "COP 50,000",
    stock: 60,
    imageUrl:
      "https://placehold.co/800?text=Cable+USB-C+a+USB-A&font=montserrat",
  },
  {
    id: 14,
    name: "Hub USB 3.0",
    description:
      "Hub USB 3.0 con 4 puertos para expandir la conectividad de tu portátil.",
    price: "COP 115,000",
    stock: 25,
    imageUrl: "https://placehold.co/800?text=Hub+USB+3.0&font=montserrat",
  },
  {
    id: 15,
    name: "Micrófono Condensador USB",
    description:
      "Micrófono condensador con conexión USB, perfecto para podcasting y streaming.",
    price: "COP 270,000",
    stock: 12,
    imageUrl:
      "https://placehold.co/800?text=Micrófono+Condensador+USB&font=montserrat",
  },
];



export default function Home() {
  return (
    <div className="container mx-auto px-0">
      <div className="flex flex-col gap-4 items-center justify-center text-center">
     

        <img
          src="https://placehold.co/1200x400?text=Banner+Principal&font=montserrat"
          alt="Banner Principal"
          className="w-full h-96 object-cover rounded"
        />
           <h1 className="text-4xl font-semibold text-gray-800 mt-4">
          Bienvenido a DevTech Store
        </h1>
        <p className="text-gray-600">
          Tu tienda de tecnología especializada en artículos indispensables para
          <strong> desarrolladores</strong>, como <strong> teclados ergonómicos </strong>, <strong> monitores</strong> de alta
          resolución, <strong>sillas cómodas </strong>y más. Encuentra todo lo que necesitas para
          crear tu espacio de trabajo ideal.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-semibold text-gray-800 mt-8">
          Productos Destacados
        </h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              stock={product.stock}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
