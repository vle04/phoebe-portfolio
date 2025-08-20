// projects page

import { client } from "@/sanity/lib/client";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/sanity/schemaTypes/project";
// import HomeMenu from "@/components/HomeMenu";
// import Image from "next/image";
// import RaccoonTiger from "../../../public/images/raccoon-tiger.png";

// fetch project data
const query = `*[_type == "project"] | order(date desc) {
    _id,
    thumbnail,
    title,
    "slug": slug.current,
    description,
    date,
    skills,
    programs,
}`;

// fetch is async (returns promise that resolves to proj data from sanity)
// use await to wait for data before rendering, enclosing func has to be async

export default async function Projects() {
  const projects = await client.fetch(query);

  return (
    <section className="flex flex-col">
        {/* projects container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project: Project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
    </section>
  );
}
