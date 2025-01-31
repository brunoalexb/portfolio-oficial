import ProjectCard from "../projectcard/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-16 pt-20 bg-gradient-to-r from-black to-gray-800 min-h-[50vh]">
      <div className="container mx-auto text-white text-center">
        <h3 className="text-4xl font-bold mb-8">Meus Projetos</h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Adicione seus projetos aqui */}
          <ProjectCard 
            title="Projeto 1" 
            description="Um projeto incrível que fiz usando React e Node.js."
            technologies="React, Node.js, Tailwind"
            link="#"
          />
          <ProjectCard 
            title="Projeto 2" 
            description="Uma aplicação para gerenciamento de tarefas."
            technologies="Angular, Java, Spring Boot"
            link="#"
          />
          {/* Outros projetos */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
