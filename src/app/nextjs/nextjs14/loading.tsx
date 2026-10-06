export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-black">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="h-10 bg-gray-700 rounded w-1/3 mx-auto mb-8 animate-pulse"></div>

        <div className="bg-white p-6 rounded-lg shadow-md w-full animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
          
          <div className="p-4 bg-gray-50 rounded space-y-4">
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>

        <div className="h-4 bg-gray-700 rounded w-1/4 mx-auto mt-4 animate-pulse"></div>
      </div>
    </main>
  );
}