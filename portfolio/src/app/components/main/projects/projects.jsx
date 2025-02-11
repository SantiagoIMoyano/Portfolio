import { ProjectsClient } from "@/app/components/main/projects/projectsClient";
import { fetchProjects } from "@/app/lib/projectData";

export default async function Projects() {
    const { projects } = await fetchProjects();
    console.log(projects);
    return <ProjectsClient projects={projects} />;
  }