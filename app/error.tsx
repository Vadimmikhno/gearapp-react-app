'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Логирование ошибки в аналитику или сервис мониторинга
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center">
      <h2 className="text-3xl font-bold mb-4 text-red-600">Что-то пошло не так</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Произошла ошибка при загрузке страницы. Пожалуйста, попробуйте еще раз.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Повторить
      </button>
    </div>
  );
} 