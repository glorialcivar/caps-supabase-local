// Navigation utility functions

export const replaceHistorySoft = (url: string) => {
  history.replaceState({ ...history.state, as: url, url: url }, "", url);
};
