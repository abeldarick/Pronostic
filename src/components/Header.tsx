import { Bell, Menu, User } from 'lucide-react';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">FootPredict</h1>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Dashboard</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Predictions</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Analysis</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Premium</a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-indigo-500">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-full hover:bg-indigo-500">
              <User className="h-6 w-6" />
            </button>
            <button className="md:hidden p-2 rounded-full hover:bg-indigo-500">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}