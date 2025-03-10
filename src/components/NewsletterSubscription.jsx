import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email }]);

      if (error) throw error;

      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[950px] mx-auto mt-10 p-8 rounded-2xl bg-n-8/40 backdrop-blur border border-n-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
        <p className="text-n-4">Stay updated with our latest AI innovations and industry insights</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-6 py-3 bg-n-7 border border-n-6 rounded-lg text-n-1 placeholder:text-n-4 focus:outline-none focus:border-color-1"
        />
        <button
          type="submit"
          disabled={loading}
          className={`button px-8 py-3 bg-color-1 rounded-lg text-n-1 hover:bg-color-1/90 transition-colors ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {status === 'success' && (
        <p className="text-center mt-4 text-color-4">Thank you for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="text-center mt-4 text-color-3">Something went wrong. Please try again.</p>
      )}
    </div>
  );
};

export default NewsletterSubscription;