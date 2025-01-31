import React, { useState, useEffect } from "react";

function Hero() {
  const [currentText, setCurrentText] = useState("Tecnologia");

  useEffect(() => {
    const texts = ["Tecnologia", "Desenvolvimento", "Inovação"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setCurrentText(texts[index]);
    }, 2000); // Alterna a cada 2 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-black to-gray-800 text-white py-20 text-center min-h-screen flex items-center"
    >
      <div className="container mx-auto">
        <h2 className="text-6xl font-bold">Olá, eu sou o Bruno</h2>
        <p className="mt-6 text-4xl">
          Desenvolvedor Fullstack | Apaixonado por{" "}
          <span className="text-white">{currentText}</span>
        </p>

        <img
          src="perfil.jpg"
          alt="Bruno"
          className="mx-auto mt-10 rounded-full w-96 h-96 object-cover"
        />

        <a
          href="#projects"
          className="mt-8 inline-block bg-white text-black text-3xl px-6 py-2 rounded-lg shadow-lg hover:bg-gray-100"
        >
          Ver Projetos
        </a>
      </div>
    </section>
  );
}

export default Hero;
