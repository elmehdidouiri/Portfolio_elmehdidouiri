import React from 'react';
import * as SiIcons from 'react-icons/si';
import skillsData from '../data/skills.json';

const Skills = () => {
  const categories = [
    { key: 'languages', label: 'Langages de programmation' },
    { key: 'frameworks', label: 'Frameworks & Bibliothèques' },
    { key: 'databases', label: 'Bases de données' },
    { key: 'tools', label: 'Outils & Technologies' },
    { key: 'mobile', label: 'Développement mobile' }
  ];

  const fallbackIcon = SiIcons.SiReact; // Icône générique si l'icône n'existe pas

  const SkillGrid = ({ skills }) => (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
      {skills.map((skill, idx) => {
        // Cas particulier pour C# : afficher un carré avec le texte C#
        if (skill.name === 'C#') {
          return (
            <div key={idx} className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 mb-2 flex items-center justify-center bg-gray-800 dark:bg-gray-700 rounded-lg shadow text-white text-3xl font-bold">
                C#
              </div>
              <span className="text-sm text-center text-gray-800 dark:text-gray-200 font-medium">C#</span>
            </div>
          );
        }
        const Icon = SiIcons[skill.icon] || fallbackIcon;
        return (
          <div key={idx} className="flex flex-col items-center justify-center">
            <div className="text-5xl mb-2 text-gray-700 dark:text-white">
              <Icon />
            </div>
            <span className="text-sm text-center text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Mes compétences
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mes compétences techniques, organisées par catégories, acquises au fil de mes projets et expériences.
          </p>
        </div>
        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {categories.map(cat =>
            skillsData[cat.key] && skillsData[cat.key].length > 0 ? (
              <div key={cat.key} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{cat.label}</h2>
                <SkillGrid skills={skillsData[cat.key]} />
              </div>
            ) : null
          )}
        </div>
        {/* Summary Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Compétences en constante évolution
            </h2>
            <p className="text-xl opacity-90 mb-6">
              Je continue d'apprendre et de me perfectionner dans les nouvelles technologies
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-white/10 rounded-xl p-6 shadow">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="opacity-90">Technologies maîtrisées</div>
              </div>
              <div className="text-center bg-white/10 rounded-xl p-6 shadow">
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="opacity-90">Années d'expérience</div>
              </div>
              <div className="text-center bg-white/10 rounded-xl p-6 shadow">
                <div className="text-3xl font-bold mb-2">∞</div>
                <div className="opacity-90">Envie d'apprendre</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills; 