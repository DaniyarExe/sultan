import React from 'react';  
const WorkExperience = () => {
return (
    <div className="flex flex-col w-full mt-24">
    <h2  id="work-experience" className="font-bold text-lg tracking-widest text-white uppercase mb-10">Work Experiecne</h2>
    <div className='flex flex-col w-full gap-14'>
        <div className="flex w-full gap-10">
            <p className="text-light-gray whitespace-nowrap max-sm:hidden">May 2024-Jule 2024</p>
            <div className="flex flex-col">
                <p className="text-white text-lg font-semibold">Fronted Software Developer</p>
                <p className="text-light-gray mb-4">Beast Code</p>
                <p className="text-light-gray">Worked in a team on the development of a website, receiving mentorship from a Middle-level developer. Actively applied new technologies and teamwork principles, significantly expanding professional skills.</p>
            </div>
        </div>

    </div>
    </div>
    );
}
export default WorkExperience;