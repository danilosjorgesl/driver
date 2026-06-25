import { seedState } from './seed.js';
import { loadState, saveState } from './storage.js';
import { createStore } from './store.js';
import { createRouter } from './router.js';
import { Header } from './components/Header.js';
import { BottomNav } from './components/BottomNav.js';

const initialState = loadState() || seedState;
const store = createStore(initialState);
const router = createRouter(store);

store.subscribe((state) => {
  saveState(state);
  render();
});

function render() {
  const state = store.getState();
  const currentRoute = state.ui.currentRoute;

  document.querySelector('#app').innerHTML = `
    <div class="app-shell">
      ${Header({ state })}
      <main class="app-main">
        ${router.render(currentRoute)}
      </main>
      ${BottomNav({ currentRoute })}
    </div>
  `;

  bindNavigation();
  router.bind(currentRoute);
}

function bindNavigation() {
  document.querySelectorAll('[data-route]').forEach((button) => {
    button.addEventListener('click', () => {
      store.setState({
        ui: {
          ...store.getState().ui,
          currentRoute: button.dataset.route,
        },
      });
    });
  });
}

render();
