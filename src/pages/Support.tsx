import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Support: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    amount: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your support! We will contact you soon.');
    setForm({ name: '', email: '', amount: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Support Our Ministry</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-xl font-semibold text-secondary mb-4">Why Support Us?</h3>
          <p className="text-secondary-light mb-4">
            Your support helps us continue broadcasting gospel music and spreading the message of hope
            across Nigeria and beyond. We rely on supporters like you to:
          </p>
          <ul className="space-y-2 text-secondary-light">
            <li>• Maintain our broadcasting equipment</li>
            <li>• Develop new programs</li>
            <li>• Reach more listeners</li>
            <li>• Support our team</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-xl font-semibold text-secondary mb-4">Make a Donation</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-secondary-light mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-secondary-light mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="amount" className="block text-secondary-light mb-1">Amount (₦)</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-secondary-light mb-1">Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-secondary font-semibold py-2 rounded-md hover:bg-primary-dark transition-colors"
            >
              Support Now
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Support;