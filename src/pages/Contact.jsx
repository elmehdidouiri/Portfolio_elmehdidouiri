import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import personalData from '../data/personal.json';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_e9hqcew';
const TEMPLATE_ID = 'template_t7niulf';
const PUBLIC_KEY = 'OgBnuzp-8rivan2tp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 3000);
      })
      .catch(() => {
        setIsSubmitting(false);
        setSubmitStatus('error');
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: personalData.email,
      link: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalData.email}`,
      color: 'text-purple-500'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: personalData.phone,
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: personalData.location,
      link: null,
      color: 'text-blue-500'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: personalData.social.github,
      icon: Github,
      color: 'hover:text-gray-600 dark:hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      url: personalData.social.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Contactez-moi
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de projets, d'opportunités ou simplement échanger autour de la tech et de l'innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <MessageSquare className="w-6 h-6 mr-2 text-blue-500" />
              Envoyez-moi un message
            </h2>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg">
                Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg">
                Une erreur est survenue. Merci de réessayer ou de me contacter directement par email.
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-white"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-white"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-white"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-white resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-2 text-purple-500" />
                Mes coordonnées
              </h2>
              
              {contactInfo.map((info, idx) => (
                <a
                  key={info.title}
                  href={info.link || undefined}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-100/60 to-purple-100/60 dark:from-blue-900/60 dark:to-purple-900/60 shadow hover:scale-105 transition-transform duration-200"
                  target={info.link ? '_blank' : undefined}
                  rel={info.link ? 'noopener noreferrer' : undefined}
                >
                  <info.icon className={`w-6 h-6 ${info.color}`} />
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{info.title}</div>
                    <div className="text-gray-600 dark:text-gray-300">{info.value}</div>
                  </div>
                </a>
              ))}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg hover:scale-110 transition-transform duration-200 ${link.color}`}
                    title={link.name}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Localisation
              </h2>
              
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-semibold">{personalData.location}</p>
                  <p className="text-sm opacity-90">Maroc</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à collaborer ?
            </h2>
            <p className="text-xl opacity-90 mb-6">
              Je suis disponible pour des projets freelance, des opportunités de stage ou d'emploi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={personalData.cv.url}
                download
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Télécharger mon CV
              </a>
              <a
                href="/projects"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Voir mes projets
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 