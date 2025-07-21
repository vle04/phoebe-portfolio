// individual project cards for the projects page

import Image from "next/image";
import SkillTab from "./SkillTab";
import { urlFor } from "@/sanity/lib/image";
import type { Project } from "@/sanity/schemaTypes/project";

export default function ProjectCard({ project }: { project: Project }) {
  const imageUrl = project.thumbnail
    ? urlFor(project.thumbnail).width(200).height(200).url()
    : null;

    console.log(project.programs);

  return (
    <div className="flex flex-row gap-8 h-fit">
      {/* left container */}
      <div>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={project.title}
            width={200}
            height={200}
            className="rounded-4xl"
          />
        ) : (
          <p>no cover image provided</p>
        )}
      </div>

      {/* right container */}
      <div className="max-w-md">
        {/* skills wrapper */}
        <div className="flex flex-col">
          <div className="flex flex-row gap-4">
            {project.skills?.map((skill, i) => (
              <SkillTab key={i} label={skill} />
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-3xl">{project.title}</h2>

          {/* description container */}
          <div className="leading-relaxed min-h-[5rem]">
            <p className="whitespace-normal break-words">
              {project.description}
            </p>
          </div>

          <p>{project.date}</p>
          <p>Programs: {project.programs?.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
