import React, { useState, useEffect } from 'react';

interface StatsProps {
  title: string;
  value: number;
  unit?: string;
  color?: 'blue' | 'green' | 'red' | 'yellow';
}

interface DashboardData {
  totalIssues: number;
  coverage: number;
  duplications: number;
  tests: number;
}

const DashboardStats: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Couleurs pour les statistiques
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-800 border-blue-300',
    green: 'bg-green-100 text-green-800 border-green-300',
    red: 'bg-red-100 text-red-800 border-red-300',
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  };

  // Données mockées (à remplacer par une vraie API)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulation d'appel API
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setData({
          totalIssues: 31,
          coverage: 0,
          duplications: 0.8,
          tests: 0,
        });
        setError(null);
      } catch (err) {
        setError('Erreur lors du chargement des données');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Composant pour afficher une carte de statistique
  const StatCard: React.FC<{ stat: StatsProps }> = ({ stat }) => {
    const colorClass = colorMap[stat.color || 'blue'];
    
    return (
      <div className={`p-6 rounded-lg border-2 shadow-sm ${colorClass}`}>
        <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{stat.value}</span>
          {stat.unit && <span className="text-sm font-medium">{stat.unit}</span>}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-12">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-gray-600">Chargement des statistiques......</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-400 text-red-700 px-6 py-4 rounded-lg">
        <p className="font-semibold"> Erreur ...... </p>
        <p>{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-yellow-50 border border-yellow-400 text-yellow-700 px-6 py-4 rounded-lg">
        <p>Aucune donnée disponible</p>
      </div>
    );
  }

  const stats: StatsProps[] = [
    { title: 'Issues totales', value: data.totalIssues, color: 'red' },
    { title: 'Couverture de code', value: data.coverage, unit: '%', color: data.coverage > 80 ? 'green' : 'yellow' },
    { title: 'Duplications', value: data.duplications, unit: '%', color: data.duplications < 5 ? 'green' : 'yellow' },
    { title: 'Tests unitaires', value: data.tests, color: 'blue' },
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        Tableau de bord de qualité
        <span className="text-sm font-normal text-gray-500 ml-2">(SonarQube)</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
      
      <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">
        <p>Dernière analyse : 6 juillet 2026 à 16:19</p>
        <p className="mt-1">
          <span className="inline-flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Quality Gate : <strong className="text-green-700">Passed</strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default DashboardStats;