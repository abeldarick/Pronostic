import React from 'react';
import type { Match } from '../types';
import OddsComparison from './OddsComparison';

const SAMPLE_MATCHES: Match[] = [
  {
    id: '1',
    homeTeam: 'Manchester City',
    awayTeam: 'Liverpool',
    date: '2024-03-25T15:00:00',
    competition: 'Premier League',
    prediction: {
      homeScore: 2,
      awayScore: 1,
      over15Probability: 0.85
    },
    odds: [
      {
        provider: 'bet365',
        home: 1.95,
        draw: 3.50,
        away: 3.80,
        over15: 1.45
      },
      {
        provider: 'betway',
        home: 1.90,
        draw: 3.60,
        away: 3.90,
        over15: 1.48
      },
      {
        provider: 'unibet',
        home: 1.92,
        draw: 3.55,
        away: 3.85,
        over15: 1.46
      }
    ]
  },
  {
    id: '2',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    date: '2024-03-26T20:00:00',
    competition: 'La Liga',
    prediction: {
      homeScore: 2,
      awayScore: 2,
      over15Probability: 0.92
    },
    odds: [
      {
        provider: 'bet365',
        home: 2.10,
        draw: 3.40,
        away: 3.30,
        over15: 1.35
      },
      {
        provider: 'betway',
        home: 2.15,
        draw: 3.45,
        away: 3.25,
        over15: 1.38
      },
      {
        provider: 'unibet',
        home: 2.12,
        draw: 3.42,
        away: 3.28,
        over15: 1.36
      }
    ]
  },
  {
    id: '3',
    homeTeam: 'Bayern Munich',
    awayTeam: 'Dortmund',
    date: '2024-03-27T19:30:00',
    competition: 'Bundesliga',
    prediction: {
      homeScore: 3,
      awayScore: 1,
      over15Probability: 0.88
    },
    odds: [
      {
        provider: 'bet365',
        home: 1.75,
        draw: 3.80,
        away: 4.20,
        over15: 1.40
      },
      {
        provider: 'betway',
        home: 1.78,
        draw: 3.85,
        away: 4.15,
        over15: 1.42
      },
      {
        provider: 'unibet',
        home: 1.76,
        draw: 3.82,
        away: 4.18,
        over15: 1.41
      }
    ]
  }
];

export default function UpcomingMatches() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Match Predictions</h2>
      <div className="grid gap-6 lg:grid-cols-1">
        {SAMPLE_MATCHES.map((match) => (
          <div key={match.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2">
              <span className="text-white text-sm font-medium">{match.competition}</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-semibold text-gray-900">{match.homeTeam}</div>
                <div className="text-2xl font-bold text-indigo-600">
                  {match.prediction.homeScore} - {match.prediction.awayScore}
                </div>
                <div className="text-lg font-semibold text-gray-900">{match.awayTeam}</div>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <div>{new Date(match.date).toLocaleDateString()}</div>
                <div className="flex items-center">
                  <span className="font-medium">Over 1.5:</span>
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-full">
                    {(match.prediction.over15Probability * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
              <OddsComparison match={match} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          View All Predictions
        </button>
      </div>
    </div>
  );
}