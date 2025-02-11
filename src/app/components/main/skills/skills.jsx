import { SkillsClient } from "@/app/components/main/skills/skillsClient";
import { fetchTechnologies } from "@/app/lib/technologyData";

export default async function Skills() {
    const { technologies } = await fetchTechnologies();
    return <SkillsClient technologies={technologies} />;
  }