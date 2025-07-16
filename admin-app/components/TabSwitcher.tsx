'use client';

type Tab = {
  label: string;
  key: string;
};

type TabSwitcherProps = {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (key: string) => void;
};

export default function TabSwitcher({ tabs, activeTab, onTabChange }: TabSwitcherProps) {
  return (
    <div className="flex space-x-4 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`px-4 py-2 text-sm rounded-full transition ${
            activeTab === tab.key
              ? 'bg-blue-600 text-white shadow'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
