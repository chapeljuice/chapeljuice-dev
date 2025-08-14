import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  year: string;
  status: string;
  link?: string;
  github?: string | null;
  image?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl smooth-card overflow-hidden cursor-pointer group flex flex-col h-full"
      onClick={onClick}
    >
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden transition-all duration-[180ms] ease-out group-hover:from-gray-200 group-hover:to-gray-300 relative">
        {project.image ? (
          <img 
            src={project.image} 
            alt={`${project.title} screenshot`}
            className={`w-full h-full object-cover smooth-scale opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.1s_forwards] ${
              project.status === 'Coming Soon' ? 'coming-soon' : ''
            }`}
            loading="eager"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-gray-500 text-sm transition-transform duration-[180ms] ease-out group-hover:scale-110">
              Click to view details
            </span>
          </div>
        )}
        
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            project.status === 'Completed' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {project.status}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-teal-600 font-semibold">{project.category}</span>
          <span className="text-sm text-gray-500">{project.year}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 silkscreen-regular">{project.title}</h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-end mt-auto">
          <div className="flex gap-2">
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 font-medium text-sm"
              >
                View Live →
              </a>
            )}
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-700 font-medium text-sm"
              >
                GitHub →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
