import React from 'react';
import { GraduationCap, Target, Heart, MapPin, Calendar } from 'lucide-react';
import personalData from '../data/personal.json';
import educationData from '../data/education.json';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            À propos de moi
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mon parcours académique, mes ambitions et ma passion pour la technologie, à travers une présentation moderne et authentique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            {/* Profile Section */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-transparent">
                  <img src="/D.png" alt="Logo El Mehdi Douiri" className="w-full h-full object-contain rounded-full" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {personalData.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {personalData.role}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>{personalData.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <span>4ème année d'ingénierie</span>
                </div>
              </div>
            </div>

            {/* About Me */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-red-500" />
                Qui suis-je ?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {personalData.about.summary}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {personalData.about.passion}
              </p>
            </div>

            {/* Ambitions */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-500" />
                Mes ambitions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {personalData.about.ambitions}
              </p>
            </div>
          </div>

          {/* Right Column - Education Timeline */}
          <div className="space-y-8">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-green-500" />
                Parcours académique
              </h3>
              
              <div className="space-y-6">
                {educationData.map((education, index) => (
                  <div key={education.id} className="relative">
                    {/* Timeline line */}
                    {index < educationData.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-blue-400 to-purple-400 dark:from-blue-700 dark:to-purple-700"></div>
                    )}
                    
                    <div className="flex items-start space-x-4">
                      {/* Timeline dot */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${
                        education.type === 'Ingénieur' ? 'bg-gradient-to-br from-blue-500 to-purple-500' :
                        education.type === 'Licence' ? 'bg-gradient-to-br from-green-500 to-lime-500' :
                        education.type === 'BTS' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                        'bg-gradient-to-br from-gray-400 to-gray-600'
                      }`}>
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-full">
                            {education.year}
                          </span>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            education.type === 'Ingénieur' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                            education.type === 'Licence' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                            education.type === 'BTS' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                            'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                          }`}>
                            {education.type}
                          </span>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {education.title}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                          {education.institution}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {education.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 