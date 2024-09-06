// Common utility functions

export const sanitizeQueryParams = (query: NodeJS.Dict<string | string[]>) => {
  const newQuery: Record<string, string | undefined> = {};
  Object.entries(query).forEach(entry => {
    const [key, value] = entry;
    if (typeof value === "string") newQuery[key] = value;
  });
  return newQuery;
};
