import React, { useState } from 'react';
import { Github, ExternalLink, Tag, Calendar } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects = () => {
  // Supprimer toute la logique de filtre par catégorie
  // const [selectedCategory, setSelectedCategory] = useState('all');
  // const categories = [...];
  // const filteredProjects = ...;

  // On affiche simplement tous les projets
  const filteredProjects = projectsData;

  const ProjectCard = ({ project }) => {
    // Détection des liens disponibles
    const hasGithub = project.githubUrl && project.githubUrl.trim() !== '';
    const hasDemo = project.demoUrl && project.demoUrl.trim() !== '';

    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-all duration-300 overflow-hidden">
        {/* Project Image (remplacé par un fond dégradé sans texte ni image) */}
        <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative overflow-hidden">
          {/* Aucun contenu ici, juste le fond */}
        </div>
        {/* Project Content */}
        <div className="p-6">
          {/* Category Badge */}
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.category === 'Hackathon' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
              project.category === 'Santé' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
              project.category === 'Desktop' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
              project.category === 'Gestion' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
              'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
            }`}>
              {project.category}
            </span>
            <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">2024</span>
            </div>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <Tag className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Technologies
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
            {hasDemo && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Démo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Mes projets
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mes réalisations et projets développés avec passion, créativité et expertise technique.
          </p>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Github className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Aucun projet trouvé
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Aucun projet ne correspond à cette catégorie pour le moment.
            </p>
          </div>
        )}
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">
              Envie de collaborer ?
            </h2>
            <p className="text-xl opacity-90 mb-6">
              Je suis toujours ouvert aux nouveaux projets et opportunités
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 