export const getAseetsUrl = (imageUrl) => {
  return new URL(`../assets/${imageUrl}`, import.meta.url);
};
