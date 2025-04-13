"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const {replace} = useRouter();

    const handleSearch = useDebouncedCallback ((term:string) {
            console.log(term)
            const params = new URLSearchParams(searchParams)
            if (term){
                params.set('query', term)
            } else {
                params.delete('query')
            } replace (`${pathName}?${params.toString()}`);
    },300)


  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only peer-focus:text-purple-500">
        Search
      </label>
      <input
        onChange={(e)=>{
            handleSearch(e.target.value)
        }}

        defaultValue={searchParams.get('query') ?? ''}
        className="peer focus:outline-none block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>


      {/* tips---peer invalid and valid */}

      {/* <div>
        <input
          type="email"
          required
          className="peer border p-2 invalid:border-red-500"
        />
        <p className="mt-1 text-sm text-red-500 invisible peer-invalid:visible">
          Please enter a valid email.
        </p>
      </div> */}
    </div>
  );
}
