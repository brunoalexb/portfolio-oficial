import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-black to-gray-800">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h3 className="text-4xl text-white font-bold mb-4">Contato</h3>
        <p className="text-3xl text-white mb-8">Entre em contato comigo pelas minhas redes sociais.</p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/brunoa-barros/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600"
          >
            <LinkedinLogo size={60} weight="bold" />
          </a>
          <a
            href="https://www.instagram.com/bruno_alexandre7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            <InstagramLogo size={60} weight="bold" />
          </a>
          <a
            href="https://github.com/brunoalexb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-500"
          >
            <GithubLogo size={60} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
