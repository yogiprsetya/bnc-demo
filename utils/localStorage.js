const PREFIX_STORAGE = "bnc";

export const getLocalStorage = (key) => {
  const stored = localStorage.getItem(`${PREFIX_STORAGE}@${key}`);

  try {
    return JSON.parse(stored);
  } catch (e) {
    return stored;
  }
};

export const setLocalStorage = (key, value) => {
  const parseRequaired = typeof value === "object" || typeof value === "array";
  const parsed = parseRequaired ? JSON.stringify(value) : value;
  localStorage.setItem(`${PREFIX_STORAGE}@${key}`, parsed);
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(`${PREFIX_STORAGE}@${key}`);
};
