import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";

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

export default async function ProjectPage({ params }: { params: { slug: string };}) {
  // params.slug comes from the url
  const { slug } = await params;
  const project = await client.fetch(query, { slug });

  // edge case: project doesn't exist
  if (!project) return <p>project not found</p>;

  return <section>project page</section>;
}
