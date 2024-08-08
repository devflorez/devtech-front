import ProductDetails from "@/components/app/product/product-details/product-details";
import ProductDetailsSkeleton from "@/components/app/product/product-details/product-details-skeleton";
import FeaturedProducts from "@/components/app/product/featured-products/featured-products";
import FeaturedProductsSkeleton from "@/components/app/product/featured-products/featured-products-skeleton";
import { Suspense } from "react";
export default function Product({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <div className="container flex flex-col gap-12 mx-auto px-0 min-h-screen">
      <Suspense fallback={<ProductDetailsSkeleton />}>
        <ProductDetails slug={slug} />
      </Suspense>
      <Suspense fallback={<FeaturedProductsSkeleton />}>
        <FeaturedProducts />
      </Suspense>
    </div>
  );
}
