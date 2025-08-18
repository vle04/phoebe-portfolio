// projects page

import { client } from "@/sanity/lib/client";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/sanity/schemaTypes/project";
import HomeMenu from "@/components/HomeMenu";
import Image from "next/image";
import RaccoonTiger from "../../../public/images/raccoon-tiger.png";

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
    <section className="flex flex-col items-center h-fit w-screen mb-20">
      <div className="flex flex-row gap-[52px]">
        
        {/* sidebar container */}
        <div className="flex flex-col w-fit items-center">
          <Image
            src={RaccoonTiger}
            alt="raccoon and tiger holding coffee"
            width={230}
            height={150}
          />
          {/* <div className="bg-neutral-300">
            <HomeMenu />
          </div> */}
        </div>

        {/* projects container */}
        <div className="w-fit">
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
