'use client';

import { useState } from 'react';
import { tabComponents } from './tabs/index';

const tabs = [
  { label: 'Manage PFAs', key: 'pfa' },
  { label: 'Manage Staff Users', key: 'staff' },
  { label: 'Reverse Documents', key: 'reverse' },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('pfa');
  const ActiveTabComponent = tabComponents[activeTab];

  return (
    <main className="min-h-screen bg-[#f5f5f5] font-sans">
      <header className="bg-gradient-to-r from-[#0057A0] to-[#C8102E] text-white p-6 text-center">
        <h1 className="text-xl font-bold">Prime Pillars – Admin Panel</h1>
      </header>

      <div className="max-w-[1000px] mx-auto bg-white p-8 rounded-lg shadow-md mt-8">
        <div className="flex gap-4 border-b-2 border-gray-300 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`font-semibold pb-2 ${
                activeTab === tab.key
                  ? 'border-b-4 border-[#0057A0] text-[#0057A0]'
                  : 'border-b-4 border-transparent text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <section>{ActiveTabComponent && <ActiveTabComponent />}</section>
      </div>
    </main>
  );
}
