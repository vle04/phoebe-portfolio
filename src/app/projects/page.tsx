// projects page

import { client } from "@/sanity/lib/client";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/sanity/schemaTypes/project";

// fetch project data
const query = `*[_type == "project"] | order(date desc) {
    _id,
    thumbnail,
    title,
    "slug": slug.current,
    description,
    "image": coverImage,
    date,
    skills,
    programs,
}`;

// fetch is async (returns promise that resolves to proj data from sanity )
// use await to wait for data before rendering, enclosing func has to be async

export default async function Projects() {
  const projects = await client.fetch(query);
  // console.log(projects);

  return (
    <section className="flex flex-col items-center h-screen w-screen">
      <h1 className="text-[100px]">PROJECTS</h1>

      {/* menu container */}
      <div className="bg-blue-100 w-full">menu container lolz</div>

      <div className="w-full bg-red-100">
        {/* projects container */}
        <div className="flex flex-row gap-[30px]">
          {projects.map((project: Project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
