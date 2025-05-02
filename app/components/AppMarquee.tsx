import React from 'react';

// Example app data for the marquee/ribbon with inline SVG icons
const apps = [
  { 
    id: 1, 
    name: 'Health Tracker', 
    description: 'Fitness & health monitoring',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="#3b82f6" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  { 
    id: 2, 
    name: 'Finance Master', 
    description: 'Smart money management',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="#8b5cf6" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    id: 3, 
    name: 'TravelBuddy', 
    description: 'Your travel companion',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="#10b981" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    )
  },
  { 
    id: 4, 
    name: 'Food Delivery', 
    description: 'Order favorite meals',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="#ef4444" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    id: 5, 
    name: 'Music Player', 
    description: 'Premium audio experience',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="#f59e0b" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    )
  },
  { 
    id: 6, 
    name: 'Weather Now', 
    description: 'Real-time forecasts',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="#6366f1" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  { 
    id: 7, 
    name: 'Note Keeper', 
    description: 'Organize your thoughts',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="#ec4899" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  { 
    id: 8, 
    name: 'Chat App', 
    description: 'Connect with friends',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="#14b8a6" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
];

export default function AppMarquee() {
  // Duplicate the apps array for infinite animation
  const allApps = [...apps, ...apps];
  
  return (
    <div className="app-marquee-container overflow-hidden py-4 mt-10 mb-6 border-y border-[#1a2235]/20">
      <div className="app-marquee">
        {allApps.map((app, index) => (
          <div 
            key={`${app.id}-${index}`} 
            className="app-card w-52 h-64 mx-2 rounded-xl bg-[var(--card-background)] border border-[var(--border-color)] backdrop-blur-sm relative overflow-hidden"
          >
            <div className="p-4 flex flex-col items-center relative z-10 h-full">
              <div className="w-16 h-16 mb-3 rounded-xl bg-gray-800 flex items-center justify-center shadow-lg overflow-hidden">
                {app.icon}
              </div>
              <h3 className="text-base font-medium text-white">{app.name}</h3>
              <p className="text-xs text-gray-400 mt-1 text-center">{app.description}</p>
              <div className="mt-auto mb-2">
                <button className="btn border border-gray-600 hover:bg-gray-800 text-gray-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 