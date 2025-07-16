'use client';

import { useState } from 'react';
import { tabComponents } from './tabs/index';
import TabSwitcher from '@/components/TabSwitcher';

const tabs = [
  { label: 'Staff Management', key: 'staff' },
  { label: 'PFA Settings', key: 'pfa' },
  { label: 'Reverse Documents', key: 'reverse' },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('staff');
  const ActiveTabComponent = tabComponents[activeTab];

  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>

      <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <section className="mt-4">
        {ActiveTabComponent && <ActiveTabComponent />}
      </section>
    </main>
  );
}
