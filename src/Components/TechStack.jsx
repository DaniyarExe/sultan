// src/components/TechStack.js
import React from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
} from 'react-icons/fa';
import {  SiTypescript, SiTailwindcss,  } from 'react-icons/si';

const stack = [
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-300" /> },
  { name: 'SCSS', icon: <FaSass className="text-pink-400" /> },
];

function TechStack() {
  return (
    <div className="flex flex-col mt-7">
      <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">Tech stack</h2>
      <div className="text-white grid grid-cols-5 gap-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        {stack.map(({ name, icon }) => (
          <button
            key={name}
            type="button"
            className="border-light-gray/50 hover:bg-light-gray/10 gap-1.5 h-24 text-light-gray border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group"
          >
            <div className="transition-transform duration-300 group-hover:-translate-y-1 text-2xl">
              {icon}
            </div>
            <p>{name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
