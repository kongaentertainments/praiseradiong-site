import React from 'react';
import { motion } from 'framer-motion';

const programs = [
  {
    id: 1,
    name: 'Morning Glory',
    time: '6:00 AM - 9:00 AM',
    host: 'Pastor John',
    description: 'Start your day with uplifting worship and devotion.',
    days: 'Monday - Friday'
  },
  {
    id: 2,
    name: 'Gospel Hits',
    time: '9:00 AM - 2:00 PM',
    host: 'DJ Sarah',
    description: 'The best contemporary gospel music from Nigeria and around the world.',
    days: 'Monday - Saturday'
  },
  {
    id: 3,
    name: 'Worship Hour',
    time: '2:00 PM - 7:00 PM',
    host: 'Minister David',
    description: 'Deep worship sessions and prayer.',
    days: 'Daily'
  },
  {
    id: 4,
    name: 'Evening Praise',
    time: '7:00 PM - 10:00 PM',
    host: 'Pastor Mary',
    description: 'End your day with peaceful worship music and inspiration.',
    days: 'Daily'
  }
];

const Programs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Our Programs</h2>
      
      <div className="space-y-6">
        {programs.map((program) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">{program.name}</h3>
                  <p className="text-primary font-medium">{program.time}</p>
                  <p className="text-secondary-light mt-1">Host: {program.host}</p>
                </div>
                <span className="bg-primary-light text-secondary px-3 py-1 rounded-full text-sm">
                  {program.days}
                </span>
              </div>
              <p className="mt-4 text-secondary-light">{program.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Programs;