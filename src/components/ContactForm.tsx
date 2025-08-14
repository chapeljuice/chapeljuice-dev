import { useState, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check for success/error in URL params (Netlify redirects)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      // Show success message
      alert('Thank you! Your message has been sent successfully.');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Let the form submit naturally to Netlify
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-6"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/contact?success=true"
    >
      {/* Netlify form detection */}
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="subject" value="Chapeljuice.dev :: Contact Form, (%{submissionId})" />
      <div className="hidden">
        <input name="bot-field" />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
          Reason for Contacting *
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
        >
          <option value="">Select a reason</option>
          <option value="web-development">Web Development</option>
          <option value="technical-consulting">Technical Consulting</option>
          <option value="engineering-management">Engineering Management</option>
          <option value="suggestion">Suggestion</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-vertical"
          placeholder="Tell me about your project, timeline, and any specific requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors silkscreen-regular ${
          isSubmitting
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-teal-600 text-white hover:bg-teal-700'
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-sm text-gray-500 text-center">
        * Required fields. I respect your privacy and will never share your information.
      </p>
    </form>
  );
};

export default ContactForm; 