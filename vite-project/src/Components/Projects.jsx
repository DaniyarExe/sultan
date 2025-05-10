import React from 'react'   ;
import reactIcon from '../assets/react.svg'   ;
import typescriptIcon from '../assets/typescript-icon.svg'   ;
import tailwindIcon from '../assets/tailwind-icon.svg'   ;
import project1 from '../assets/project1.png'   ;
import azios from '../assets/Azios.svg';
import jotaiIcon from '../assets/jotai-seeklogo.svg'   ;
import Minzu from './Projects/minzu.jsx';

const Projects = () => {
    const handleProjectClick = (e, href) => {
        e.preventDefault();
        window.location.href = href;
    };

    return (
        <div className="flex flex-col w-full mt-24">
            <h2
                id="projects"
                className="font-bold text-lg tracking-widest text-white uppercase mb-10"
            >
                Projects
            </h2>
            <div className="flex flex-col w-full">
                <div className="flex items-start gap-8">
                    <div className="rounded-lg w-[640px] border border-light-gray/50 p-5 flex flex-col gap-5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg ">
                        
                            <img
                                alt="project-screenshot"
                                loading="lazy"
                                width="600"
                                height="380"
                                decoding="async"
                                data-nimg="1"
                                className="rounded-md object-cover border-4 border-white"
                                srcSet={`${project1} 1x, ${project1} 2x`}
                                src={project1}
                                style={{ color: 'transparent' }}
                            />
                        
                        <div className="flex flex-col">
                            <p className="font-semibold text-white text-xl tracking-widest">
                                MINZU
                            </p>
                            <p className="text-light-gray mt-3">
                                <span className="text-white">MINZU</span> an online art gallery with integrated purchasing. The website combines art and technology, offering users a convenient platform to discover and order unique original works.
                            </p>
                            <div className="grid grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-2 items-center gap-2 mt-5">
                                <div className="flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300 shadow-md">
                                    <img
                                        alt="icon"
                                        loading="lazy"
                                        width="18"
                                        height="18"
                                        decoding="async"
                                        data-nimg="1"
                                        src={reactIcon}
                                        style={{ color: 'transparent' }}
                                    />
                                    <p className="text-xs whitespace-nowrap">React</p>
                                </div>
                                <div className="flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 shadow-md">
                                    <img
                                        alt="icon"
                                        loading="lazy"
                                        width="15"
                                        height="15"
                                        decoding="async"
                                        data-nimg="1"
                                        src={typescriptIcon}
                                        style={{ color: 'transparent' }}
                                    />
                                    <p className="text-xs whitespace-nowrap">TypeScript</p>
                                </div>
                                <div className="flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-400/20 text-blue-300 shadow-md">
                                    <img
                                        alt="icon"
                                        loading="lazy"
                                        width="18"
                                        height="18"
                                        decoding="async"
                                        data-nimg="1"
                                        src={tailwindIcon}
                                        style={{ color: 'transparent' }}
                                    />
                                    <p className="text-xs whitespace-nowrap">Tailwind</p>
                                </div>
                                <div className="flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-white/20 text-white shadow-md">
                                    <img
                                        alt="icon"
                                        loading="lazy"
                                        width="14"
                                        height="14"
                                        decoding="async"
                                        data-nimg="1"
                                        src={jotaiIcon}
                                        style={{ color: 'transparent' }}
                                    />
                                    <p className="text-xs whitespace-nowrap">Jotai</p>
                                </div>
                                <div className="flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-purple-400/20 text-purple-300 shadow-md">
                                    <img
                                        alt="icon"
                                        loading="lazy"
                                        width="18"
                                        height="18"
                                        decoding="async"
                                        data-nimg="1"
                                        src={azios}
                                        style={{ color: 'transparent' }}
                                    />
                                    <p className="text-xs whitespace-nowrap">Axios</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 w-full mt-8 max-md:flex-col">
                                <a
                                    target="_blank"
                                    className="w-1/3 bg-light-gray/10 uppercase text-xs transition-all hover:bg-light-gray/20 rounded-full font-bold text-white flex items-center justify-center px-4 py-2 gap-2 max-md:w-full shadow-md"
                                    href="https://minzu-dem.vercel.app/"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="tabler-icon tabler-icon-world "
                                    >
                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                        <path d="M3.6 9h16.8"></path>
                                        <path d="M3.6 15h16.8"></path>
                                        <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                                        <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                                    </svg>
                                    Live demo
                                </a>
                                <a
                                    target="_blank"
                                    className="w-1/3 bg-light-gray/10 uppercase text-xs transition-all hover:bg-light-gray/20 rounded-full font-bold text-white flex items-center justify-center px-4 py-2 gap-2 max-md:w-full shadow-md"
                                    href="https://github.com/beastCodeDev/minzu-dem"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="tabler-icon tabler-icon-brand-github "
                                    >
                                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                    </svg>
                                    Source code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;