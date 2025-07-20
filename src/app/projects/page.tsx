// projects page

import { client } from "@/sanity/lib/client";
import ProjectCard from "@/components/ProjectCard";

// fetch project data
const query = `*[_type == "project"] | order(date desc) {
    _id,
    thumbnail,
    title,
    "slug": slug.current,
    description,
    "image": coverImage,
    date,
    skills
}`;

// fetch is async (returns promise that resolves to proj data from sanity )
// use await to wait for data before rendering, enclosing func has to be async

export default async function Projects() {
    const projects = await client.fetch(query);
    console.log(projects);

    return (
        <section className="flex flex-col items-center h-screen">
            <h1 className="text-[100px]">PROJECTS</h1>
            {projects.map((project: any) => (
                <ProjectCard key={project._id} project={project}/>
            ))}
        </section>
    );
}