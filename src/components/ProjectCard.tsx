// individual project cards for the projects page

import Image from "next/image";
import SkillTab from "./SkillTab";
import { urlFor } from "@/sanity/lib/image";
import type { Project } from "@/sanity/schemaTypes/project";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  const imageUrl = project.thumbnail
    ? urlFor(project.thumbnail).width(200).height(200).url()
    : null;

  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="flex flex-col h-fit min-w-[330px] hover:bg-violet-100 rounded-2xl px-8 py-4">
        {/* skills wrapper */}
        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-4">
            {project.skills?.map((skill, i) => (
              <SkillTab key={i} label={skill} />
            ))}
          </div>
        </div>

        {/* image container */}
        <div>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={project.title}
              width={330}
              height={330}
              className="rounded-4xl mt-[12px] mb-[23px]"
            />
          ) : (
            <p>no cover image provided</p>
          )}
        </div>

        {/* text container */}
        <div className="max-w-md text-[15px]">
          <h2 className="text-[34px]">{project.title}</h2>

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
    </Link>
  );
}
