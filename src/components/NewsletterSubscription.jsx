import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Initialize Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// Initialize Resend client
const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// List of disposable email domains
const DISPOSABLE_DOMAINS = ['tempmail.com', 'temp-mail.org', 'guerrillamail.com'];
// Rate limiting
const RATE_LIMIT_MINUTES = 5;
const MAX_ATTEMPTS = 3;

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [lastAttemptTime, setLastAttemptTime] = useState(null);

  useEffect(() => {
    // Reset attempts after rate limit period
    if (lastAttemptTime) {
      const timeDiff = Date.now() - lastAttemptTime;
      if (timeDiff >= RATE_LIMIT_MINUTES * 60 * 1000) {
        setAttempts(0);
        setLastAttemptTime(null);
      }
    }
  }, [lastAttemptTime]);

  const validateEmail = (email) => {
    // Basic format validation
    if (!EMAIL_REGEX.test(email)) {
      return 'Please enter a valid email address';
    }

    // Check for disposable email domains
    const domain = email.split('@')[1].toLowerCase();
    if (DISPOSABLE_DOMAINS.includes(domain)) {
      return 'Please use a valid non-disposable email address';
    }

    // Check for suspicious patterns
    if (email.includes('admin') || email.includes('support') || email.includes('info@')) {
      return 'This email address is not allowed';
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check rate limiting
    if (attempts >= MAX_ATTEMPTS) {
      const timeDiff = Date.now() - lastAttemptTime;
      if (timeDiff < RATE_LIMIT_MINUTES * 60 * 1000) {
        setStatus('rateLimit');
        return;
      }
    }

    // Validate email
    const validationError = validateEmail(email);
    if (validationError) {
      setStatus('validation');
      setAttempts(prev => prev + 1);
      setLastAttemptTime(Date.now());
      return;
    }

    setLoading(true);
    setStatus('');

    try {
      // Sanitize email input
      const sanitizedEmail = email.trim().toLowerCase();

      // Insert subscriber into Supabase
      const { error: dbError } = await supabase
        .from('subscribers')
        .insert([{ 
          email: sanitizedEmail,
          // subscribed_at: new Date().toISOString(),
          // user_agent: navigator.userAgent
        }]);

      if (dbError) throw new Error(`Database error: ${dbError.message}`);

      // Send welcome email via Resend
      await resend.emails.send({
        from: 'Newsletter <newsletter@aitomates.com>',
        to: sanitizedEmail,
        subject: 'Welcome to Our Daily AI Newsletter!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #333;">Welcome to Our Newsletter!</h1>
            <p style="color: #555; line-height: 1.6;">
              Thank you for subscribing to our daily AI updates and new AI tools newsletter.
              Stay tuned for the latest insights, tools, and innovations in the AI world!
            </p>
            <p style="color: #555; line-height: 1.6;">
              If you have any questions or feedback, feel free to reply to this email.
            </p>
            <p style="color: #555; line-height: 1.6;">
              Best regards,<br />
              The AI Updates Team
            </p>
            <p style="font-size: 12px; color: #999; text-align: center; margin-top: 20px;">
              <a href="https://yourdomain.com/unsubscribe" style="color: #999;">Unsubscribe</a>
            </p>
          </div>
        `,
      });

      setStatus('success');
      setEmail('');
      // Reset attempts on successful subscription
      setAttempts(0);
      setLastAttemptTime(null);
    } catch (error) {
      console.error('Error:', error);
      setStatus(error.message.includes('Database') ? 'dbError' : 'emailError');
      setAttempts(prev => prev + 1);
      setLastAttemptTime(Date.now());
    } finally {
      setLoading(false);
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'success':
        return { text: 'Thank you for subscribing! Check your email for a welcome message.', class: 'text-color-4' };
      case 'dbError':
        return { text: 'Failed to save your subscription. Please try again.', class: 'text-color-3' };
      case 'emailError':
        return { text: 'Subscription saved, but failed to send welcome email. Please check your inbox later.', class: 'text-color-3' };
      case 'validation':
        return { text: validateEmail(email), class: 'text-color-3' };
      case 'rateLimit':
        return { 
          text: `Too many attempts. Please try again in ${RATE_LIMIT_MINUTES} minutes.`,
          class: 'text-color-3'
        };
      default:
        return null;
    }
  };

  return (
    <div className="mt-10 w-full max-w-[38rem] mx-auto">
      <h3 className="text-2xl font-semibold text-center mb-4">Subscribe to Our Daily Newsletter</h3>
      <p className="text-n-4 text-center mb-6">Stay updated with latest AI Updates and New AI Tools</p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          pattern={EMAIL_REGEX.source}
          maxLength={100}
          className="flex-1 px-6 py-3 bg-n-8/40 backdrop-blur border border-n-6 rounded-2xl text-n-1 placeholder:text-n-4 focus:outline-none focus:border-color-1"
          aria-label="Email address for newsletter"
          autoComplete="email"
        />
        <button
          type="submit"
          disabled={loading || (attempts >= MAX_ATTEMPTS && Date.now() - lastAttemptTime < RATE_LIMIT_MINUTES * 60 * 1000)}
          className={`button px-8 py-3 bg-color-1 rounded-2xl text-n-1 hover:bg-color-1/90 transition-colors ${
            loading || (attempts >= MAX_ATTEMPTS && Date.now() - lastAttemptTime < RATE_LIMIT_MINUTES * 60 * 1000)
              ? 'opacity-50 cursor-not-allowed'
              : ''
          }`}
          aria-label="Subscribe to our daily newsletter"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {status && (
        <p className={`text-center mt-4 ${getStatusMessage().class}`}>
          {getStatusMessage().text}
        </p>
      )}
    </div>
  );
};

export default NewsletterSubscription;