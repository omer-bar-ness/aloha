'use client';

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  
  const reset = () => {
    setCount(0);
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Hello Counter App</h1>
        
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div className="text-center mb-8">
          <p className="text-xl font-medium text-gray-700">
            {name ? `Hello, ${name}!` : 'Hello, friend!'}
          </p>
        </div>
        
        <div className="text-center mb-8">
          <p className="text-4xl font-bold text-blue-600 mb-2">{count}</p>
          <p className="text-sm text-gray-500">Current Count</p>
        </div>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Decrement
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Reset
          </button>
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
