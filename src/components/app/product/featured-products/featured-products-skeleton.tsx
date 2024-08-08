import ProductSkeleton from "../../home/product/product-skeleton";

const FeaturedProductsSkeleton = () => {
    return (
      <section className="flex flex-col gap-4 justify-center ">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Productos destacados
        </h2>
        <div className="flex overflow-x-auto gap-2 w-full">
          {[...Array(8)].map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      </section>
    );
  };

export default FeaturedProductsSkeleton;