// Performance utility functions

export const debounce = <Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number
): ((...args: Params) => void) => {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};
