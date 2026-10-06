"use client";

import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = searchParams.get("query") || "";
    }
    // TODO: Установите начальное значение input из searchParams
  }, [searchParams]);

  // TODO: Реализуйте функцию handleSearch с debounce (300мс) и router.push()
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value; 
    
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // Устанавливаем новый таймер на 300мс
    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      
      if (term) {
        params.set("query", term);
      } else {
        params.delete("query"); // Удаляем параметр, если строка поиска пуста
      }

      router.push(`${pathname}?${params.toString()}`);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  return (
    <div className="mb-6">
      <input
        ref={inputRef}
        type="text"
        defaultValue={searchParams.get("query") || ""}
        onChange={handleSearch}
        placeholder="Поиск по названию..."
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}