import React, { useState, useEffect } from 'react';
import { Download, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import personalData from '../data/personal.json';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typewriterTexts = [
      "Développeur Full Stack",
      "Étudiant Ingénieur",
      "Passionné par la tech",
      "Créateur d'applications"
    ];
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const typewriter = () => {
      const currentText = typewriterTexts[currentIndex];
      
      if (isDeleting) {
        setText(currentText.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % typewriterTexts.length);
        }
      } else {
        setText(currentText.substring(0, text.length + 1));
        if (text === currentText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(typewriter, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [text, currentIndex, isDeleting]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

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
    },
    {
      name: 'Email',
      url: `mailto:${personalData.email}`,
      icon: Mail,
      color: 'hover:text-red-600 dark:hover:text-red-400'
    }
  ];

  return (
    <div>
      {/* Accueil */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-lime-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Bonjour, je suis <br />
                  
                  <span className="text-blue-600 dark:text-blue-400">
                    {personalData.name}
                  </span>
                </h1>
                <div className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium">
                  <span>{text}</span>
                  <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
                    |
                  </span>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                  {personalData.tagline}
                </p>
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={personalData.cv.url}
                  download
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 mr-2" />
                  {personalData.cv.downloadText}
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200"
                >
                  Voir mes projets
                </a>
              </div>
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-600 dark:text-gray-400 transition-all duration-200 ${social.color} hover:shadow-xl transform hover:-translate-y-1`}
                    title={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-2xl animate-float">
                  <div className="text-white text-6xl font-bold">
                    {personalData.name.split(' ').map(name => name[0]).join('')}
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-lime-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="about"><About /></section>
      {/* Compétences */}
      <section id="skills"><Skills /></section>
      {/* Projets */}
      <section id="projects"><Projects /></section>
      {/* Contact */}
      <section id="contact"><Contact /></section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home; 