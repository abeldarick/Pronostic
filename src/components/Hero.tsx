import { ArrowRight, BarChart3, Brain, Target } from 'lucide-react';
import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
            Predict Football Matches with
            <span className="block text-indigo-200">Advanced AI Technology</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl text-indigo-200 sm:text-2xl md:mt-5 md:max-w-3xl">
            Get accurate predictions for match scores and over 1.5 goals probability using our advanced machine learning algorithms.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600">
              View Predictions
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI-Powered Analysis</h3>
            <p className="text-indigo-200">Advanced machine learning algorithms analyze historical data and current form.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Precise Predictions</h3>
            <p className="text-indigo-200">Get accurate match score predictions and over 1.5 goals probability.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Detailed Statistics</h3>
            <p className="text-indigo-200">Comprehensive stats and analysis for informed decision making.</p>
          </div>
        </div>
      </div>
    </div>
  );
}