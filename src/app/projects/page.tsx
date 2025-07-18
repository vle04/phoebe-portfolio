// projects page

import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
        <section className="flex flex-col items-center h-screen">
            <h1 className="text-[100px]">PROJECTS</h1>
            <ProjectCard/>
        </section>
    );
}