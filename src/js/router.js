import { HomePage } from './pages/HomePage.js';
import { BillsPage } from './pages/BillsPage.js';
import { GoalsPage } from './pages/GoalsPage.js';
import { ProjectsPage } from './pages/ProjectsPage.js';
import { MorePage } from './pages/MorePage.js';

export function createRouter(store) {
  const pages = {
    home: HomePage(store),
    bills: BillsPage(store),
    goals: GoalsPage(store),
    projects: ProjectsPage(store),
    more: MorePage(store),
  };

  return {
    render(route) {
      return (pages[route] || pages.home).render();
    },

    bind(route) {
      const page = pages[route] || pages.home;
      page.bind?.();
    },
  };
}
