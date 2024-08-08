import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailsSkeleton = () => {
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start justify-start">
        <Skeleton className="w-full h-96 sm:h-96" />
        <div className="flex flex-col gap-6 justify-start items-start">
          <header className="flex flex-col gap-2 justify-start items-start border-b border-gray-200 pb-4 w-full">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-8 w-1/4" />
          </header>
          <Skeleton className="h-96 w-full" />
          <footer className="flex flex-col gap-2 justify-start items-start border-t border-gray-200 pt-4 w-full">
            <Skeleton className="h-10 w-full" />
          </footer>
        </div>
      </section>
    );
  };

export default ProductDetailsSkeleton;