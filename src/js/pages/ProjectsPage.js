import { ProjectCard } from '../components/ProjectCard.js';

export function ProjectsPage(store) {
  return {
    render() {
      const state = store.getState();

      return `
        <section class="page">
          <h2 class="page-title">Projetos</h2>
          <p class="page-subtitle">Objetivos maiores sem poluir a Home.</p>

          <div class="project-list">
            ${state.projects.map((project) => ProjectCard({ project })).join('')}
          </div>
        </section>
      `;
    },

    bind() {},
  };
}
