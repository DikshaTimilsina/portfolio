import { projects } from "@/contents/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-white dark:bg-gray-800 border rounded-xl shadow hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-200">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {project.description}
            </p>
            {project.technologies && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Tech: {project.technologies.join(", ")}
              </p>
            )}
            {project.link && project.link !== "" && (
              <a
                href={project.link}
                target="_blank"
                className="text-blue-500 dark:text-blue-400 underline"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
