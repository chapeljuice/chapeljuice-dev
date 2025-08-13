import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

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

interface ProjectFilterProps {
  projects: Project[];
}

const ProjectFilter = ({ projects }: ProjectFilterProps) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 silkscreen-regular ${
              activeFilter === category
                ? 'bg-teal-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-teal-100 hover:text-teal-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Count */}
      <div className="text-center mb-8">
        <p className="text-gray-600">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          {activeFilter !== 'All' && ` in ${activeFilter}`}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* No results message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No projects found in this category.</p>
          <button
            onClick={() => setActiveFilter('All')}
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            View all projects
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectFilter;
