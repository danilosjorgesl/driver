import { ProgressCard } from './ProgressCard.js';

export function ProjectCard({ project }) {
  return ProgressCard({
    title: project.name,
    current: project.current,
    target: project.target,
    description: `${project.description} Prazo: ${project.deadline}.`,
  });
}
