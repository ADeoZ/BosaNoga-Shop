export const saveToLocalStorage = (key, state) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

export const loadFromLocalStorage = (key) => {
  try {
    const stateStr = localStorage.getItem(key);
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};
