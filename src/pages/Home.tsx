import React from 'react';
import RadioPlayer from '../components/RadioPlayer';
import Schedule from '../components/Schedule';

const Home: React.FC = () => {
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-secondary mb-4">Welcome to PraiseRadioNG.co</h2>
        <p className="text-secondary-light">Your #1 Source for Gospel Music and Inspiration</p>
      </div>
      
      <RadioPlayer />
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-secondary">About Us</h3>
          <p className="text-secondary-light">
            PraiseRadioNG.co is dedicated to spreading the message of hope and faith through gospel music.
            We broadcast 24/7, bringing you the best in contemporary and traditional gospel music from
            Nigeria and around the world.
          </p>
          <div className="mt-4">
            <h4 className="font-semibold mb-2 text-secondary">Our Mission</h4>
            <p className="text-secondary-light">
              To inspire and uplift through the power of gospel music, reaching hearts and transforming
              lives across Nigeria and beyond.
            </p>
          </div>
        </div>
        
        <Schedule />
      </div>
    </>
  );
};

export default Home;