import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    id: 1,
    name: 'Pastor John',
    role: 'Morning Show Host',
    bio: 'Leading the Morning Glory show with over 15 years of ministry experience.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'DJ Sarah',
    role: 'Music Director',
    bio: 'Curating the best gospel music from around the world.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Minister David',
    role: 'Worship Leader',
    bio: 'Leading our afternoon worship sessions with anointed praise.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    name: 'Pastor Mary',
    role: 'Evening Show Host',
    bio: 'Bringing peace and inspiration to your evenings.',
    image: 'https://via.placeholder.com/150'
  }
];

const Team: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Meet Our Team</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-secondary">{member.name}</h3>
              <p className="text-primary font-medium mt-1">{member.role}</p>
              <p className="mt-2 text-secondary-light">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;