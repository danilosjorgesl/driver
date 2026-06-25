export function createStore(initialState) {
  let state = structuredClone(initialState);
  const listeners = new Set();

  return {
    getState() {
      return state;
    },

    setState(partialState) {
      state = {
        ...state,
        ...partialState,
      };
      listeners.forEach((listener) => listener(state));
    },

    update(updater) {
      state = updater(structuredClone(state));
      listeners.forEach((listener) => listener(state));
    },

    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}
