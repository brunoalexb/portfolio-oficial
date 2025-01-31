
function ProjectCard({ title, description, technologies, link }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-gray-800 font-semibold">Tecnologias: {technologies}</p>
      <a href={link} className="mt-4 inline-block text-blue-500 hover:underline">Ver Projeto</a>
    </div>
  )
}

export default ProjectCard