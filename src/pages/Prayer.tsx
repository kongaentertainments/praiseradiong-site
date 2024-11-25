import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import toast from 'react-hot-toast';
import Comments from '../components/Comments';

const Prayer: React.FC = () => {
  const [state, handleSubmit] = useForm("xldewapn");
  const [prayerRequest, setPrayerRequest] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (prayerRequest.trim() === '') {
      toast.error('Please enter your prayer request');
      return;
    }
    
    try {
      await handleSubmit(e);
      if (state.succeeded) {
        toast.success('Prayer request submitted successfully');
        setPrayerRequest('');
      }
    } catch (error) {
      toast.error('Failed to submit prayer request');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Prayer Request</h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-md p-6 mb-8"
      >
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="prayer-request" className="block text-secondary-light mb-2">
              Share Your Prayer Request
            </label>
            <textarea
              id="prayer-request"
              name="prayer-request"
              value={prayerRequest}
              onChange={(e) => setPrayerRequest(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              rows={6}
              placeholder="Type your prayer request here..."
              required
            />
            <ValidationError 
              prefix="Message" 
              field="prayer-request"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-primary text-secondary font-semibold py-3 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50"
          >
            {state.submitting ? 'Submitting...' : 'Submit Prayer Request'}
          </button>
        </form>
      </motion.div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-secondary mb-6">Community Prayers</h3>
        <Comments />
      </div>
    </div>
  );
};

export default Prayer;