import React from 'react';
import { User, UserRole } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface RoleDistributionChartProps {
  users: User[];
}

// Helper function to calculate SVG path for a pie slice
const getArcPath = (cx: number, cy: number, radius: number, startAngle: number, endAngle: number): string => {
  const start = {
    x: cx + radius * Math.cos(startAngle),
    y: cy + radius * Math.sin(startAngle),
  };
  const end = {
    x: cx + radius * Math.cos(endAngle),
    y: cy + radius * Math.sin(endAngle),
  };
  const largeArcFlag = endAngle - startAngle <= Math.PI ? '0' : '1';
  
  // Handling full circle case
  if (endAngle - startAngle >= 2 * Math.PI - 0.001) {
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 1 1 ${end.x - 0.01} ${end.y} Z`;
  }

  return [
    'M', cx, cy,
    'L', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 1, end.x, end.y,
    'Z',
  ].join(' ');
};

const RoleDistributionChart: React.FC<RoleDistributionChartProps> = ({ users }) => {
  const { t } = useLanguage();

  const roleCounts = users.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {} as Record<UserRole, number>);

  const students = roleCounts[UserRole.STUDENT] || 0;
  const teachers = roleCounts[UserRole.TEACHER] || 0;
  const total = students + teachers;

  if (total === 0) {
    return null; // Don't render if there are no students or teachers
  }

  const data = [
    { role: UserRole.STUDENT, count: students, color: '#00B4D8', label: t('student') },
    { role: UserRole.TEACHER, count: teachers, color: '#0077B6', label: t('teacher') },
  ].filter(item => item.count > 0);

  let currentAngle = -Math.PI / 2;
  const radius = 80;
  const cx = 100;
  const cy = 100;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-brand-dark mb-4 text-center">{t('userDistribution')}</h3>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <svg width="200" height="200" viewBox="0 0 200 200" aria-labelledby="chart-title" role="img">
          <title id="chart-title">{t('userDistribution')}</title>
          {data.map((slice, index) => {
            const sliceAngle = (slice.count / total) * 2 * Math.PI;
            const pathData = getArcPath(cx, cy, radius, currentAngle, currentAngle + sliceAngle);
            currentAngle += sliceAngle;
            return <path key={index} d={pathData} fill={slice.color} />;
          })}
        </svg>
        <div className="space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: item.color }} aria-hidden="true"></span>
              <span className="font-semibold text-gray-700">{item.label}:</span>
              <span className="ml-2 text-gray-600">{item.count} ({((item.count / total) * 100).toFixed(1)}%)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleDistributionChart;