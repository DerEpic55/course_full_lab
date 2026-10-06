"use client"

import { useState, useEffect } from "react";
import { getUsers, type User } from "./data";
import { getTasks, type Task } from "./data";

// TODO: Добавьте loading state используя useState и useEffect

export default function DashboardContent() {
  // Данные загружаются, но loading state не показывается
  const [users, setUsers] = useState<User[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const [fetchedUsers, fetchedTasks] = await Promise.all([
          getUsers(),
          getTasks(),
        ]);
        setUsers(fetchedUsers);
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="space-y-2">
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="space-y-2">
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 text-black">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">User List</h2>
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-3 bg-gray-50 rounded">
              {user.name} <span className="text-sm text-gray-400">({user.role})</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-semibold mb-4">Task List</h2>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task.id} className="p-3 bg-gray-50 rounded">
              {task.title} — <span className="text-indigo-600 font-medium">{task.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}