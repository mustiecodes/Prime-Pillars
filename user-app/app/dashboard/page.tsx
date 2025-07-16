'use client';

import { useState } from 'react';
import SubmittedApplications from './tabs/SubmittedApplications';
import ApprovedApplications from './tabs/ApprovedApplications';
// import QueriedApplications from './tabs/QueriedApplications';
import Reports from './tabs/Reports';
import AccountOpening from './tabs/AccountOpening';
// import AccountRecords from './tabs/Reports';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('submitted');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'submitted':
        return <SubmittedApplications />;
      case 'approved':
        return <ApprovedApplications />;
      // case 'queried':
      //   return <QueriedApplications />;
      case 'reports':
        return <Reports />;
      case 'records':
        return <AccountOpening />;
      default:
        return null;
    }
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen text-gray-900">
      <nav className="flex justify-center bg-[#0057A0] space-x-4 py-2">
        <button
          onClick={() => setActiveTab('submitted')}
          className={`px-4 py-2 text-white rounded ${
            activeTab === 'submitted' ? 'bg-[#C8102E]' : 'hover:bg-[#C8102E]'
          }`}
        >
          Submitted Applications
        </button>
        <button
          onClick={() => setActiveTab('approved')}
          className={`px-4 py-2 text-white rounded ${
            activeTab === 'approved' ? 'bg-[#C8102E]' : 'hover:bg-[#C8102E]'
          }`}
        >
          Approved Applications
        </button>
        {/* <button
          onClick={() => setActiveTab('queried')}
          className={`px-4 py-2 text-white rounded ${
            activeTab === 'queried' ? 'bg-[#C8102E]' : 'hover:bg-[#C8102E]'
          }`}
        >
          Queried Applications
        </button> */}
        <button
          onClick={() => setActiveTab('reports')}
          className={`px-4 py-2 text-white rounded ${
            activeTab === 'reports' ? 'bg-[#C8102E]' : 'hover:bg-[#C8102E]'
          }`}
        >
          Reports
        </button>
        <button
          onClick={() => setActiveTab('records')}
          className={`px-4 py-2 text-white rounded ${
            activeTab === 'records' ? 'bg-[#C8102E]' : 'hover:bg-[#C8102E]'
          }`}
        >
          Account Records
        </button>
      </nav>

      <main className="max-w-4xl mx-auto my-10 bg-white p-8 rounded-lg shadow">
        {renderActiveTab()}
      </main>
    </div>
  );
}
