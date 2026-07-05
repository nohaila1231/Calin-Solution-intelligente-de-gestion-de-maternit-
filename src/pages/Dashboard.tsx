import React from 'react';
import DashboardStats from '../components/DashboardStats';

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <DashboardStats />
      </div>
    </div>
  );
};

export default DashboardPage;