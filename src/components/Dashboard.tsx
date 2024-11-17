import React from 'react';
import { BarChart3, Calendar, Search, DollarSign, Settings, Star } from 'lucide-react';
import UpcomingMatches from './UpcomingMatches';

export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState('predictions');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="bg-white rounded-lg shadow p-6">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('predictions')}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md ${
                  activeTab === 'predictions' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <BarChart3 className="h-5 w-5" />
                <span>Prédictions</span>
              </button>
              <button
                onClick={() => setActiveTab('calendar')}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md ${
                  activeTab === 'calendar' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Calendar className="h-5 w-5" />
                <span>Calendrier</span>
              </button>
              <button
                onClick={() => setActiveTab('search')}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md ${
                  activeTab === 'search' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Search className="h-5 w-5" />
                <span>Recherche</span>
              </button>
              <button
                onClick={() => setActiveTab('betting')}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md ${
                  activeTab === 'betting' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <DollarSign className="h-5 w-5" />
                <span>Paris</span>
              </button>
              <button
                onClick={() => setActiveTab('favorites')}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md ${
                  activeTab === 'favorites' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Star className="h-5 w-5" />
                <span>Favoris</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md ${
                  activeTab === 'settings' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Settings className="h-5 w-5" />
                <span>Paramètres</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {activeTab === 'predictions' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold mb-4">Statistiques Rapides</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <div className="text-indigo-600 text-sm font-medium">Prédictions Réussies</div>
                      <div className="text-2xl font-bold">85%</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-green-600 text-sm font-medium">Plus de 1.5 buts</div>
                      <div className="text-2xl font-bold">92%</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-purple-600 text-sm font-medium">Matchs Analysés</div>
                      <div className="text-2xl font-bold">1,234</div>
                    </div>
                  </div>
                </div>
                <UpcomingMatches />
              </div>
            )}

            {activeTab === 'search' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Recherche de Matchs</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="Rechercher une équipe..."
                      className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                      Rechercher
                    </button>
                  </div>
                  <div className="flex gap-4">
                    <select className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option value="">Toutes les compétitions</option>
                      <option value="premier-league">Premier League</option>
                      <option value="liga">La Liga</option>
                      <option value="bundesliga">Bundesliga</option>
                    </select>
                    <select className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option value="">Toutes les dates</option>
                      <option value="today">Aujourd'hui</option>
                      <option value="tomorrow">Demain</option>
                      <option value="week">Cette semaine</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'betting' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Comparaison des Cotes</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['bet365', 'betway', 'unibet'].map((site) => (
                      <div key={site} className="border rounded-lg p-4">
                        <h3 className="font-semibold mb-2 capitalize">{site}</h3>
                        <div className="text-sm text-gray-600">
                          Meilleure cote du jour: <span className="font-medium text-green-600">2.15</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}