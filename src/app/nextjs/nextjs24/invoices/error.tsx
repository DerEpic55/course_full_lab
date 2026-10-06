"use client"; // 1. Обязательно добавляем директиву клиентского компонента

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Произошел сбой в сегменте маршрута:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-red-50 border border-red-200 rounded-lg max-w-md mx-auto mt-8 text-black">
      <h2 className="text-xl font-bold text-red-700 mb-2">
        Что-то пошло не так!
      </h2>
      
      <p className="text-sm text-gray-700 bg-white p-3 rounded border w-full mb-4 font-mono">
        {error.message || "Произошла непредвиденная ошибка при загрузке данных."}
      </p>

      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-red-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors shadow-sm"
      >
        Попробовать снова
      </button>
    </div>
  );
}