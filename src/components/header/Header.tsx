import React from 'react'

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white py-6">
        <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold"><a href="#hero" className="hover:underline">Dev Bruno</a></h1>
            <ul className="flex gap-4">
                <li><a href="#about" className="text-2xl font-bold hover:underline">Sobre</a></li>
                <li><a href="#projects" className="text-2xl  font-bold hover:underline">Projetos</a></li>
                <li><a href="#contact" className="text-2xl  font-bold hover:underline">Contato</a></li>
            </ul>
        </nav>
  </header>
  )
}

export default Header