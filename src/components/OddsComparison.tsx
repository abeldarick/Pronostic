import React from 'react';
import type { Match } from '../types';
import { bettingSites } from '../data/sources';

interface OddsComparisonProps {
  match: Match;
}

export default function OddsComparison({ match }: OddsComparisonProps) {
  const odds = match.odds || [];

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-4">
      <h3 className="text-lg font-semibold mb-4">Betting Odds Comparison</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Provider</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-500">Home</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-500">Draw</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-500">Away</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-500">Over 1.5</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bettingSites.map((site) => {
              const siteOdds = odds.find(o => o.provider === site.id);
              return (
                <tr key={site.id}>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <img src={site.logo} alt={site.name} className="w-6 h-6 rounded mr-2" />
                      {site.name}
                    </div>
                  </td>
                  <td className="px-4 py-2 text-center">{siteOdds?.home.toFixed(2) || '-'}</td>
                  <td className="px-4 py-2 text-center">{siteOdds?.draw.toFixed(2) || '-'}</td>
                  <td className="px-4 py-2 text-center">{siteOdds?.away.toFixed(2) || '-'}</td>
                  <td className="px-4 py-2 text-center">{siteOdds?.over15.toFixed(2) || '-'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}