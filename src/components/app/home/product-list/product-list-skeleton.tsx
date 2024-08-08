import ProductSkeleton from "../product/product-skeleton";

const ProductListSkeleton = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-semibold text-gray-800 mt-8">
        Productos
      </h2>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </div>
    </div>
  );
};


export default ProductListSkeleton;