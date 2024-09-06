// Navigation utility functions

export const flattenParams = (params: string | string[]) => {
  return Array.isArray(params) ? params.join("/") : params;
};
