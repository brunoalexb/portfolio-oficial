import { Coffee } from "@phosphor-icons/react";


function About() {
  return (
    <section
      id="about"
      className="py-16 pt-20 bg-gradient-to-r from-black to-gray-800 min-h-screen flex items-start"
    >
      <div className="container mx-auto text-center">
        <h3 className="text-4xl text-white font-bold mb-4">Sobre Mim</h3>
        <p className="text-3xl text-white mb-6">
          Olá, sou um desenvolvedor web fullstack com paixão por transformar ideias em soluçõese gerar impacto com minhas entregas. 
          Minha jornada no mundo da tecnologia começou pela curiosidade em entender como os sistemas funcionam, o que me levou a
          mergulhar nesse universo, aprender linguagens e ferramentas de desenvolvimento.
        </p>
        <p className="text-3xl text-white">
          Sou estudante de Análise e Desenvolvimento de Sistemas com experiência em Java, Spring Boot, React, Node.js, Tailwind CSS, e outras tecnologias modernas que me ajudam a criar interfaces 
          de usuário dinâmicas e APIs robustas. Além disso, busco constantemente aprender novas técnicas e aprimorar minhas 
          habilidades para entregar projetos de alta qualidade. Estou sempre animado para enfrentar desafios e contribuir para 
          equipes criativas e inovadoras.
        </p>
      </div>
    </section>
  );
}

export default About;
