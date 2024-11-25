import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';

interface Comment {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ name: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    const comment: Comment = {
      id: nanoid(),
      name: newComment.name,
      message: newComment.message,
      timestamp: new Date().toISOString()
    };

    setComments([comment, ...comments]);
    setNewComment({ name: '', message: '' });
    toast.success('Comment added successfully');
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-secondary-light mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={newComment.name}
              onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-secondary-light mb-1">Comment</label>
            <textarea
              id="message"
              value={newComment.message}
              onChange={(e) => setNewComment({ ...newComment, message: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-secondary font-semibold py-2 rounded-md hover:bg-primary-dark transition-colors"
          >
            Add Comment
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-secondary">{comment.name}</h4>
              <span className="text-xs text-secondary-light">
                {new Date(comment.timestamp).toLocaleDateString()}
              </span>
            </div>
            <p className="text-secondary-light">{comment.message}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Comments;