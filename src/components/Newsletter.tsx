import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Newsletter: React.FC = () => {
  const [state, handleSubmit] = useForm("xldewapn");
  const [email, setEmail] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error('Please enter your email');
      return;
    }

    try {
      await handleSubmit(e);
      if (state.succeeded) {
        toast.success('Thank you for subscribing!');
        setEmail('');
      }
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <div className="flex">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="px-3 py-2 rounded-l text-secondary w-full focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={state.submitting}
          className="bg-primary px-4 py-2 rounded-r hover:bg-primary-dark text-secondary font-semibold transition-colors disabled:opacity-50"
        >
          {state.submitting ? 'Subscribing...' : 'Subscribe'}
        </motion.button>
      </div>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        className="text-sm text-red-500 mt-1"
      />
    </form>
  );
};

export default Newsletter;