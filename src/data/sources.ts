import type { SearchEngine, BettingSite } from '../types';

export const searchEngines: SearchEngine[] = [
  {
    id: 'google',
    name: 'Google',
    baseUrl: 'https://www.google.com',
    isActive: true
  },
  {
    id: 'bing',
    name: 'Bing',
    baseUrl: 'https://www.bing.com',
    isActive: true
  },
  {
    id: 'yahoo',
    name: 'Yahoo',
    baseUrl: 'https://search.yahoo.com',
    isActive: true
  },
  {
    id: 'duckduckgo',
    name: 'DuckDuckGo',
    baseUrl: 'https://duckduckgo.com',
    isActive: true
  },
  {
    id: 'baidu',
    name: 'Baidu',
    baseUrl: 'https://www.baidu.com',
    isActive: true
  }
];

export const bettingSites: BettingSite[] = [
  {
    id: 'bet365',
    name: 'Bet365',
    logo: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=100&h=100&fit=crop',
    baseUrl: 'https://www.bet365.com',
    isActive: true
  },
  {
    id: 'betway',
    name: 'Betway',
    logo: 'https://images.unsplash.com/photo-1562280963-8a5475740a10?w=100&h=100&fit=crop',
    baseUrl: 'https://www.betway.com',
    isActive: true
  },
  {
    id: 'unibet',
    name: 'Unibet',
    logo: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=100&h=100&fit=crop',
    baseUrl: 'https://www.unibet.com',
    isActive: true
  }
];