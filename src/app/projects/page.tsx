// projects page

import { client } from "@/sanity/lib/client";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/sanity/schemaTypes/project";
import HomeMenu from "@/components/HomeMenu";

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
      <div className="flex flex-row gap-[52px]">
        {/* menu container */}
        <div className="bg-neutral-300 w-full">
          <HomeMenu />
          menu container lolz 
        </div>

        <div className="w-full">
          {/* projects container */}
          <div className="flex flex-row gap-[30px]">
            {projects.map((project: Project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
