export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  competition: string;
  prediction: {
    homeScore: number;
    awayScore: number;
    over15Probability: number;
  };
  odds?: {
    provider: string;
    home: number;
    draw: number;
    away: number;
    over15: number;
  }[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  isPremium: boolean;
}

export interface SearchEngine {
  id: string;
  name: string;
  baseUrl: string;
  isActive: boolean;
}

export interface BettingSite {
  id: string;
  name: string;
  logo: string;
  baseUrl: string;
  isActive: boolean;
}