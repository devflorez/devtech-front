"use client";
import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";
const WAIT_INTERVAL = 1000;

const Search = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();


  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    params.set("page", "1");

    if (pathname !== "/") {
      router.push(`/?${params.toString()}`);
    } else {
      replace(`/?${params.toString()}`);
    }
  }, WAIT_INTERVAL);



  return (
    <div className={`flex items-center relative`}>
      <MagnifyingGlass className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input
        id="search"
        type="text"
        placeholder="Buscar producto"
        defaultValue={searchParams.get("search") ?? ""}
        onChange={(e) => handleSearch(e.target.value)}
        name="search"
        className="max-w-72 w-full sm:w-80"
      />
    </div>
  );
};

export default Search;
