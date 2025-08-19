import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
// import type { Project } from "@/sanity/schemaTypes/project";

// make dynamic routes for each project page
// page's url will depend on the project's slug

// fetch project data based on the slug
const query = `*[_type == "project" && slug.current == $slug][0]{
        title,
        description,
        date,
        role,
        programs,
        skills,
        overview,
        problem,
        images,
        thumbnail
    }`;

// define page props type 
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  // params.slug comes from the url
  const { slug } = await params;
  const project = await client.fetch(query, { slug });

  // edge case: project doesn't exist
  if (!project) return <p>project not found</p>;

  return (
    <section className="flex flex-col px-6 gap-8">
      {/* intro container */}
      <h1 className="text-[70px]">{project.title}</h1>

      <div className="flex flex-col gap-4">
        <p>{project.description}</p>
        <p>{project.date}</p>
      </div>

      <div className="flex flex-row justify-between">
        <p>my role/title: {project.role}</p>
        <p>program icons will go here</p>
      </div>

      <div>
        <h2>overview</h2>
        <div className="px-10 prose">
          <PortableText value={project.overview} />
        </div>
      </div>

      <div>
        <h2>problem</h2>
        <div className="px-10 prose">
          <PortableText value={project.problem} />
        </div>
      </div>

      {/* image gallery */}
      {/* TODO: make component for gallery */}
      <div>
        <h2>image gallery</h2>
      </div>
    </section>
  );
}

// generate static params for ssg, ensures slugs are known at build time
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const projects: { slug: { current: string } }[] = await client.fetch(
    `*[_type=="project"]{slug}`
  );
  return projects.map((project) => ({ slug: project.slug.current }));
}