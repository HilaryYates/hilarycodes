import React from "react";
import { BsSquareFill } from "react-icons/bs";

const Projects = [
  {
    id: 1,
    title: "Tasks",
    technologies: ["React", "NodeJS", "PostgreSQL", "Tailwind", "Prisma"],
    link: "https://github.com/HilaryYates/Todo-List",
    description: "CRUD operations",
  },
  {
    id: 2,
    title: "Wikipedia Clone",
    technologies: ["React", "NodeJS", "PostgreSQL", "Knex", "ByCript"],
    link: "https://github.com/HilaryYates/wikipedia-clone",
    description:
      "This was the first app I made using PostgresSQL and I really enjoyed learning it",
  },
  {
    id: 3,
    title: "Portfolio",
    technologies: ["React", "NodeJS", "TypeScript", "Tailwind"],
    link: "https://github.com/HilaryYates/hilarycodes",
    description:
      "I ran into a lot of issues trying to make this app mobile responsive, so I had to do a lot of trial and error to learn the css",
  },
  {
    id: 3,
    title: "Management System",
    technologies: ["React", "NodeJS", "PostreSQL"],
    link: "https://github.com/HilaryYates/Management-System",
    description: "Through this app I learnt how to make CRUD operations",
  },
  {
    id: 3,
    title: "Chat App",
    technologies: ["Socket.io", "React", "NodeJS", "Express", "TypeScript"],
    link: "https://github.com/HilaryYates/messaging-app/tree/main/chat%20app/src",
    description: "I learnt how to use websockets",
  },
  {
    id: 3,
    title: "Shopping Catalogue",
    technologies: ["Redux"],
    link: "",
    description: "Text",
  },
];

export const ProjectSection: React.FC = () => {
  return (
    <div className='mr-4 flex flex-col overflow-y-scroll'>
      <div className='flex justify-end items-center '>
        <BsSquareFill className='text-xs' />
        <p className='font-semibold'>Projects</p>
      </div>
      <div className='flex flex-col items-end  mt-4'>
        {Projects.map((project) => (
          <div>
            <a
              className='text-right mt-2 hover:text-stone-500'
              key={project.id}
              href={project.link}
              target='_blank'
            >
              <h2 className='text-xl uppercase font-thin '>{project.title}</h2>
              <p className='text-sm font-semibold'>
                {project.technologies.join(" / ")}
              </p>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
