import { Suspense } from "react";
import { fetchStats } from "./data";
import Header from "./Header";
import Stats from "./Stats";
import RevenueChart from "./RevenueChart";


// ЗАДАНИЕ: Все данные загружаются на уровне страницы
// Пользователь видит пустую страницу пока не загрузятся ВСЕ данные
// TODO: Перенести fetchRevenue() в компонент RevenueChart
// TODO: Обернуть RevenueChart в Suspense с skeleton fallback
// TODO: Убрать проп data из RevenueChart

export default async function DashboardPage() {
  // Параллельная загрузка данных на уровне страницы
  const statsData = await fetchStats();

  return (
 <main className="min-h-screen p-8 bg-gray-50 text-black">
      <div className="max-w-4xl mx-auto">
        <Header />
        <Stats data={statsData} />
        
        {/* Оборачиваем в Suspense, убираем проп data. 
            Простая разметка skeleton-анимации прямо в пропсе fallback */}
        <Suspense 
          fallback={
            <div className="mt-6 bg-white p-6 rounded-xl shadow-sm animate-pulse">
              <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
              <div className="space-y-3">
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
              </div>
            </div>
          }
        >
          <RevenueChart />
        </Suspense>
      </div>
    </main>
  );
}