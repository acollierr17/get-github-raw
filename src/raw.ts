export const getRawURL = (url: string): string => {
  const u = url.split('/');
  const username = u[3];
  const repo = u[4];
  const file = u.slice(6).join('/');
  
  return `https://raw.githubusercontent.com/${username}/${repo}/${file}`;
};
