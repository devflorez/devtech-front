import { Skeleton } from "@/components/ui/skeleton";

const ProductSkeleton = () => {
    return (
      <div className="flex flex-col gap-2 border-gray-100 rounded-md p-4 min-w-72">
        <Skeleton className="w-full h-48" />
        <div className="flex flex-col gap-2 justify-between">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    );
  };

export default ProductSkeleton;