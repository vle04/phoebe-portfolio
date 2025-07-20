// individual project cards for the projects page

import Image from "next/image";
// import raccoon from "../public/images/raccoon.png";
// import SkillTab from "./SkillTab";
import { urlFor } from "@/sanity/lib/image";

// project card props
type Project = {
  title: string;
  description: string;
  date?: string;
  programs?: string[];
  skills?: string[];
  thumbnail?: any; // sanity image object
};

export default function ProjectCard({ project }: { project: Project }) {
  const imageUrl = project.thumbnail ? urlFor(project.thumbnail).width(200).height(200).url() : null;
  console.log("Image URL:", imageUrl);

  return (
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

    // <div className="flex flex-row gap-8 h-fit">
    //   <div>
    //     {/* make it so that the component takes in an image as param */}
    //     <Image
    //       src={raccoon}
    //       alt="raccoon"
    //       width={200}
    //       height={200}
    //       className="rounded-4xl"
    //     />
    //   </div>

    //   <div className="flex flex-col">
    //     <div className="flex flex-row gap-4">
    //       {Array(3)
    //         .fill(true)
    //         .map((_, i) => (
    //           <SkillTab key={i} />
    //         ))}
    //     </div>

    //     <div className="flex flex-col justify-items-end">
    //       <div className="">
    //         <h2 className="text-3xl">Project Name</h2>
    //         <p>short description hahahahahahahahahahhhhahaha</p>
    //       </div>

    //       <div className="">
    //         <p>January 20xx - February 20xx</p>
    //         <p>Programs: your mom</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
