import ProductDetails from "@/components/app/product/product-details";

export default function Product({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <div className="container mx-auto px-0 min-h-screen">
      <ProductDetails 
        slug={slug}
      />
    </div>
  );
}
