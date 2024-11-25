import React from 'react';
import { format } from 'date-fns';

interface Program {
  time: string;
  title: string;
  host: string;
  description: string;
}

const todayPrograms: Program[] = [
  {
    time: '06:00',
    title: 'Morning Glory',
    host: 'Pastor John',
    description: 'Start your day with uplifting worship and devotion'
  },
  {
    time: '09:00',
    title: 'Gospel Hits',
    host: 'DJ Sarah',
    description: 'The best contemporary gospel music'
  },
  {
    time: '14:00',
    title: 'Worship Hour',
    host: 'Minister David',
    description: 'Deep worship sessions and prayer'
  },
  {
    time: '19:00',
    title: 'Evening Praise',
    host: 'Pastor Mary',
    description: 'End your day with peaceful worship music'
  }
];

const Schedule: React.FC = () => {
  const currentTime = format(new Date(), 'HH:mm');

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-6 text-secondary">Today's Schedule</h3>
      <div className="space-y-4">
        {todayPrograms.map((program) => (
          <div 
            key={program.time}
            className={`p-4 rounded-lg ${
              program.time <= currentTime ? 'bg-gray-50' : 'bg-white'
            } border border-gray-200`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-primary">{program.time}</span>
              {program.time <= currentTime && (
                <span className="text-xs bg-primary/10 text-secondary px-2 py-1 rounded-full">
                  {program.time === currentTime ? 'Now Playing' : 'Completed'}
                </span>
              )}
            </div>
            <h4 className="font-semibold text-secondary">{program.title}</h4>
            <p className="text-sm text-secondary">Host: {program.host}</p>
            <p className="text-sm text-secondary-light mt-1">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;