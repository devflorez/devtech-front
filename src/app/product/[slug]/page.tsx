import ProductDetails from "@/components/app/product/product-details";
import FeaturedProducts from "@/components/app/product/featured-products";
export default function Product({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <div className="container flex flex-col gap-12 mx-auto px-0 min-h-screen">
      <ProductDetails 
        slug={slug}
      />
      <FeaturedProducts />
    </div>
  );
}
